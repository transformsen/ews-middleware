import { put, requestBody } from "@loopback/rest";
import { inject } from "@loopback/core";
import { Account } from '../services/account.service';

export class OutlookAccountController{
  constructor(
    @inject('services.Account')
    protected accountService: Account
){}
  //https://social.msdn.microsoft.com/Forums/office/en-US/2e567ebe-c688-4d06-ae16-58f84f5f8ef0/setuserphoto-via-ews?forum=exchangesvrdevelopment
  //setUserPhoto - service is not available in EWS
  //We can either use power shell or only we can set it in outlook.
  @put('/photo')
  setUserPhoto(@requestBody() image: any) {
    return this.accountService.setUserPhoto({image});
  }
}