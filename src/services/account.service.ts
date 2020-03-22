import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {AccountDataSource} from '../datasources';

export interface Account {
  // this is where you define the Node.js methods that will be
  // mapped to REST operations as stated in the datasource
  // json file.
  // For calling third part REST End points
  getUserPhoto(email: string, sizeRequested: string): Promise<any>;
  getClientAccessToken(id: string): Promise<any>;
  getUserAvailability(timeZone: string) : Promise<any>;
  getUserOofSettings(email: string | undefined): Promise<any>;
  getPersona(personaId: string | undefined): Promise<any>;
  getInboxRules(address: string | undefined): Promise<any>;
  findPeople(folderId: string | undefined): Promise<any>;
  setUserOofSettings(request: any): Promise<any>;
  updateInboxRules(request: any): Promise<any>;
  setUserPhoto(request: any): Promise<any>;
}

export class AccountProvider implements Provider<Account> {
  constructor(
    // Account must match the name property in the datasource json file
    @inject('datasources.Account')
    protected dataSource: AccountDataSource = new AccountDataSource(),
  ) {}

  value(): Promise<Account> {
    return getService(this.dataSource);
  }
}
