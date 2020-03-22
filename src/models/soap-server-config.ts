//SOAP Server config, will b provided be the application
export type SoapServerConfig = {
    port?: number;
    [key: string]: any;
};

//Controller will be used by router for selecting the method.
export type Controller = {
    [method: string]: Function;
};

export interface Options{
    serviceName: string
    portName: string
    operationName: string
    outputName: string
    args: any
    style: any
    includeTimestamp: string
    headers: any
}
