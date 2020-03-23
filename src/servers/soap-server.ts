import { Context, inject } from '@loopback/context';
import { Application, CoreBindings, Server } from '@loopback/core';
import http from 'http';
import pEvent from 'p-event';
import * as fs from 'fs'; 
import { soapRouter } from '../routes/soap-route';
import { WSDL_LOCATION, BASE_URL, WDSL_ENCODING } from '../constants';
import { SoapServerConfig } from '../models/soap-server-config';
const soap = require('strong-soap').soap;

/**
 * SOAP Server for serving SOAP Based web requests
 * Exend and 
 */
export class SOAPServer extends Context implements Server {
    private _listening = false;
    private httpServer: http.Server;
    public server: any;

    constructor(
        @inject(CoreBindings.APPLICATION_INSTANCE) public app?: Application,
        @inject('soapserver.config') public config?: SoapServerConfig,
    ) {
        super(app);
        this.config = config ?? {};
    }

    /**
     * Start the SOAP Server
     */
    async start(): Promise<void> {
        //Read wsdl file using node fs
        const wsdl = fs.readFileSync(WSDL_LOCATION, WDSL_ENCODING);
        //Starting http server
        this.httpServer = http.createServer(function (request: any, response: any) {
            response.end("404: Not Found: " + request.url);
        });
        this.httpServer.listen(this.config?.port);
        this.listening = true;
        //Adding strong-soap (SOAP Server)
        this.server = soap.listen(this.httpServer, BASE_URL, {}, wsdl);
        soapRouter(this);
        return pEvent(this.httpServer, 'listening');
    }

    /**
     * STOP SOAP server
     */
    async stop(): Promise<void> {
        this.httpServer.close();
        this.listening = false;
        return pEvent(this.server, 'close');
    }

    get listening() {
        return this._listening;
    }

    set listening(listening) {
        this._listening = listening;
    }
}