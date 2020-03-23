const XMLHandler = require('strong-soap/lib/parser/xmlHandler');
import { SOAPServer } from "../servers/soap-server";
import { Options, Controller } from "../models/soap-server-config";
import { SOAP_VERSION_2 } from "../constants";
/**
 * 
 * @param server 
 * LOOPBACK is controller based Framework.
 * All the request for Any type of services need to be passed via controller.
 * SOAP router handler the request and route to the coresponding controller.
 * Example usage:
 * After server start up send server obect
 * SOAPServer - start()
 *      this.server = soap.listen(this.httpServer, BASE_URL, {}, wsdl);
 *      soapRouter(this);
 */
export function soapRouter(server: SOAPServer) {
    //_executeMethod of strong-soap has been overriden for supporting loop-back controller based approach
    server.server._executeMethod = handler(server);
}

/**
 * 
 * @param soapServer 
 * This handler function will return executeMethod implementation 
 * Supporting loopback controller based routing 
 */
export function handler(soapServer: SOAPServer):
    (options: Options, req: any, callback: any) => Promise<any> {
    let controller: Controller;
    return async function (options: Options, req: any, callback: any) {
        options = options || {};
        const server = soapServer.server;
        const { serviceName, portName, operationName, args,
            includeTimestamp } = options;
        let handled = false;
        let operationFun;
        //Port name is the controller
        controller = await soapServer.get<Controller>(`controllers.${serviceName}Controller`);

        try {
            //operationName is the method name
            const port: any = controller[portName];
            operationFun = port[operationName]
        } catch (error) {
            console.error('Server executeMethod: error: %s ', error.message);
            return callback(this._envelope('', includeTimestamp));
        }

        function handleResult(error: any, result: any) {
            if (handled) {
                return;
            }
            handled = true;
            //operation from wsdl
            const operation = server.wsdl.definitions.services[serviceName]
                .ports[portName].binding.operations[operationName];

            if (error?.Fault !== undefined) {
                return server._sendError(operation, error, callback, includeTimestamp);
            }
            else if (result === undefined) {
                result = error;
            }

            const operationDescriptor = operation.describe(server.wsdl.definitions);
            const outputBodyDescriptor = operationDescriptor.output.body;

            let soapNsURI = 'http://schemas.xmlsoap.org/soap/envelope/';
            const soapNsPrefix = server.wsdl.options.envelopeKey || 'soap';

            if (operation.soapVersion === SOAP_VERSION_2) {
                soapNsURI = 'http://www.w3.org/2003/05/soap-envelope';
            }

            const nsContext = server.createNamespaceContext(soapNsPrefix, soapNsURI);
            const envelope = XMLHandler.createSOAPEnvelope(soapNsPrefix, soapNsURI);
            server.xmlHandler.jsonToXml(envelope.body, nsContext, outputBodyDescriptor, result);

            server._envelope(envelope, includeTimestamp);
            const xml = envelope.doc.end({ pretty: true });
            callback(xml);
        }

        if (!server.wsdl.definitions.services[serviceName].ports[portName]
            .binding.operations[operationName].output) {
            // no output defined = one-way operation so return empty response
            handled = true;
            callback('');
        }

        const result = await operationFun(args, handleResult, options.headers, req);
        if (typeof result !== 'undefined') {
            handleResult(null, result);
        }
    }
} 