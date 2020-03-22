import {
    GetUserPhotoType, GetUserPhotoResponseType,
    SetUserPhotoType, SetUserPhotoResponseMessageType,
    GetClientAccessTokenType, GetClientAccessTokenResponseType,
    GetUserAvailabilityRequestType, GetUserAvailabilityResponseType,
    GetUserOofSettingsRequest, GetUserOofSettingsResponse,
    SetUserOofSettingsRequest, SetUserOofSettingsResponse,
    FindPeopleType, FindPeopleResponseMessageType, 
    GetPersonaType, GetPersonaResponseMessageType, 
    GetInboxRulesRequestType, GetInboxRulesResponseType, 
    UpdateInboxRulesRequestType, UpdateInboxRulesResponseType,
    FreeBusyResponseType
} from "../models/ews-services-model";
import { RequestServerVersion, CalendarEvent } from "../models/types";
import { Account } from '../services/account.service';
import { inject } from "@loopback/core";

/**
 * AccountServiceController - This controller will handle account related SOAP webservices
 * SOAP - Service name - Controller
 * SOAP - Port - AccountInfoPort
 * SOPA - Operating - AccountInfoPort[method]. Example AccountInfoPort[GetUserPhoto]
 * Loopback is controller base routing. Similar will be follow for SOAP request.
 */
export class AccountServiceController {
    constructor(
        @inject('services.Account')
        protected accountService: Account
    ){}
    AccountInfoPort = new AccountInfoPort(this.accountService)
}

class AccountInfoPort {
    accountService: Account;

    constructor(accountService: Account){
        this.accountService = accountService
    }
    GetUserPhoto = async (request: GetUserPhotoType, cb: any, header: RequestServerVersion):
        Promise<GetUserPhotoResponseType> => {
        console.log('request = ', request, ' header = ', header)
        const response =  await this.accountService.getUserPhoto(
            request.Email, request.SizeRequested);
        return {ResponseCode: '00', PictureData:response.pictureData, 
        HasChanged: response.hasChanged};
    }

    SetUserPhoto = async (request: SetUserPhotoType, cb: any, header: RequestServerVersion):
        Promise<SetUserPhotoResponseMessageType> => {
        console.log('request = ', request)
        console.log('header = ', header)

        const jsonResponse = { "GetPersonaResult": 'hello', "ServerVersion": '1.2' };
        return jsonResponse;
    }

    GetClientAccessToken = async (request: GetClientAccessTokenType, cb: any, 
            header: RequestServerVersion):
        Promise<GetClientAccessTokenResponseType> => {
        console.log('request = ', request)
        console.log('header = ', header)
        const response = await this.accountService.getClientAccessToken
            (request.TokenRequests.TokenRequest.Id)
        return{  ResponseCode: 'No Error', Token: {Id: response.id, 
            TokenType: request.TokenRequests.TokenRequest.TokenType,
            TTL: response.TTL,
            TokenValue: response.value}
        };
    }

    GetUserAvailability = async (request: GetUserAvailabilityRequestType, 
            cb: any, header: RequestServerVersion):
        Promise<GetUserAvailabilityResponseType> => {
        console.log('request = ', request)
        console.log('header = ', header)
        const response = await this.accountService.getUserAvailability(request.TimeZone)
        const freeBusyResponse: FreeBusyResponseType[] = [];
        
        for(const res of response){
            const calendarEvents: CalendarEvent[] = [];
            for(const calEvent of res.calEVents){
                calendarEvents.push({ StartTime: calEvent.start,
                                    EndTime: calEvent.end,
                                    BusyType: calEvent.busy,
                                    CalendarEventDetails:{
                                        IsException: calEvent.exp,
                                        IsMeeting: calEvent.meet,
                                        IsPrivate: calEvent.private,
                                        IsRecurring: calEvent.recur,
                                        IsReminderSet: calEvent.rem
                                    }})
            }
            freeBusyResponse.push({ResponseMessage: 
                {ResponseCode: res.responseCode},
                FreeBusyView:{
                    FreeBusyViewType: res.type,
                    MergedFreeBusy : res.busy,
                    CalendarEventArray : {CalendarEvent: calendarEvents}}})
        }
        return {FreeBusyResponseArray: {
            FreeBusyResponse:freeBusyResponse}};
    }

    GetUserOofSettings = async (request: GetUserOofSettingsRequest, cb: any, 
        header: RequestServerVersion):
        Promise<GetUserOofSettingsResponse> => {
        console.log('request = ', request, ' header = ', header)
        const response = await this.accountService.getUserOofSettings(request.Mailbox.Address)
        return {
            OofSettings: {
                OofState: response.offState,
                ExternalAudience: response.ext,
                Duration: {
                    StartTime: response.start,
                    EndTime: response.end
                }
            },
            ResponseMessage: {
                ResponseCode: response.code
            },
            AllowExternalOof: response.allow
        };
    }

    SetUserOofSettings = async (request: SetUserOofSettingsRequest, cb: any, 
        header: RequestServerVersion):
        Promise<SetUserOofSettingsResponse> => {
        console.log('request = ', request, ' header = ', header)
        const response = await this.accountService.setUserOofSettings({mailbox: request.Mailbox.Address})
        return {ResponseMessage: {
            ResponseCode: response
        }};
    }

    FindPeople = async (request: FindPeopleType, cb: any, header: RequestServerVersion):
        Promise<FindPeopleResponseMessageType> => {
        console.log('request = ', request, 'header = ', header )
        const folderId = request.ParentFolderId ? 
                request.ParentFolderId.DistinguishedFolderId.attributes.Id : '1'
        const response = await this.accountService.findPeople(folderId)
       
        return {
            People: {
                Persona:{
                    PersonaId: response.id,
                    CreationTime: response.time,
                    DisplayName: response.dname,
                    DisplayNameFirstLast: response.fname,
                    DisplayNameLastFirst: response.lname,
                    FileAs: response.fas,
                    GivenName: response.gname,
                    Surname: response.sname,
                    EmailAddress: {
                        Address: response.add,
                        Name: response.aname,
                        RoutingType: response.rid
                    },
                    RelevanceScore: response.rscore
                }
            }
        };
    }


    GetPersona = async (request: GetPersonaType, cb: any, header: RequestServerVersion):
        Promise<GetPersonaResponseMessageType> => {
        console.log('request = ', request, ' header = ', header)
        const id = request.PersonaId ? request.PersonaId.attributes.Id : '1';
        const response = await this.accountService.getPersona(id) 
        return { Persona: { PersonaId: response.id ,
            PersonaType: response.type,
            CreationTime: response.time,
            DisplayName: response.dname} };
    }

    GetInboxRules = async (request: GetInboxRulesRequestType, cb: any, header: RequestServerVersion):
        Promise<GetInboxRulesResponseType> => {
        console.log('request = ', request, ' header = ', header)
        const response = await this.accountService.getInboxRules(request.MailboxSmtpAddress) 
        return {
            OutlookRuleBlobExists: response.exist,
            InboxRules: {
                Rule : { 
                   RuleId : response.rid,
                   DisplayName: response.dname,
                   IsEnabled: response.enable,
                   Priority: response.pri,
                   Conditions: {
                     ContainsSubjectStrings: response.str
                   },
                   Actions: {
                    MoveToFolder:{
                        FolderId :{
                            Id: response.folderId
                        }
                    }
                   }
                }
            }
        };
    }

    UpdateInboxRules = async (request: UpdateInboxRulesRequestType, cb: any, 
        header: RequestServerVersion):
        Promise<UpdateInboxRulesResponseType> => {
        console.log('request = ', request, 'header = ', header)
        const response = await this.accountService.updateInboxRules({remove: 
            request.RemoveOutlookRuleBlob})
         return {ResponseCode: response};
    }

}