import {EwsApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import { RestServer } from '@loopback/rest';

export {EwsApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new EwsApplication(options);
  await app.boot();
  await app.start();

  const restServer = await app.getServer(RestServer);
  console.log(`REST Server is running at ${restServer.url}`);

  console.log(`SOAP Server is running on port ${app.options.port}`);
   
  return app;
}
