import { BootMixin } from '@loopback/boot';
import { RepositoryMixin } from '@loopback/repository';
import { ServiceMixin } from '@loopback/service-proxy';

import { ApplicationConfig, Application } from '@loopback/core';
import { SOAPServer } from './servers/soap-server';
import { SOAP_SERVER_PORT } from './constants';
import {RestServer, RestComponent} from '@loopback/rest';

/**
 * EwsApplication
 * Mixin - Boot, Service, Repository
 * This application is using lombok dependency injenction and datasource 
 * for interacting with thrid part services
 */
export class EwsApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(Application)),
)
{
  options: ApplicationConfig;
  constructor(options: ApplicationConfig = {}) {
    super(options);
    //SOAP server
    this.server(SOAPServer);
    //REST Server
    //Creating REST server for the REST APIs(https://docs.microsoft.com/en-us/outlook/rest/) 
    this.component(RestComponent)
    this.options.port = this.options.port || SOAP_SERVER_PORT;
    this.projectRoot = __dirname;
    this.bind('soapserver.config').to(this.options);
  }
}