
import * as Types from "./types";

export interface ResponseMessageType {
    MessageText?: string;
    ResponseCode?: ResponseCodeType;
    DescriptiveLinkKey?: number;
    MessageXml?: MessageXml;  
}

export interface MessageXml {
    
}

export interface ArrayOfResponseMessagesType {
    
}

export interface BaseResponseMessageType {
    ResponseMessages: ArrayOfResponseMessagesType;

    
}

export interface BaseRequestType {
    
}

export interface UploadItemsResponseType {
    
}

export interface ExportItemsResponseType {
    
}

export interface FindFolderResponseType {
    
}

export interface DeleteFolderResponseType {
    
}

export interface EmptyFolderResponseType {
    
}

export interface MoveFolderType {
    
}

export interface CopyFolderType {
    
}

export interface CreateFolderResponseType {
    
}

export interface GetFolderResponseType {
    
}

export interface UpdateFolderResponseType {
    
}

export interface MoveFolderResponseType {
    
}

export interface CopyFolderResponseType {
    
}

export interface CreateFolderPathResponseType {
    
}

export interface MoveItemType {
    
}

export interface CopyItemType {
    
}

export interface SendItemResponseType {
    
}

export interface QueryStringType {
    
}

export interface ApplyConversationActionResponseType {
    
}

export interface ApplyConversationActionResponseMessageType {
    
}

export interface CreateAttachmentResponseType {
    
}

export interface DeleteAttachmentResponseType {
    
}

export interface GetAttachmentResponseType {
    
}

export interface CreateItemResponseType {
    
}

export interface UpdateItemResponseType {
    
}

export interface UpdateItemInRecoverableItemsResponseType {
    
}

export interface GetItemResponseType {
    
}

export interface MoveItemResponseType {
    
}

export interface CopyItemResponseType {
    
}

export interface DeleteItemResponseType {
    
}

export interface DeleteItemResponseMessageType {
    
}

export interface FindItemResponseType {
    
}

export interface ArchiveItemResponseType {
    
}

export interface GetClientAccessTokenResponseType {
    Token: Token;
    ResponseCode: string
}

export interface Token{
    Id: string
    TokenType: Types.TokenSourceType
    TokenValue: string
    TTL: number
}

export interface GetFocusedOtherOverridesRequestType {
    
}

export interface ResolveNamesResponseType {
    
}

export interface ArrayOfMailTipsResponseMessageType {
    MailTipsResponseMessageType: MailTipsResponseMessageType[];

    
}

export interface DisconnectPhoneCallResponseMessageType {
    
}

export interface ExpandDLResponseType {
    
}

export interface GetServerTimeZonesResponseType {
    
}

export interface CreateManagedFolderResponseType {
    
}

export interface SubscribeType {
    
}

export interface SubscribeResponseType {
    
}

export interface UnsubscribeResponseType {
    
}

export interface GetEventsResponseType {
    
}

export interface GetStreamingEventsResponseType {
    
}

export interface SendNotificationResponseType {
    
}

export interface SendNotificationResultType {
    SubscriptionStatus: Types.SubscriptionStatusType;

    
}

export interface SyncFolderHierarchyResponseType {
    
}

export interface SyncFolderItemsResponseType {
    
}

export interface FreeBusyResponseType {
    ResponseMessage?: ResponseMessageType;
    FreeBusyView?: Types.FreeBusyView;

    
}

export interface ArrayOfFreeBusyResponse {
    FreeBusyResponse?: FreeBusyResponseType[];

    
}

export interface SuggestionsResponseType {
    ResponseMessage?: ResponseMessageType;
    SuggestionDayResultArray?: Types.ArrayOfSuggestionDayResult;

    
}

export interface GetUserAvailabilityResponseType {
    FreeBusyResponseArray?: ArrayOfFreeBusyResponse;
    SuggestionsResponse?: SuggestionsResponseType;

    
}

export interface GetUserOofSettingsResponse {
    OofSettings: Types.UserOofSettings;
    ResponseMessage: ResponseMessageType;
    AllowExternalOof?: Types.ExternalAudience;    
}

export interface SetUserOofSettingsResponse {
    ResponseMessage?: ResponseMessageType;

    
}

export interface ConvertIdResponseType {
    
}

export interface ArrayOfDelegateUserResponseMessageType {
    DelegateUserResponseMessageType: DelegateUserResponseMessageType[];

    
}

export interface AddDelegateResponseMessageType {
    
}

export interface RemoveDelegateResponseMessageType {
    
}

export interface UpdateDelegateResponseMessageType {
    
}

export interface RefreshSharingFolderResponseMessageType {
    
}

export interface CreateUserConfigurationResponseType {
    
}

export interface DeleteUserConfigurationResponseType {
    
}

export interface GetUserConfigurationResponseType {
    
}

export interface GetSpecificUserConfigurationResponseType {
    
}

export interface UpdateUserConfigurationResponseType {
    
}

export interface SetTeamMailboxResponseMessageType {
    
}

export interface UnpinTeamMailboxResponseMessageType {
    
}

export interface GetRoomListsType {
    
}

export interface ArrayOfServiceConfigurationType {
    
}

export interface ArrayOfServiceConfigurationResponseMessageType {
    ServiceConfigurationResponseMessageType: ServiceConfigurationResponseMessageType[];

    
}

export interface FindMessageTrackingReportRequestType {
    
}

export interface GetMessageTrackingReportRequestType {
    
}

export interface FindMailboxStatisticsByKeywordsResponseType {
    
}

export interface SearchMailboxesResponseType {
    
}

export interface MarkAllItemsAsReadResponseType {
    
}

export interface GetConversationItemsResponseType {
    
}

export interface SetOMEConfigurationResponseType {
    
}

export interface GetAppManifestsResponseType {
    
}

export interface ArrayOfAppManifestsType {
    Manifest?: any;

    
}

export interface GetAppMarketplaceUrlType {
    
}

export interface MarkAsJunkResponseType {
    
}

export interface MarkAsPhishingResponseType {
    
}

export interface ReportMessageResponseType {
    
}

export interface ArrayOfUpdateExtensionUsageItemType {
    ExtensionId?: string;
    Scenarios?: ArrayOfExtensionUsageScenarioCounterType;

    
}

export interface ArrayOfExtensionUsageScenarioCounterType {
    ScenarioName?: string;
    Count?: number;

    
}

export interface UpdateExtensionUsageResponseType {
    
}

export interface UninstallAppResponseType {
    
}

export interface DisableAppResponseType {
    
}

export interface AddImContactToGroupResponseMessageType {
    
}

export interface RemoveImContactFromGroupResponseMessageType {
    
}

export interface RemoveContactFromImListResponseMessageType {
    
}

export interface RemoveDistributionGroupFromImListResponseMessageType {
    
}

export interface RemoveImGroupResponseMessageType {
    
}

export interface SetImGroupResponseMessageType {
    
}

export interface SetImListMigrationCompletedResponseMessageType {
    
}

export interface GetUserRetentionPolicyTagsType {
    
}

export interface GetUserPhotoResponseType {
    ResponseCode?: string
    HasChanged?: boolean
    PictureData?: string
    DescriptiveLinkKey?: string
    MessageText?: string
    MessageXml?: string
}

export interface DeleteMeetingSpaceResponseMessageType {
    
}

export interface DeleteMeetingInstanceResponseMessageType {
    
}

export interface SetUserPhotoResponseMessageType {
    
}

export interface RegisterConsentResponseMessageType {
    
}

export interface StartSearchSessionResponseMessage {
    
}

export interface EndSearchSessionResponseMessage {
    
}

export interface GetLastPrivateCatalogUpdateResponseType {
    
}

export interface ArrayOfPrivateCatalogAddInsType {
    AddIn?: PrivateCatalogAddInsType[];

    
}

export interface PrivateCatalogAddInsType {
    StoreInfo?: PrivateCatalogAddInStoreInfoType;

    
}

export interface PrivateCatalogAddInStoreInfoType {
    AssetId: string;
    ContentMarket: string;

    
}

export interface GetFolderType extends BaseRequestType {
    FolderShape: Types.FolderResponseShapeType;
    FolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface UploadItemsType extends BaseRequestType {
    Items: Types.NonEmptyArrayOfUploadItemsType;
}

export interface UploadItemsResponseMessageType extends ResponseMessageType {
    ItemId?: Types.ItemIdType;
}

export interface ExportItemsType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfItemIdsType;
}

export interface ExportItemsResponseMessageType extends ResponseMessageType {
    ItemId?: Types.ItemIdType;
    Data?: any;
}

export interface CreateFolderType extends BaseRequestType {
    ParentFolderId: Types.TargetFolderIdType;
    Folders: Types.NonEmptyArrayOfFoldersType;
}

export interface FindFolderType extends BaseRequestType {
    FolderShape: Types.FolderResponseShapeType;
    Restriction?: Types.RestrictionType;
    ParentFolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface FolderInfoResponseMessageType extends ResponseMessageType {
    Folders?: Types.ArrayOfFoldersType;
}

export interface FindFolderResponseMessageType extends ResponseMessageType {
    RootFolder?: Types.FindFolderParentType;
}

export interface DeleteFolderType extends BaseRequestType {
    FolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface EmptyFolderType extends BaseRequestType {
    FolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface BaseMoveCopyFolderType extends BaseRequestType {
    ToFolderId: Types.TargetFolderIdType;
    FolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface UpdateFolderType extends BaseRequestType {
    FolderChanges: Types.NonEmptyArrayOfFolderChangesType;
}

export interface CreateFolderPathType extends BaseRequestType {
    ParentFolderId: Types.TargetFolderIdType;
    RelativeFolderPath: Types.NonEmptyArrayOfFoldersType;
}

export interface GetItemType extends BaseRequestType {
    ItemShape: Types.ItemResponseShapeType;
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}

export interface CreateItemType extends BaseRequestType {
    SavedItemFolderId?: Types.TargetFolderIdType;
    Items: Types.NonEmptyArrayOfAllItemsType;
}

export interface UpdateItemType extends BaseRequestType {
    SavedItemFolderId?: Types.TargetFolderIdType;
    ItemChanges: Types.NonEmptyArrayOfItemChangesType;
}

export interface ItemInfoResponseMessageType extends ResponseMessageType {
    Items: Types.ArrayOfRealItemsType;
}

export interface UpdateItemResponseMessageType extends ItemInfoResponseMessageType {
    ConflictResults?: Types.ConflictResultsType;
}

export interface UpdateItemInRecoverableItemsType extends BaseRequestType {
    ItemId: Types.ItemIdType;
    Updates?: Types.NonEmptyArrayOfItemChangeDescriptionsType;
    Attachments?: Types.NonEmptyArrayOfAttachmentsType;
    MakeItemImmutable?: boolean;
}

export interface UpdateItemInRecoverableItemsResponseMessageType extends ItemInfoResponseMessageType {
    Attachments?: Types.ArrayOfAttachmentsType;
    ConflictResults?: Types.ConflictResultsType;
}

export interface DeleteItemType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}

export interface AttachmentInfoResponseMessageType extends ResponseMessageType {
    Attachments: Types.ArrayOfAttachmentsType;
}

export interface DeleteAttachmentResponseMessageType extends ResponseMessageType {
    RootItemId?: Types.RootItemIdType;
}

export interface BaseMoveCopyItemType extends BaseRequestType {
    ToFolderId: Types.TargetFolderIdType;
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
    ReturnNewItemIds?: boolean;
}

export interface ArchiveItemType extends BaseRequestType {
    ArchiveSourceFolderId: Types.TargetFolderIdType;
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}

export interface SendItemType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
    SavedItemFolderId?: Types.TargetFolderIdType;
}

export interface FindItemType extends BaseRequestType {
    ItemShape: Types.ItemResponseShapeType;
    Restriction?: Types.RestrictionType;
    SortOrder?: Types.NonEmptyArrayOfFieldOrdersType;
    ParentFolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
    QueryString?: QueryStringType;
}

export interface FindConversationType extends BaseRequestType {
    SortOrder?: Types.NonEmptyArrayOfFieldOrdersType;
    ParentFolderId: Types.TargetFolderIdType;
    MailboxScope?: any;
    QueryString?: QueryStringType;
    ConversationShape?: Types.ConversationResponseShapeType;
}

export interface FindConversationResponseMessageType extends ResponseMessageType {
    Conversations?: Types.ArrayOfConversationsType;
    HighlightTerms?: Types.ArrayOfHighlightTermsType;
    TotalConversationsInView?: number;
    IndexedOffset?: number;
}

export interface PerformInstantSearchRequest extends BaseRequestType {
    SearchSessionId: string;
    ItemType: any;
    QueryOptions: any;
    SearchRequestId: any;
    KqlQuery: string;
    FolderScope: Types.ArrayOfFolderIdType;
    DistinguishedFolderScope?: Types.ArrayOfDistinguishedFolderIdType;
    IsDeepTraversal?: boolean;
    WaitOnSearchResults?: boolean;
}

export interface PerformInstantSearchResponse extends ResponseMessageType {
    Payload?: Types.InstantSearchPayloadType;
}

export interface EndInstantSearchSessionRequest extends BaseRequestType {
    SessionId: string;
}

export interface ApplyConversationActionType extends BaseRequestType {
    ConversationActions: Types.NonEmptyArrayOfApplyConversationActionType;
}

export interface FindPeopleType extends BaseRequestType {
    PersonaShape?: Types.PersonaResponseShapeType;
    IndexedPageItemView: Types.IndexedPageViewType;
    Restriction?: Types.RestrictionType;
    AggregationRestriction?: Types.RestrictionType;
    SortOrder?: Types.NonEmptyArrayOfFieldOrdersType;
    ParentFolderId?: Types.TargetFolderIdType;
    QueryString?: string;
    SearchPeopleSuggestionIndex?: boolean;
    TopicQueryString?: string;
    Context?: Types.ArrayOfContextProperty;
    QuerySources?: Types.ArrayOfPeopleQuerySource;
    ReturnFlattenedResults?: boolean;
}

export interface FindPeopleResponseMessageType extends ResponseMessageType {
    People?: Types.ArrayOfPeopleType;
    TotalNumberOfPeopleInView?: number;
    FirstMatchingRowIndex?: number;
    FirstLoadedRowIndex?: number;
    TransactionId?: any;
}

export interface FindTagsType extends BaseRequestType {
    IndexedPageItemView: Types.IndexedPageViewType;
    SortOrder?: Types.NonEmptyArrayOfFieldOrdersType;
    QueryString?: string;
    Context?: Types.ArrayOfContextProperty;
}

export interface FindTagsResponseMessageType extends ResponseMessageType {
    Tags?: Types.ArrayOfStringsType;
}

export interface AddTagType extends BaseRequestType {
    Tag: string;
    AppName: string;
}

export interface AddTagResponseMessageType extends ResponseMessageType {
    WasSuccessful?: boolean;
}

export interface HideTagType extends BaseRequestType {
    Tag: string;
}

export interface HideTagResponseMessageType extends ResponseMessageType {
    WasSuccessful?: boolean;
}

export interface GetPersonaType extends BaseRequestType {
    PersonaId?: Types.ItemIdType;
    EmailAddress?: Types.EmailAddressType;
    ParentFolderId?: Types.TargetFolderIdType;
    ItemLinkId?: string;
    AdditionalProperties?: Types.NonEmptyArrayOfPathsToElementType;
}

export interface GetPersonaResponseMessageType extends ResponseMessageType {
    Persona: Types.PersonaType;
}

export interface CreateAttachmentType extends BaseRequestType {
    ParentItemId: Types.ItemIdType;
    Attachments: Types.NonEmptyArrayOfAttachmentsType;
}

export interface DeleteAttachmentType extends BaseRequestType {
    AttachmentIds: Types.NonEmptyArrayOfRequestAttachmentIdsType;
}

export interface GetAttachmentType extends BaseRequestType {
    AttachmentShape?: Types.AttachmentResponseShapeType;
    AttachmentIds: Types.NonEmptyArrayOfRequestAttachmentIdsType;
}

export interface FindItemResponseMessageType extends ResponseMessageType {
    RootFolder?: Types.FindItemParentType;
    HighlightTerms?: Types.ArrayOfHighlightTermsType;
}

export interface GetClientAccessTokenType extends BaseRequestType {
    TokenRequests: Types.NonEmptyArrayOfClientAccessTokenRequestsType;
}

export interface GetClientAccessTokenResponseMessageType extends ResponseMessageType {
    Token?: Types.ClientAccessTokenType;
}

export interface GetFocusedOtherOverridesResponseType extends BaseResponseMessageType {
    Overrides: Types.ArrayOfInferenceClassificationOverridesType;
}

export interface CreateOrUpdateFocusedOtherOverrideRequestType extends BaseRequestType {
    SenderSmtpAddress: string;
    SenderDisplayName?: string;
    AlwaysClassifyAs: Types.InferenceClassificationType;
}

export interface CreateOrUpdateFocusedOtherOverrideResponseType extends BaseResponseMessageType {
    Override: Types.InferenceClassificationOverrideType;
}

export interface DeleteFocusedOtherOverrideRequestType extends BaseRequestType {
    Id: any;
}

export interface DeleteFocusedOtherOverrideResponseType extends BaseResponseMessageType {
    Override: Types.InferenceClassificationOverrideType;
}

export interface ResolveNamesType extends BaseRequestType {
    ParentFolderIds?: Types.NonEmptyArrayOfBaseFolderIdsType;
    UnresolvedEntry: Types.NonEmptyStringType;
}

export interface ResolveNamesResponseMessageType extends ResponseMessageType {
    ResolutionSet?: Types.ArrayOfResolutionType;
}

export interface GetPasswordExpirationDateType extends BaseRequestType {
    MailboxSmtpAddress?: string;
}

export interface GetPasswordExpirationDateResponseMessageType extends ResponseMessageType {
    PasswordExpirationDate: Date;
}

export interface GetMailTipsType extends BaseRequestType {
    SendingAs: Types.EmailAddressType;
    Recipients: Types.ArrayOfRecipientsType;
}

export interface GetMailTipsResponseMessageType extends ResponseMessageType {
    ResponseMessages?: ArrayOfMailTipsResponseMessageType;
}

export interface MailTipsResponseMessageType extends ResponseMessageType {
    MailTips?: Types.MailTips;
}

export interface PlayOnPhoneType extends BaseRequestType {
    ItemId: Types.ItemIdType;
    DialString: string;
}

export interface PlayOnPhoneResponseMessageType extends ResponseMessageType {
    PhoneCallId?: Types.PhoneCallIdType;
}

export interface GetPhoneCallInformationType extends BaseRequestType {
    PhoneCallId: Types.PhoneCallIdType;
}

export interface GetPhoneCallInformationResponseMessageType extends ResponseMessageType {
    PhoneCallInformation?: Types.PhoneCallInformationType;
}

export interface DisconnectPhoneCallType extends BaseRequestType {
    PhoneCallId: Types.PhoneCallIdType;
}

export interface ExpandDLType extends BaseRequestType {
    Mailbox: Types.EmailAddressType;
}

export interface ExpandDLResponseMessageType extends ResponseMessageType {
    DLExpansion?: Types.ArrayOfDLExpansionType;
}

export interface GetServerTimeZonesType extends BaseRequestType {
    Ids?: Types.NonEmptyArrayOfTimeZoneIdType;
}

export interface GetServerTimeZonesResponseMessageType extends ResponseMessageType {
    TimeZoneDefinitions: Types.ArrayOfTimeZoneDefinitionType;
}

export interface CreateManagedFolderRequestType extends BaseRequestType {
    FolderNames: Types.NonEmptyArrayOfFolderNamesType;
    Mailbox?: Types.EmailAddressType;
}

export interface SubscribeResponseMessageType extends ResponseMessageType {
    SubscriptionId?: any;
    Watermark?: any;
}

export interface UnsubscribeType extends BaseRequestType {
    SubscriptionId: any;
}

export interface GetEventsType extends BaseRequestType {
    SubscriptionId: any;
    Watermark: any;
}

export interface GetEventsResponseMessageType extends ResponseMessageType {
    Notification?: Types.NotificationType;
}

export interface GetStreamingEventsType extends BaseRequestType {
    SubscriptionIds: Types.NonEmptyArrayOfSubscriptionIdsType;
    ConnectionTimeout: any;
}

export interface GetStreamingEventsResponseMessageType extends ResponseMessageType {
    Notifications?: Types.NonEmptyArrayOfNotificationsType;
    ErrorSubscriptionIds?: Types.NonEmptyArrayOfSubscriptionIdsType;
    ConnectionStatus?: Types.ConnectionStatusType;
}

export interface SendNotificationResponseMessageType extends ResponseMessageType {
    Notification: Types.NotificationType;
}

export interface SyncFolderHierarchyType extends BaseRequestType {
    FolderShape: Types.FolderResponseShapeType;
    SyncFolderId?: Types.TargetFolderIdType;
    SyncState?: string;
}

export interface SyncFolderHierarchyResponseMessageType extends ResponseMessageType {
    SyncState?: string;
    IncludesLastFolderInRange?: boolean;
    Changes?: Types.SyncFolderHierarchyChangesType;
}

export interface SyncFolderItemsType extends BaseRequestType {
    ItemShape: Types.ItemResponseShapeType;
    SyncFolderId: Types.TargetFolderIdType;
    SyncState?: string;
    Ignore?: Types.ArrayOfBaseItemIdsType;
    MaxChangesReturned: any;
    SyncScope?: Types.SyncFolderItemsScopeType;
}

export interface SyncFolderItemsResponseMessageType extends ResponseMessageType {
    SyncState?: string;
    IncludesLastItemInRange?: boolean;
    Changes?: Types.SyncFolderItemsChangesType;
}

export interface GetUserAvailabilityRequestType extends BaseRequestType {
    TimeZone: any;
    FreeBusyViewOptions: any;
    SuggestionsViewOptions: any;
    MailboxDataArray: Types.ArrayOfMailboxData;
}

export interface GetUserOofSettingsRequest extends BaseRequestType {
    Mailbox: Types.AddressEntityType;
}


export interface SetUserOofSettingsRequest extends BaseRequestType {
    Mailbox: Types.EmailAddress;
    UserOofSettings: Types.UserOofSettings;
}

export interface ConvertIdType extends BaseRequestType {
    SourceIds: Types.NonEmptyArrayOfAlternateIdsType;
}

export interface ConvertIdResponseMessageType extends ResponseMessageType {
    AlternateId?: Types.AlternateIdBaseType;
}

export interface GetDelegateType {
    UserIds?: Types.ArrayOfUserIdType;
}

export interface GetDelegateResponseMessageType {
    DeliverMeetingRequests?: Types.DeliverMeetingRequestsType;
}


export interface DelegateUserResponseMessageType extends ResponseMessageType {
    DelegateUser?: Types.DelegateUserType;
}

export interface AddDelegateType {
    DelegateUsers: Types.ArrayOfDelegateUserType;
    DeliverMeetingRequests?: Types.DeliverMeetingRequestsType;
}

export interface BaseDelegateResponseMessageType extends ResponseMessageType {
    ResponseMessages?: ArrayOfDelegateUserResponseMessageType;
}

export interface BaseDelegateType extends BaseRequestType {
    Mailbox: Types.EmailAddressType;
}

export interface RemoveDelegateType {
    UserIds: Types.ArrayOfUserIdType;
}

export interface UpdateDelegateType {
    DelegateUsers?: Types.ArrayOfDelegateUserType;
    DeliverMeetingRequests?: Types.DeliverMeetingRequestsType;
}

export interface GetSharingMetadataType extends BaseRequestType {
    IdOfFolderToShare: Types.FolderIdType;
    SenderSmtpAddress: Types.NonEmptyStringType;
    Recipients: Types.ArrayOfSmtpAddressType;
}

export interface GetSharingMetadataResponseMessageType extends ResponseMessageType {
    EncryptedSharedFolderDataCollection: Types.ArrayOfEncryptedSharedFolderDataType;
    InvalidRecipients: Types.ArrayOfInvalidRecipientsType;
}

export interface RefreshSharingFolderType extends BaseRequestType {
    SharingFolderId: Types.FolderIdType;
}

export interface GetSharingFolderType extends BaseRequestType {
    SmtpAddress: Types.NonEmptyStringType;
    DataType?: Types.SharingDataType;
    SharedFolderId?: Types.NonEmptyStringType;
}

export interface GetSharingFolderResponseMessageType extends ResponseMessageType {
    SharingFolderId: Types.FolderIdType;
}

export interface CreateUserConfigurationType extends BaseRequestType {
    UserConfiguration: Types.UserConfigurationType;
}

export interface DeleteUserConfigurationType extends BaseRequestType {
    UserConfigurationName: Types.UserConfigurationNameType;
}

export interface GetUserConfigurationType extends BaseRequestType {
    UserConfigurationName: Types.UserConfigurationNameType;
    UserConfigurationProperties: any;
}

export interface GetUserConfigurationResponseMessageType extends ResponseMessageType {
    UserConfiguration?: Types.UserConfigurationType;
}

export interface GetSpecificUserConfigurationType extends BaseRequestType {
    UserConfigurationName: Types.UserConfigurationNameType;
    UserConfigurationProperties: any;
}

export interface GetSpecificUserConfigurationResponseMessageType extends ResponseMessageType {
    UserConfiguration?: Types.UserConfigurationType;
}

export interface UpdateUserConfigurationType extends BaseRequestType {
    UserConfiguration: Types.UserConfigurationType;
}

export interface SetTeamMailboxRequestType extends BaseRequestType {
    EmailAddress: Types.EmailAddressType;
    SharePointSiteUrl: string;
    State: Types.TeamMailboxLifecycleStateType;
}

export interface UnpinTeamMailboxRequestType extends BaseRequestType {
    EmailAddress: Types.EmailAddressType;
}

export interface GetRoomListsResponseMessageType extends ResponseMessageType {
    RoomLists?: Types.ArrayOfEmailAddressesType;
}

export interface GetRoomsType extends BaseRequestType {
    RoomList: Types.EmailAddressType;
}

export interface GetRoomsResponseMessageType extends ResponseMessageType {
    Rooms?: Types.ArrayOfRoomsType;
}

export interface GetRemindersType extends BaseRequestType {
    BeginTime?: Date;
    EndTime?: Date;
}

export interface GetRemindersResponseMessageType extends ResponseMessageType {
    Reminders: Types.ArrayOfRemindersType;
}

export interface PerformReminderActionType extends BaseRequestType {
    ReminderItemActions: Types.NonEmptyArrayOfReminderItemActionType;
}

export interface PerformReminderActionResponseMessageType extends ResponseMessageType {
    UpdatedItemIds: Types.NonEmptyArrayOfItemIdsType;
}

export interface GetServiceConfigurationType extends BaseRequestType {
    ActingAs?: Types.EmailAddressType;
    RequestedConfiguration: ArrayOfServiceConfigurationType;
    ConfigurationRequestDetails?: Types.ConfigurationRequestDetailsType;
}

export interface GetServiceConfigurationResponseMessageType extends ResponseMessageType {
    ResponseMessages?: ArrayOfServiceConfigurationResponseMessageType;
}

export interface ServiceConfigurationResponseMessageType extends ResponseMessageType {
    MailTipsConfiguration?: Types.MailTipsServiceConfiguration;
    UnifiedMessagingConfiguration?: Types.UnifiedMessageServiceConfiguration;
    ProtectionRulesConfiguration?: Types.ProtectionRulesServiceConfiguration;
    PolicyNudgeRulesConfiguration?: Types.PolicyNudgeRulesServiceConfiguration;
    SharePointURLsConfiguration?: Types.SharePointURLsServiceConfiguration;
}

export interface FindMessageTrackingReportResponseMessageType extends ResponseMessageType {
    Diagnostics?: Types.ArrayOfStringsType;
    MessageTrackingSearchResults?: Types.ArrayOfFindMessageTrackingSearchResultType;
    ExecutedSearchScope?: string;
    Errors?: Types.ArrayOfArraysOfTrackingPropertiesType;
    Properties?: Types.ArrayOfTrackingPropertiesType;
}

export interface GetMessageTrackingReportResponseMessageType extends ResponseMessageType {
    MessageTrackingReport?: Types.MessageTrackingReportType;
    Diagnostics?: Types.ArrayOfStringsType;
    Errors?: Types.ArrayOfArraysOfTrackingPropertiesType;
    Properties?: Types.ArrayOfTrackingPropertiesType;
}

export interface GetInboxRulesRequestType extends BaseRequestType {
    MailboxSmtpAddress?: string;
}

export interface GetInboxRulesResponseType extends ResponseMessageType {
    OutlookRuleBlobExists?: boolean;
    InboxRules?: Types.ArrayOfRulesType;
}

export interface UpdateInboxRulesRequestType extends BaseRequestType {
    MailboxSmtpAddress?: string;
    RemoveOutlookRuleBlob?: boolean;
    Operations: Types.ArrayOfRuleOperationsType;
}

export interface UpdateInboxRulesResponseType extends ResponseMessageType {
    RuleOperationErrors?: Types.ArrayOfRuleOperationErrorsType;
}

export interface FindMailboxStatisticsByKeywordsType extends BaseRequestType {
    Mailboxes: Types.ArrayOfUserMailboxesType;
    Keywords: Types.ArrayOfStringsType;
    Language?: string;
    Senders?: Types.ArrayOfSmtpAddressType;
    Recipients?: Types.ArrayOfSmtpAddressType;
    FromDate?: Date;
    ToDate?: Date;
    MessageTypes?: Types.ArrayOfSearchItemKindsType;
    SearchDumpster?: boolean;
    IncludePersonalArchive?: boolean;
    IncludeUnsearchableItems?: boolean;
}

export interface FindMailboxStatisticsByKeywordsResponseMessageType extends ResponseMessageType {
    MailboxStatisticsSearchResult: any;
}

export interface GetSearchableMailboxesType extends BaseRequestType {
    SearchFilter?: string;
    ExpandGroupMembership?: boolean;
}

export interface GetSearchableMailboxesResponseMessageType extends ResponseMessageType {
    SearchableMailboxes: Types.ArrayOfSearchableMailboxesType;
    FailedMailboxes?: Types.ArrayOfFailedSearchMailboxesType;
}

export interface SearchMailboxesType extends BaseRequestType {
    SearchQueries: Types.NonEmptyArrayOfMailboxQueriesType;
    ResultType: Types.SearchResultType;
    PreviewItemResponseShape?: Types.PreviewItemResponseShapeType;
    SortBy?: Types.FieldOrderType;
    Language?: string;
    Deduplication?: boolean;
    PageSize?: number;
    PageItemReference?: string;
    PageDirection?: Types.SearchPageDirectionType;
}

export interface SearchMailboxesResponseMessageType extends ResponseMessageType {
    SearchMailboxesResult?: Types.SearchMailboxesResultType;
}

export interface GetDiscoverySearchConfigurationType extends BaseRequestType {
    SearchId?: string;
    ExpandGroupMembership?: boolean;
    InPlaceHoldConfigurationOnly?: boolean;
}

export interface GetDiscoverySearchConfigurationResponseMessageType extends ResponseMessageType {
    DiscoverySearchConfigurations: Types.ArrayOfDiscoverySearchConfigurationType;
}

export interface GetHoldOnMailboxesType extends BaseRequestType {
    HoldId: string;
}

export interface GetHoldOnMailboxesResponseMessageType extends ResponseMessageType {
    MailboxHoldResult?: any;
}

export interface SetHoldOnMailboxesType extends BaseRequestType {
    ActionType: Types.HoldActionType;
    HoldId: string;
    Query: string;
    Mailboxes?: Types.ArrayOfStringsType;
    Language?: string;
    IncludeNonIndexableItems?: boolean;
    Deduplication?: boolean;
    InPlaceHoldIdentity?: string;
    ItemHoldPeriod?: string;
}

export interface SetHoldOnMailboxesResponseMessageType extends ResponseMessageType {
    MailboxHoldResult?: any;
}

export interface GetNonIndexableItemStatisticsType extends BaseRequestType {
    Mailboxes: Types.NonEmptyArrayOfLegacyDNsType;
    SearchArchiveOnly?: boolean;
}

export interface GetNonIndexableItemStatisticsResponseMessageType extends ResponseMessageType {
    NonIndexableItemStatistics?: Types.ArrayOfNonIndexableItemStatisticsType;
}

export interface GetNonIndexableItemDetailsType extends BaseRequestType {
    Mailboxes: Types.NonEmptyArrayOfLegacyDNsType;
    PageSize?: number;
    PageItemReference?: string;
    PageDirection?: Types.SearchPageDirectionType;
    SearchArchiveOnly?: boolean;
}

export interface GetNonIndexableItemDetailsResponseMessageType extends ResponseMessageType {
    NonIndexableItemDetailsResult?: Types.NonIndexableItemDetailResultType;
}

export interface MarkAllItemsAsReadType extends BaseRequestType {
    ReadFlag: boolean;
    SuppressReadReceipts: boolean;
    FolderIds: Types.NonEmptyArrayOfBaseFolderIdsType;
}

export interface GetConversationItemsType extends BaseRequestType {
    ItemShape: Types.ItemResponseShapeType;
    FoldersToIgnore?: Types.NonEmptyArrayOfBaseFolderIdsType;
    MaxItemsToReturn?: number;
    SortOrder?: Types.ConversationNodeSortOrder;
    MailboxScope?: any;
    Conversations: Types.ArrayOfConversationRequestsType;
}

export interface GetConversationItemsResponseMessageType extends ResponseMessageType {
    Conversation?: Types.ConversationResponseType;
}

export interface GetOMEConfigurationType extends BaseRequestType {
    TemplateName?: string;
}

export interface OMEConfigurationResponseType extends ResponseMessageType {
    Xml?: string;
    ConfigList?: Types.ArrayOfStringsType;
}

export interface SetOMEConfigurationType extends BaseRequestType {
    Xml?: string;
    TemplateName?: string;
}

export interface GetOMEMessageStatusType extends BaseRequestType {
    MessageId?: string;
}

export interface GetOMEMessageStatusResponseType extends ResponseMessageType {
    IsRevoked?: boolean;
    ReceivedTime?: Date;
    Subject?: string;
    Container?: string;
    IsRevocable?: boolean;
}

export interface SetOMEMessageStatusType extends BaseRequestType {
    MessageId?: string;
    IsRevoked?: boolean;
}

export interface SetOMEMessageStatusResponseType extends ResponseMessageType {
    Subject?: string;
    MessageId?: string;
    CorrelationId?: string;
    RevokeStatus: Types.OMEMessageRevocationStatus;
    IsRevoked?: boolean;
}

export interface GetAppManifestsType extends BaseRequestType {
    ApiVersionSupported?: string;
    SchemaVersionSupported?: string;
    IncludeAllInstalledAddIns?: boolean;
    IncludeEntitlementData?: boolean;
    IncludeManifestData?: boolean;
    IncludeCustomAppsData?: boolean;
    ExtensionIds?: any;
    AddIns?: ArrayOfPrivateCatalogAddInsType;
    IncludeExtensionMetaData?: boolean;
}

export interface GetAppMarketplaceUrlResponseMessageType extends ResponseMessageType {
    AppMarketplaceUrl?: string;
    ConnectorsManagementUrl?: string;
}

export interface MarkAsJunkType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}

export interface MarkAsPhishingType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}

export interface ReportMessageType extends BaseRequestType {
    ItemIds: Types.NonEmptyArrayOfBaseItemIdsType;
}   

export interface InstallAppType extends BaseRequestType {
    Manifest: any;
    MarketplaceAssetId?: string;
    MarketplaceContentMarket?: string;
    SendWelcomeEmail?: boolean;
    ManifestUrl?: string;
    MarketplaceCorrelationId?: string;
    CampaignId?: string;
    Id?: string;
}

export interface InstallAppResponseType extends ResponseMessageType {
    WasFirstInstall?: boolean;
    Extension?: Types.InstalledAppType;
}

export interface UpdateExtensionUsageType extends BaseRequestType {
    Client?: string;
    Extensions?: ArrayOfUpdateExtensionUsageItemType;
}

export interface UninstallAppType extends BaseRequestType {
    ID: string;
}

export interface DisableAppType extends BaseRequestType {
    ID: string;
    DisableReason: Types.DisableReasonType;
}

export interface AddNewImContactToGroupType extends BaseRequestType {
    ImAddress: Types.NonEmptyStringType;
    DisplayName?: Types.NonEmptyStringType;
    GroupId?: Types.ItemIdType;
}

export interface AddNewImContactToGroupResponseMessageType extends ResponseMessageType {
    Persona?: Types.PersonaType;
}

export interface AddNewTelUriContactToGroupType extends BaseRequestType {
    TelUriAddress: Types.NonEmptyStringType;
    ImContactSipUriAddress: Types.NonEmptyStringType;
    ImTelephoneNumber: Types.NonEmptyStringType;
    GroupId?: Types.ItemIdType;
}

export interface AddNewTelUriContactToGroupResponseMessageType extends ResponseMessageType {
    Persona?: Types.PersonaType;
}

export interface AddImContactToGroupType extends BaseRequestType {
    ContactId: Types.ItemIdType;
    GroupId?: Types.ItemIdType;
}

export interface RemoveImContactFromGroupType extends BaseRequestType {
    ContactId: Types.ItemIdType;
    GroupId: Types.ItemIdType;
}

export interface AddImGroupType extends BaseRequestType {
    DisplayName: Types.NonEmptyStringType;
}

export interface AddImGroupResponseMessageType extends ResponseMessageType {
    ImGroup?: Types.ImGroupType;
}

export interface AddDistributionGroupToImListType extends BaseRequestType {
    SmtpAddress: Types.NonEmptyStringType;
    DisplayName: Types.NonEmptyStringType;
}

export interface AddDistributionGroupToImListResponseMessageType extends ResponseMessageType {
    ImGroup?: Types.ImGroupType;
}

export interface GetImItemListType extends BaseRequestType {
    ExtendedProperties?: Types.NonEmptyArrayOfExtendedFieldURIs;
}

export interface GetImItemListResponseMessageType extends ResponseMessageType {
    ImItemList?: Types.ImItemListType;
}

export interface GetImItemsType extends BaseRequestType {
    ContactIds?: Types.NonEmptyArrayOfBaseItemIdsType;
    GroupIds?: Types.NonEmptyArrayOfBaseItemIdsType;
    ExtendedProperties?: Types.NonEmptyArrayOfExtendedFieldURIs;
}

export interface GetImItemsResponseMessageType extends ResponseMessageType {
    ImItemList?: Types.ImItemListType;
}

export interface RemoveContactFromImListType extends BaseRequestType {
    ContactId: Types.ItemIdType;
}

export interface RemoveDistributionGroupFromImListType extends BaseRequestType {
    GroupId: Types.ItemIdType;
}

export interface RemoveImGroupType extends BaseRequestType {
    GroupId: Types.ItemIdType;
}

export interface SetImGroupType extends BaseRequestType {
    GroupId: Types.ItemIdType;
    NewDisplayName: Types.NonEmptyStringType;
}

export interface SetImListMigrationCompletedType extends BaseRequestType {
    ImListMigrationCompleted: boolean;
}

export interface GetUserRetentionPolicyTagsResponseMessageType extends ResponseMessageType {
    RetentionPolicyTags: Types.ArrayOfRetentionPolicyTagsType;
}

export interface GetUserPhotoType extends BaseRequestType {
    Email: string;
    SizeRequested: Types.UserPhotoSizeType;
    TypeRequested?: Types.UserPhotoTypeType;
}

export interface GetUserPhotoResponseMessageType extends ResponseMessageType {
    HasChanged: boolean;
    PictureData?: any;
}

export interface GetMeetingSpaceType extends BaseRequestType {
    ItemId: Types.ItemIdType;
}

export interface GetMeetingSpaceResponseMessageType extends ResponseMessageType {
    MeetingSpace: Types.MeetingSpaceType;
}

export interface CreateMeetingSpaceType extends BaseRequestType {
    MeetingSpace: Types.MeetingSpaceType;
}

export interface CreateMeetingSpaceResponseMessageType extends ResponseMessageType {
    MeetingSpace: Types.MeetingSpaceType;
}

export interface UpdateMeetingSpaceType extends BaseRequestType {
    ItemId: Types.ItemIdType;
    MeetingSpace: Types.MeetingSpaceType;
}

export interface UpdateMeetingSpaceResponseMessageType extends ResponseMessageType {
    MeetingSpace: Types.MeetingSpaceType;
}

export interface FindMeetingSpaceByJoinUrlType extends BaseRequestType {
    JoinUrl: string;
}

export interface FindMeetingSpaceByJoinUrlResponseMessageType extends ResponseMessageType {
    MeetingSpace?: Types.MeetingSpaceType;
}

export interface DeleteMeetingSpaceType extends BaseRequestType {
    ItemId: Types.ItemIdType;
}

export interface GetMeetingInstanceRequestType extends BaseRequestType {
    ItemId: Types.ItemIdType;
}

export interface GetMeetingInstanceResponseMessageType extends ResponseMessageType {
    MeetingInstance: Types.MeetingInstanceType;
}

export interface CreateMeetingInstanceRequestType extends BaseRequestType {
    MeetingInstance: Types.MeetingInstanceType;
}

export interface CreateMeetingInstanceResponseMessageType extends ResponseMessageType {
    MeetingInstance: Types.MeetingInstanceType;
}

export interface UpdateMeetingInstanceRequestType extends BaseRequestType {
    ItemId: Types.ItemIdType;
    MeetingInstance?: Types.MeetingInstanceType;
    ContentActivitiesToAdd?: Types.NonEmptyArrayOfContentActivities;
    ParticipantActivitiesToAdd?: Types.NonEmptyArrayOfParticipantActivities;
}

export interface UpdateMeetingInstanceResponseMessageType extends ResponseMessageType {
    MeetingInstance: Types.MeetingInstanceType;
}

export interface DeleteMeetingInstanceRequestType extends BaseRequestType {
    ItemId: Types.ItemIdType;
}

export interface SetUserPhotoType extends BaseRequestType {
    Email: Types.NonEmptyStringType;
    Content: string;
    TypeRequested?: Types.UserPhotoTypeType;
}

export interface RegisterConsentType extends BaseRequestType {
    Id: string;
    ConsentState: Types.ConsentStateType;
}

export interface FindAvailableMeetingTimesType extends BaseRequestType {
    Attendees?: Types.ArrayOfSmtpAddressType;
    SearchWindowStart: Date;
    SearchWindowDuration: any;
    MeetingDurationInMinutes?: number;
    Location?: string;
    MaxCandidates?: number;
    ActivityDomain?: Types.ActivityDomainType;
}

export interface FindAvailableMeetingTimesResponseMessageType extends ResponseMessageType {
    MeetingTimeCandidates: Types.ArrayOfMeetingTimeCandidate;
    EmptySuggestionsHint?: Types.EmptySuggestionReason;
}

export interface FindMeetingTimeCandidatesType extends BaseRequestType {
    AttendeeConstraints?: Types.FindMeetingTimesAttendeeConstraints;
    LocationConstraints?: Types.FindMeetingTimesLocationConstraints;
    SearchConstraints?: Types.FindMeetingTimesSearchConstraints;
    Constraints?: Types.FindMeetingTimesConstraints;
}

export interface FindMeetingTimeCandidatesResponseMessageType extends ResponseMessageType {
    MeetingTimeCandidates: Types.ArrayOfMeetingTimeCandidate;
}

export interface StartSearchSession extends BaseRequestType {
    SearchSessionId: any;
    WarmupOptions: any;
    SuggestionTypes: any;
    SearchScope: Types.ArrayOfSearchScopeType;
    IdFormat?: Types.IdFormatType;
    ApplicationId?: string;
    Scenario?: string;
}

export interface GetSearchSuggestions extends BaseRequestType {
    SearchSessionId: any;
    Query?: string;
    SuggestionTypes?: any;
    SuggestionsPrimer?: boolean;
    MaxSuggestionsCountPerSuggestionType?: any;
    SearchScope?: Types.ArrayOfSearchScopeType;
    Scenario?: string;
}

export interface GetSearchSuggestionsResponseMessage extends ResponseMessageType {
    SearchSuggestions: Types.SearchSuggestionsType;
}

export interface DeleteSearchSuggestion extends BaseRequestType {
    SearchSessionId: any;
    Query: string;
    SuggestionTypes: any;
    SearchScope?: Types.ArrayOfSearchScopeType;
    Scenario?: string;
}

export interface DeleteSearchSuggestionResponseMessageType extends ResponseMessageType {
    Response: Types.DeleteSearchSuggestionResponseType;
}

export interface ExecuteSearch extends BaseRequestType {
    ApplicationId: Types.SearchApplicationIdType;
    Scenario: string;
    SearchSessionId: any;
    SearchScope: Types.ArrayOfSearchScopeType;
    Query: string;
    AnalyzedQuery?: Types.AnalyzedQuery;
    ResultRowCount?: any;
    ResultRowOffset?: any;
    MaxResultsCountHint?: any;
    MaxPreviewLength?: any;
    SearchRefiners?: Types.DynamicRefinerQueryType[];
    ExtendedKeywords?: Types.ExtendedKeywordDefinitionType[];
    RetrieveRefiners?: boolean;
    MaxRefinersCountPerRefinerType?: any;
    IdFormat?: Types.IdFormatType;
    ItemTypes: any;
    PropertySetName?: Types.SearchResultsPropertySetNameType;
    SearchRestrictions?: Types.RestrictionType;
    IncludeDeleted?: boolean;
    SortOrder?: Types.ExecuteSearchSortOrderType;
    KeywordMatchOption?: Types.MatchOptionsType;
    ReturnAdditionalIds?: boolean;
    RequestedProperties?: Types.ArrayOfStringsType;
}

export interface ExecuteSearchResponseMessage extends ResponseMessageType {
    SearchResults: Types.SearchResultsType;
}

export interface EndSearchSession extends BaseRequestType {
    SearchSessionId: any;
}

export interface GetLastPrivateCatalogUpdateType extends BaseRequestType {
    Client?: Types.OfficeClientType;
}

export interface GetPrivateCatalogAddInsType extends BaseRequestType {
    Client?: Types.OfficeClientType;
}

export interface GetPrivateCatalogAddInsResponseType extends ResponseMessageType {
    AddIns?: ArrayOfPrivateCatalogAddInsType;
}

enum ResponseCodeType {
    NoError = "NoError",
    ErrorAccessDenied = "ErrorAccessDenied",
    ErrorAccessModeSpecified = "ErrorAccessModeSpecified",
    ErrorAccountDisabled = "ErrorAccountDisabled",
    ErrorAddDelegatesFailed = "ErrorAddDelegatesFailed",
    ErrorAddressSpaceNotFound = "ErrorAddressSpaceNotFound",
    ErrorADOperation = "ErrorADOperation",
    ErrorADSessionFilter = "ErrorADSessionFilter",
    ErrorADUnavailable = "ErrorADUnavailable",
    ErrorServiceUnavailable = "ErrorServiceUnavailable",
    ErrorAutoDiscoverFailed = "ErrorAutoDiscoverFailed",
    ErrorAffectedTaskOccurrencesRequired = "ErrorAffectedTaskOccurrencesRequired",
    ErrorAttachmentNestLevelLimitExceeded = "ErrorAttachmentNestLevelLimitExceeded",
    ErrorAttachmentSizeLimitExceeded = "ErrorAttachmentSizeLimitExceeded",
    ErrorArchiveFolderPathCreation = "ErrorArchiveFolderPathCreation",
    ErrorArchiveMailboxNotEnabled = "ErrorArchiveMailboxNotEnabled",
    ErrorArchiveMailboxServiceDiscoveryFailed = "ErrorArchiveMailboxServiceDiscoveryFailed",
    ErrorAvailabilityConfigNotFound = "ErrorAvailabilityConfigNotFound",
    ErrorBatchProcessingStopped = "ErrorBatchProcessingStopped",
    ErrorCalendarCannotMoveOrCopyOccurrence = "ErrorCalendarCannotMoveOrCopyOccurrence",
    ErrorCalendarCannotUpdateDeletedItem = "ErrorCalendarCannotUpdateDeletedItem",
    ErrorCalendarCannotUseIdForOccurrenceId = "ErrorCalendarCannotUseIdForOccurrenceId",
    ErrorCalendarCannotUseIdForRecurringMasterId = "ErrorCalendarCannotUseIdForRecurringMasterId",
    ErrorCalendarDurationIsTooLong = "ErrorCalendarDurationIsTooLong",
    ErrorCalendarEndDateIsEarlierThanStartDate = "ErrorCalendarEndDateIsEarlierThanStartDate",
    ErrorCalendarFolderIsInvalidForCalendarView = "ErrorCalendarFolderIsInvalidForCalendarView",
    ErrorCalendarInvalidAttributeValue = "ErrorCalendarInvalidAttributeValue",
    ErrorCalendarInvalidDayForTimeChangePattern = "ErrorCalendarInvalidDayForTimeChangePattern",
    ErrorCalendarInvalidDayForWeeklyRecurrence = "ErrorCalendarInvalidDayForWeeklyRecurrence",
    ErrorCalendarInvalidPropertyState = "ErrorCalendarInvalidPropertyState",
    ErrorCalendarInvalidPropertyValue = "ErrorCalendarInvalidPropertyValue",
    ErrorCalendarInvalidRecurrence = "ErrorCalendarInvalidRecurrence",
    ErrorCalendarInvalidTimeZone = "ErrorCalendarInvalidTimeZone",
    ErrorCalendarIsCancelledForAccept = "ErrorCalendarIsCancelledForAccept",
    ErrorCalendarIsCancelledForDecline = "ErrorCalendarIsCancelledForDecline",
    ErrorCalendarIsCancelledForRemove = "ErrorCalendarIsCancelledForRemove",
    ErrorCalendarIsCancelledForTentative = "ErrorCalendarIsCancelledForTentative",
    ErrorCalendarIsDelegatedForAccept = "ErrorCalendarIsDelegatedForAccept",
    ErrorCalendarIsDelegatedForDecline = "ErrorCalendarIsDelegatedForDecline",
    ErrorCalendarIsDelegatedForRemove = "ErrorCalendarIsDelegatedForRemove",
    ErrorCalendarIsDelegatedForTentative = "ErrorCalendarIsDelegatedForTentative",
    ErrorCalendarIsNotOrganizer = "ErrorCalendarIsNotOrganizer",
    ErrorCalendarIsOrganizerForAccept = "ErrorCalendarIsOrganizerForAccept",
    ErrorCalendarIsOrganizerForDecline = "ErrorCalendarIsOrganizerForDecline",
    ErrorCalendarIsOrganizerForRemove = "ErrorCalendarIsOrganizerForRemove",
    ErrorCalendarIsOrganizerForTentative = "ErrorCalendarIsOrganizerForTentative",
    ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange = "ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange",
    ErrorCalendarOccurrenceIsDeletedFromRecurrence = "ErrorCalendarOccurrenceIsDeletedFromRecurrence",
    ErrorCalendarOutOfRange = "ErrorCalendarOutOfRange",
    ErrorCalendarMeetingRequestIsOutOfDate = "ErrorCalendarMeetingRequestIsOutOfDate",
    ErrorCalendarViewRangeTooBig = "ErrorCalendarViewRangeTooBig",
    ErrorCallerIsInvalidADAccount = "ErrorCallerIsInvalidADAccount",
    ErrorCannotAccessDeletedolder = "ErrorCannotAccessDeletedolder",
    ErrorCannotArchiveCalendarContactTaskFolderException = "ErrorCannotArchiveCalendarContactTaskFolderException",
    ErrorCannotArchiveItemsInolders = "ErrorCannotArchiveItemsInolders",
    ErrorCannotArchiveItemsInArchiveMailbox = "ErrorCannotArchiveItemsInArchiveMailbox",
    ErrorCannotCreateCalendarItemInNonCalendarFolder = "ErrorCannotCreateCalendarItemInNonCalendarFolder",
    ErrorCannotCreateContactInNonContactFolder = "ErrorCannotCreateContactInNonContactFolder",
    ErrorCannotCreatePostItemInNonMailFolder = "ErrorCannotCreatePostItemInNonMailFolder",
    ErrorCannotCreateTaskInNonTaskFolder = "ErrorCannotCreateTaskInNonTaskFolder",
    ErrorCannotDeleteObject = "ErrorCannotDeleteObject",
    ErrorCannotDisableMandatoryExtension = "ErrorCannotDisableMandatoryExtension",
    ErrorCannotFindUser = "ErrorCannotFindUser",
    ErrorCannotGetSourceFolderPath = "ErrorCannotGetSourceFolderPath",
    ErrorCannotGetExternalEcpUrl = "ErrorCannotGetExternalEcpUrl",
    ErrorCannotOpenFileAttachment = "ErrorCannotOpenFileAttachment",
    ErrorCannotDeleteTaskOccurrence = "ErrorCannotDeleteTaskOccurrence",
    ErrorCannotEmptyFolder = "ErrorCannotEmptyFolder",
    ErrorCannotSetCalendarPermissionOnNonCalendarFolder = "ErrorCannotSetCalendarPermissionOnNonCalendarFolder",
    ErrorCannotSetNonCalendarPermissionOnCalendarFolder = "ErrorCannotSetNonCalendarPermissionOnCalendarFolder",
    ErrorCannotSetPermissionUnknownEntries = "ErrorCannotSetPermissionUnknownEntries",
    ErrorCannotSpecifySearchFolderAsSourceFolder = "ErrorCannotSpecifySearchFolderAsSourceFolder",
    ErrorCannotUseFolderIdForItemId = "ErrorCannotUseFolderIdForItemId",
    ErrorCannotUseItemIdForFolderId = "ErrorCannotUseItemIdForFolderId",
    ErrorChangeKeyRequired = "ErrorChangeKeyRequired",
    ErrorChangeKeyRequiredForWriteOperations = "ErrorChangeKeyRequiredForWriteOperations",
    ErrorClientDisconnected = "ErrorClientDisconnected",
    ErrorClientIntentInvalidStateDefinition = "ErrorClientIntentInvalidStateDefinition",
    ErrorClientIntentNotFound = "ErrorClientIntentNotFound",
    ErrorConnectionFailed = "ErrorConnectionFailed",
    ErrorContainsFilterWrongType = "ErrorContainsFilterWrongType",
    ErrorContentConversionFailed = "ErrorContentConversionFailed",
    ErrorContentIndexingNotEnabled = "ErrorContentIndexingNotEnabled",
    ErrorCorruptData = "ErrorCorruptData",
    ErrorCreateItemAccessDenied = "ErrorCreateItemAccessDenied",
    ErrorCreateManagedFolderPartialCompletion = "ErrorCreateManagedFolderPartialCompletion",
    ErrorCreateSubfolderAccessDenied = "ErrorCreateSubfolderAccessDenied",
    ErrorCrossMailboxMoveCopy = "ErrorCrossMailboxMoveCopy",
    ErrorCrossSiteRequest = "ErrorCrossSiteRequest",
    ErrorDataSizeLimitExceeded = "ErrorDataSizeLimitExceeded",
    ErrorDataSourceOperation = "ErrorDataSourceOperation",
    ErrorDelegateAlreadyExists = "ErrorDelegateAlreadyExists",
    ErrorDelegateCannotAddOwner = "ErrorDelegateCannotAddOwner",
    ErrorDelegateMissingConfiguration = "ErrorDelegateMissingConfiguration",
    ErrorDelegateNoUser = "ErrorDelegateNoUser",
    ErrorDelegateValidationFailed = "ErrorDelegateValidationFailed",
    ErrorDeleteDistinguishedFolder = "ErrorDeleteDistinguishedFolder",
    ErrorDeleteItemsFailed = "ErrorDeleteItemsFailed",
    ErrorDeleteUnifiedMessagingPromptFailed = "ErrorDeleteUnifiedMessagingPromptFailed",
    ErrorDistinguishedUserNotSupported = "ErrorDistinguishedUserNotSupported",
    ErrorDistributionListMemberNotExist = "ErrorDistributionListMemberNotExist",
    ErrorDuplicateInputFolderNames = "ErrorDuplicateInputFolderNames",
    ErrorDuplicateUserIdsSpecified = "ErrorDuplicateUserIdsSpecified",
    ErrorEmailAddressMismatch = "ErrorEmailAddressMismatch",
    ErrorEventNotFound = "ErrorEventNotFound",
    ErrorExceededConnectionCount = "ErrorExceededConnectionCount",
    ErrorExceededSubscriptionCount = "ErrorExceededSubscriptionCount",
    ErrorExceededFindCountLimit = "ErrorExceededFindCountLimit",
    ErrorExpiredSubscription = "ErrorExpiredSubscription",
    ErrorExtensionNotFound = "ErrorExtensionNotFound",
    ErrorExtensionsNotAuthorized = "ErrorExtensionsNotAuthorized",
    ErrorFolderCorrupt = "ErrorFolderCorrupt",
    ErrorFolderNotFound = "ErrorFolderNotFound",
    ErrorFolderPropertRequestFailed = "ErrorFolderPropertRequestFailed",
    ErrorFolderSave = "ErrorFolderSave",
    ErrorFolderSaveFailed = "ErrorFolderSaveFailed",
    ErrorFolderSavePropertyError = "ErrorFolderSavePropertyError",
    ErrorFolderExists = "ErrorFolderExists",
    ErrorFreeBusyGenerationFailed = "ErrorFreeBusyGenerationFailed",
    ErrorGetServerSecurityDescriptorFailed = "ErrorGetServerSecurityDescriptorFailed",
    ErrorImContactLimitReached = "ErrorImContactLimitReached",
    ErrorImGroupDisplayNameAlreadyExists = "ErrorImGroupDisplayNameAlreadyExists",
    ErrorImGroupLimitReached = "ErrorImGroupLimitReached",
    ErrorImpersonateUserDenied = "ErrorImpersonateUserDenied",
    ErrorImpersonationDenied = "ErrorImpersonationDenied",
    ErrorImpersonationFailed = "ErrorImpersonationFailed",
    ErrorIncorrectSchemaVersion = "ErrorIncorrectSchemaVersion",
    ErrorIncorrectUpdatePropertyCount = "ErrorIncorrectUpdatePropertyCount",
    ErrorIndividualMailboxLimitReached = "ErrorIndividualMailboxLimitReached",
    ErrorInsufficientResources = "ErrorInsufficientResources",
    ErrorInternalServerError = "ErrorInternalServerError",
    ErrorInternalServerTransientError = "ErrorInternalServerTransientError",
    ErrorInvalidAccessLevel = "ErrorInvalidAccessLevel",
    ErrorInvalidArgument = "ErrorInvalidArgument",
    ErrorInvalidAttachmentId = "ErrorInvalidAttachmentId",
    ErrorInvalidAttachmentSubfilter = "ErrorInvalidAttachmentSubfilter",
    ErrorInvalidAttachmentSubfilterTextFilter = "ErrorInvalidAttachmentSubfilterTextFilter",
    ErrorInvalidAuthorizationContext = "ErrorInvalidAuthorizationContext",
    ErrorInvalidChangeKey = "ErrorInvalidChangeKey",
    ErrorInvalidClientSecurityContext = "ErrorInvalidClientSecurityContext",
    ErrorInvalidCompleteDate = "ErrorInvalidCompleteDate",
    ErrorInvalidContactEmailAddress = "ErrorInvalidContactEmailAddress",
    ErrorInvalidContactEmailIndex = "ErrorInvalidContactEmailIndex",
    ErrorInvalidCrossForestCredentials = "ErrorInvalidCrossForestCredentials",
    ErrorInvalidDelegatePermission = "ErrorInvalidDelegatePermission",
    ErrorInvalidDelegateUserId = "ErrorInvalidDelegateUserId",
    ErrorInvalidExcludesRestriction = "ErrorInvalidExcludesRestriction",
    ErrorInvalidExpressionTypeForSubFilter = "ErrorInvalidExpressionTypeForSubFilter",
    ErrorInvalidExtendedProperty = "ErrorInvalidExtendedProperty",
    ErrorInvalidExtendedPropertyValue = "ErrorInvalidExtendedPropertyValue",
    ErrorInvalidFolderId = "ErrorInvalidFolderId",
    ErrorInvalidFolderTypeForOperation = "ErrorInvalidFolderTypeForOperation",
    ErrorInvalidFractionalPagingParameters = "ErrorInvalidFractionalPagingParameters",
    ErrorInvalidFreeBusyViewType = "ErrorInvalidFreeBusyViewType",
    ErrorInvalidId = "ErrorInvalidId",
    ErrorInvalidIdEmpty = "ErrorInvalidIdEmpty",
    ErrorInvalidIdMalformed = "ErrorInvalidIdMalformed",
    ErrorInvalidIdMalformedEwsLegacyIdFormat = "ErrorInvalidIdMalformedEwsLegacyIdFormat",
    ErrorInvalidIdMonikerTooLong = "ErrorInvalidIdMonikerTooLong",
    ErrorInvalidIdNotAnItemAttachmentId = "ErrorInvalidIdNotAnItemAttachmentId",
    ErrorInvalidIdReturnedByResolveNames = "ErrorInvalidIdReturnedByResolveNames",
    ErrorInvalidIdStoreObjectIdTooLong = "ErrorInvalidIdStoreObjectIdTooLong",
    ErrorInvalidIdTooManyAttachmentLevels = "ErrorInvalidIdTooManyAttachmentLevels",
    ErrorInvalidIdXml = "ErrorInvalidIdXml",
    ErrorInvalidImContactId = "ErrorInvalidImContactId",
    ErrorInvalidImDistributionGroupSmtpAddress = "ErrorInvalidImDistributionGroupSmtpAddress",
    ErrorInvalidImGroupId = "ErrorInvalidImGroupId",
    ErrorInvalidIndexedPagingParameters = "ErrorInvalidIndexedPagingParameters",
    ErrorInvalidInternetHeaderChildNodes = "ErrorInvalidInternetHeaderChildNodes",
    ErrorInvalidItemForOperationArchiveItem = "ErrorInvalidItemForOperationArchiveItem",
    ErrorInvalidItemForOperationCreateItemAttachment = "ErrorInvalidItemForOperationCreateItemAttachment",
    ErrorInvalidItemForOperationCreateItem = "ErrorInvalidItemForOperationCreateItem",
    ErrorInvalidItemForOperationAcceptItem = "ErrorInvalidItemForOperationAcceptItem",
    ErrorInvalidItemForOperationDeclineItem = "ErrorInvalidItemForOperationDeclineItem",
    ErrorInvalidItemForOperationCancelItem = "ErrorInvalidItemForOperationCancelItem",
    ErrorInvalidItemForOperationExpandDL = "ErrorInvalidItemForOperationExpandDL",
    ErrorInvalidItemForOperationRemoveItem = "ErrorInvalidItemForOperationRemoveItem",
    ErrorInvalidItemForOperationSendItem = "ErrorInvalidItemForOperationSendItem",
    ErrorInvalidItemForOperationTentative = "ErrorInvalidItemForOperationTentative",
    ErrorInvalidLogonType = "ErrorInvalidLogonType",
    ErrorInvalidLikeRequest = "ErrorInvalidLikeRequest",
    ErrorInvalidMailbox = "ErrorInvalidMailbox",
    ErrorInvalidManagedFolderProperty = "ErrorInvalidManagedFolderProperty",
    ErrorInvalidManagedFolderQuota = "ErrorInvalidManagedFolderQuota",
    ErrorInvalidManagedFolderSize = "ErrorInvalidManagedFolderSize",
    ErrorInvalidMergedFreeBusyInterval = "ErrorInvalidMergedFreeBusyInterval",
    ErrorInvalidNameForNameResolution = "ErrorInvalidNameForNameResolution",
    ErrorInvalidOperation = "ErrorInvalidOperation",
    ErrorInvalidNetworkServiceContext = "ErrorInvalidNetworkServiceContext",
    ErrorInvalidOofParameter = "ErrorInvalidOofParameter",
    ErrorInvalidPagingMaxRows = "ErrorInvalidPagingMaxRows",
    ErrorInvalidParentFolder = "ErrorInvalidParentFolder",
    ErrorInvalidPercentCompleteValue = "ErrorInvalidPercentCompleteValue",
    ErrorInvalidPermissionSettings = "ErrorInvalidPermissionSettings",
    ErrorInvalidPhoneCallId = "ErrorInvalidPhoneCallId",
    ErrorInvalidPhoneNumber = "ErrorInvalidPhoneNumber",
    ErrorInvalidUserInfo = "ErrorInvalidUserInfo",
    ErrorInvalidPropertyAppend = "ErrorInvalidPropertyAppend",
    ErrorInvalidPropertyDelete = "ErrorInvalidPropertyDelete",
    ErrorInvalidPropertyForExists = "ErrorInvalidPropertyForExists",
    ErrorInvalidPropertyForOperation = "ErrorInvalidPropertyForOperation",
    ErrorInvalidPropertyRequest = "ErrorInvalidPropertyRequest",
    ErrorInvalidPropertySet = "ErrorInvalidPropertySet",
    ErrorInvalidPropertyUpdateSentMessage = "ErrorInvalidPropertyUpdateSentMessage",
    ErrorInvalidProxySecurityContext = "ErrorInvalidProxySecurityContext",
    ErrorInvalidPullSubscriptionId = "ErrorInvalidPullSubscriptionId",
    ErrorInvalidPushSubscriptionUrl = "ErrorInvalidPushSubscriptionUrl",
    ErrorInvalidRecipients = "ErrorInvalidRecipients",
    ErrorInvalidRecipientSubfilter = "ErrorInvalidRecipientSubfilter",
    ErrorInvalidRecipientSubfilterComparison = "ErrorInvalidRecipientSubfilterComparison",
    ErrorInvalidRecipientSubfilterOrder = "ErrorInvalidRecipientSubfilterOrder",
    ErrorInvalidRecipientSubfilterTextFilter = "ErrorInvalidRecipientSubfilterTextFilter",
    ErrorInvalidReferenceItem = "ErrorInvalidReferenceItem",
    ErrorInvalidRequest = "ErrorInvalidRequest",
    ErrorInvalidRestriction = "ErrorInvalidRestriction",
    ErrorInvalidRetentionTagTypeMismatch = "ErrorInvalidRetentionTagTypeMismatch",
    ErrorInvalidRetentionTagInvisible = "ErrorInvalidRetentionTagInvisible",
    ErrorInvalidRetentionTagInheritance = "ErrorInvalidRetentionTagInheritance",
    ErrorInvalidRetentionTagIdGuid = "ErrorInvalidRetentionTagIdGuid",
    ErrorInvalidRoutingType = "ErrorInvalidRoutingType",
    ErrorInvalidScheduledOofDuration = "ErrorInvalidScheduledOofDuration",
    ErrorInvalidSchemaVersionForMailboxVersion = "ErrorInvalidSchemaVersionForMailboxVersion",
    ErrorInvalidSecurityDescriptor = "ErrorInvalidSecurityDescriptor",
    ErrorInvalidSendItemSaveSettings = "ErrorInvalidSendItemSaveSettings",
    ErrorInvalidSerializedAccessToken = "ErrorInvalidSerializedAccessToken",
    ErrorInvalidServerVersion = "ErrorInvalidServerVersion",
    ErrorInvalidSid = "ErrorInvalidSid",
    ErrorInvalidSIPUri = "ErrorInvalidSIPUri",
    ErrorInvalidSmtpAddress = "ErrorInvalidSmtpAddress",
    ErrorInvalidSubfilterType = "ErrorInvalidSubfilterType",
    ErrorInvalidSubfilterTypeNotAttendeeType = "ErrorInvalidSubfilterTypeNotAttendeeType",
    ErrorInvalidSubfilterTypeNotRecipientType = "ErrorInvalidSubfilterTypeNotRecipientType",
    ErrorInvalidSubscription = "ErrorInvalidSubscription",
    ErrorInvalidSubscriptionRequest = "ErrorInvalidSubscriptionRequest",
    ErrorInvalidSyncStateData = "ErrorInvalidSyncStateData",
    ErrorInvalidTimeInterval = "ErrorInvalidTimeInterval",
    ErrorInvalidUserOofSettings = "ErrorInvalidUserOofSettings",
    ErrorInvalidUserPrincipalName = "ErrorInvalidUserPrincipalName",
    ErrorInvalidUserSid = "ErrorInvalidUserSid",
    ErrorInvalidUserSidMissingUPN = "ErrorInvalidUserSidMissingUPN",
    ErrorInvalidValueForProperty = "ErrorInvalidValueForProperty",
    ErrorInvalidWatermark = "ErrorInvalidWatermark",
    ErrorIPGatewayNotFound = "ErrorIPGatewayNotFound",
    ErrorIrresolvableConflict = "ErrorIrresolvableConflict",
    ErrorItemCorrupt = "ErrorItemCorrupt",
    ErrorItemNotFound = "ErrorItemNotFound",
    ErrorItemPropertyRequestFailed = "ErrorItemPropertyRequestFailed",
    ErrorItemSave = "ErrorItemSave",
    ErrorItemSavePropertyError = "ErrorItemSavePropertyError",
    ErrorLegacyMailboxFreeBusyViewTypeNotMerged = "ErrorLegacyMailboxFreeBusyViewTypeNotMerged",
    ErrorLocalServerObjectNotFound = "ErrorLocalServerObjectNotFound",
    ErrorLogonAsNetworkServiceFailed = "ErrorLogonAsNetworkServiceFailed",
    ErrorMailboxConfiguration = "ErrorMailboxConfiguration",
    ErrorMailboxDataArrayEmpty = "ErrorMailboxDataArrayEmpty",
    ErrorMailboxDataArrayTooBig = "ErrorMailboxDataArrayTooBig",
    ErrorMailboxHoldNotFound = "ErrorMailboxHoldNotFound",
    ErrorMailboxLogonFailed = "ErrorMailboxLogonFailed",
    ErrorMailboxMoveInProgress = "ErrorMailboxMoveInProgress",
    ErrorMailboxStoreUnavailable = "ErrorMailboxStoreUnavailable",
    ErrorMailRecipientNotFound = "ErrorMailRecipientNotFound",
    ErrorMailTipsDisabled = "ErrorMailTipsDisabled",
    ErrorManagedFolderAlreadyExists = "ErrorManagedFolderAlreadyExists",
    ErrorManagedFolderNotFound = "ErrorManagedFolderNotFound",
    ErrorManagedFoldersRootFailure = "ErrorManagedFoldersRootFailure",
    ErrorMeetingSuggestionGenerationFailed = "ErrorMeetingSuggestionGenerationFailed",
    ErrorMessageDispositionRequired = "ErrorMessageDispositionRequired",
    ErrorMessageSizeExceeded = "ErrorMessageSizeExceeded",
    ErrorMimeContentConversionFailed = "ErrorMimeContentConversionFailed",
    ErrorMimeContentInvalid = "ErrorMimeContentInvalid",
    ErrorMimeContentInvalidBase64String = "ErrorMimeContentInvalidBase64String",
    ErrorMissingArgument = "ErrorMissingArgument",
    ErrorMissingEmailAddress = "ErrorMissingEmailAddress",
    ErrorMissingEmailAddressForManagedFolder = "ErrorMissingEmailAddressForManagedFolder",
    ErrorMissingInformationEmailAddress = "ErrorMissingInformationEmailAddress",
    ErrorMissingInformationReferenceItemId = "ErrorMissingInformationReferenceItemId",
    ErrorMissingItemForCreateItemAttachment = "ErrorMissingItemForCreateItemAttachment",
    ErrorMissingManagedFolderId = "ErrorMissingManagedFolderId",
    ErrorMissingRecipients = "ErrorMissingRecipients",
    ErrorMissingUserIdInformation = "ErrorMissingUserIdInformation",
    ErrorMoreThanOneAccessModeSpecified = "ErrorMoreThanOneAccessModeSpecified",
    ErrorMoveCopyFailed = "ErrorMoveCopyFailed",
    ErrorMoveDistinguishedFolder = "ErrorMoveDistinguishedFolder",
    ErrorMultiLegacyMailboxAccess = "ErrorMultiLegacyMailboxAccess",
    ErrorNameResolutionMultipleResults = "ErrorNameResolutionMultipleResults",
    ErrorNameResolutionNoMailbox = "ErrorNameResolutionNoMailbox",
    ErrorNameResolutionNoResults = "ErrorNameResolutionNoResults",
    ErrorNoApplicableProxyCASServersAvailable = "ErrorNoApplicableProxyCASServersAvailable",
    ErrorNoCalendar = "ErrorNoCalendar",
    ErrorNoDestinationCASDueToKerberosRequirements = "ErrorNoDestinationCASDueToKerberosRequirements",
    ErrorNoDestinationCASDueToSSLRequirements = "ErrorNoDestinationCASDueToSSLRequirements",
    ErrorNoDestinationCASDueToVersionMismatch = "ErrorNoDestinationCASDueToVersionMismatch",
    ErrorNoFolderClassOverride = "ErrorNoFolderClassOverride",
    ErrorNoFreeBusyAccess = "ErrorNoFreeBusyAccess",
    ErrorNonExistentMailbox = "ErrorNonExistentMailbox",
    ErrorNonPrimarySmtpAddress = "ErrorNonPrimarySmtpAddress",
    ErrorNoPropertyTagForCustomProperties = "ErrorNoPropertyTagForCustomProperties",
    ErrorNoolderReplicaAvailable = "ErrorNoolderReplicaAvailable",
    ErrorNoolderServerAvailable = "ErrorNoolderServerAvailable",
    ErrorNoRespondingCASInDestinationSite = "ErrorNoRespondingCASInDestinationSite",
    ErrorNotDelegate = "ErrorNotDelegate",
    ErrorNotEnoughMemory = "ErrorNotEnoughMemory",
    ErrorObjectTypeChanged = "ErrorObjectTypeChanged",
    ErrorOccurrenceCrossingBoundary = "ErrorOccurrenceCrossingBoundary",
    ErrorOccurrenceTimeSpanTooBig = "ErrorOccurrenceTimeSpanTooBig",
    ErrorOperationNotAllowedWitholderRoot = "ErrorOperationNotAllowedWitholderRoot",
    ErrorParentFolderIdRequired = "ErrorParentFolderIdRequired",
    ErrorParentFolderNotFound = "ErrorParentFolderNotFound",
    ErrorPasswordChangeRequired = "ErrorPasswordChangeRequired",
    ErrorPasswordExpired = "ErrorPasswordExpired",
    ErrorPhoneNumberNotDialable = "ErrorPhoneNumberNotDialable",
    ErrorPropertyUpdate = "ErrorPropertyUpdate",
    ErrorPromptPublishingOperationFailed = "ErrorPromptPublishingOperationFailed",
    ErrorPropertyValidationFailure = "ErrorPropertyValidationFailure",
    ErrorProxiedSubscriptionCallFailure = "ErrorProxiedSubscriptionCallFailure",
    ErrorProxyCallFailed = "ErrorProxyCallFailed",
    ErrorProxyGroupSidLimitExceeded = "ErrorProxyGroupSidLimitExceeded",
    ErrorProxyRequestNotAllowed = "ErrorProxyRequestNotAllowed",
    ErrorProxyRequestProcessingFailed = "ErrorProxyRequestProcessingFailed",
    ErrorProxyServiceDiscoveryFailed = "ErrorProxyServiceDiscoveryFailed",
    ErrorProxyTokenExpired = "ErrorProxyTokenExpired",
    ErrorolderMailboxDiscoveryFailed = "ErrorolderMailboxDiscoveryFailed",
    ErrorolderOperationFailed = "ErrorolderOperationFailed",
    ErrorolderRequestProcessingFailed = "ErrorolderRequestProcessingFailed",
    ErrorolderServerNotFound = "ErrorolderServerNotFound",
    ErrorolderSyncException = "ErrorolderSyncException",
    ErrorQueryFilterTooLong = "ErrorQueryFilterTooLong",
    ErrorQuotaExceeded = "ErrorQuotaExceeded",
    ErrorReadEventsFailed = "ErrorReadEventsFailed",
    ErrorReadReceiptNotPending = "ErrorReadReceiptNotPending",
    ErrorRecurrenceEndDateTooBig = "ErrorRecurrenceEndDateTooBig",
    ErrorRecurrenceHasNoOccurrence = "ErrorRecurrenceHasNoOccurrence",
    ErrorRemoveDelegatesFailed = "ErrorRemoveDelegatesFailed",
    ErrorRequestAborted = "ErrorRequestAborted",
    ErrorRequestStreamTooBig = "ErrorRequestStreamTooBig",
    ErrorRequiredPropertyMissing = "ErrorRequiredPropertyMissing",
    ErrorResolveNamesInvalidFolderType = "ErrorResolveNamesInvalidFolderType",
    ErrorResolveNamesOnlyOneContactsFolderAllowed = "ErrorResolveNamesOnlyOneContactsFolderAllowed",
    ErrorResponseSchemaValidation = "ErrorResponseSchemaValidation",
    ErrorRestrictionTooLong = "ErrorRestrictionTooLong",
    ErrorRestrictionTooComplex = "ErrorRestrictionTooComplex",
    ErrorResultSetTooBig = "ErrorResultSetTooBig",
    ErrorInvalidExchangeImpersonationHeaderData = "ErrorInvalidExchangeImpersonationHeaderData",
    ErrorSavedItemFolderNotFound = "ErrorSavedItemFolderNotFound",
    ErrorSchemaValidation = "ErrorSchemaValidation",
    ErrorSearchFolderNotInitialized = "ErrorSearchFolderNotInitialized",
    ErrorSendAsDenied = "ErrorSendAsDenied",
    ErrorSendMeetingCancellationsRequired = "ErrorSendMeetingCancellationsRequired",
    ErrorSendMeetingInvitationsOrCancellationsRequired = "ErrorSendMeetingInvitationsOrCancellationsRequired",
    ErrorSendMeetingInvitationsRequired = "ErrorSendMeetingInvitationsRequired",
    ErrorSentMeetingRequestUpdate = "ErrorSentMeetingRequestUpdate",
    ErrorSentTaskRequestUpdate = "ErrorSentTaskRequestUpdate",
    ErrorServerBusy = "ErrorServerBusy",
    ErrorServiceDiscoveryFailed = "ErrorServiceDiscoveryFailed",
    ErrorStaleObject = "ErrorStaleObject",
    ErrorSubmissionQuotaExceeded = "ErrorSubmissionQuotaExceeded",
    ErrorSubscriptionAccessDenied = "ErrorSubscriptionAccessDenied",
    ErrorSubscriptionDelegateAccessNotSupported = "ErrorSubscriptionDelegateAccessNotSupported",
    ErrorSubscriptionNotFound = "ErrorSubscriptionNotFound",
    ErrorSubscriptionUnsubscribed = "ErrorSubscriptionUnsubscribed",
    ErrorSyncFolderNotFound = "ErrorSyncFolderNotFound",
    ErrorTeamMailboxNotFound = "ErrorTeamMailboxNotFound",
    ErrorTeamMailboxNotLinkedToSharePoint = "ErrorTeamMailboxNotLinkedToSharePoint",
    ErrorTeamMailboxUrlValidationFailed = "ErrorTeamMailboxUrlValidationFailed",
    ErrorTeamMailboxNotAuthorizedOwner = "ErrorTeamMailboxNotAuthorizedOwner",
    ErrorTeamMailboxActiveToPendingDelete = "ErrorTeamMailboxActiveToPendingDelete",
    ErrorTeamMailboxFailedSendingNotifications = "ErrorTeamMailboxFailedSendingNotifications",
    ErrorTeamMailboxErrorUnknown = "ErrorTeamMailboxErrorUnknown",
    ErrorTimeIntervalTooBig = "ErrorTimeIntervalTooBig",
    ErrorTimeoutExpired = "ErrorTimeoutExpired",
    ErrorTimeZone = "ErrorTimeZone",
    ErrorToFolderNotFound = "ErrorToFolderNotFound",
    ErrorTokenSerializationDenied = "ErrorTokenSerializationDenied",
    ErrorTooManyObjectsOpened = "ErrorTooManyObjectsOpened",
    ErrorUpdatePropertyMismatch = "ErrorUpdatePropertyMismatch",
    ErrorAccessingPartialCreatedUnifiedGroup = "ErrorAccessingPartialCreatedUnifiedGroup",
    ErrorUnifiedGroupMailboxAADCreationFailed = "ErrorUnifiedGroupMailboxAADCreationFailed",
    ErrorUnifiedGroupMailboxAADDeleteFailed = "ErrorUnifiedGroupMailboxAADDeleteFailed",
    ErrorUnifiedGroupMailboxNamingPolicy = "ErrorUnifiedGroupMailboxNamingPolicy",
    ErrorUnifiedGroupMailboxDeleteFailed = "ErrorUnifiedGroupMailboxDeleteFailed",
    ErrorUnifiedGroupMailboxNotFound = "ErrorUnifiedGroupMailboxNotFound",
    ErrorUnifiedGroupMailboxUpdateDelayed = "ErrorUnifiedGroupMailboxUpdateDelayed",
    ErrorUnifiedGroupMailboxUpdatedPartialProperties = "ErrorUnifiedGroupMailboxUpdatedPartialProperties",
    ErrorUnifiedGroupMailboxUpdateFailed = "ErrorUnifiedGroupMailboxUpdateFailed",
    ErrorUnifiedGroupMailboxProvisionFailed = "ErrorUnifiedGroupMailboxProvisionFailed",
    ErrorUnifiedMessagingDialPlanNotFound = "ErrorUnifiedMessagingDialPlanNotFound",
    ErrorUnifiedMessagingReportDataNotFound = "ErrorUnifiedMessagingReportDataNotFound",
    ErrorUnifiedMessagingPromptNotFound = "ErrorUnifiedMessagingPromptNotFound",
    ErrorUnifiedMessagingRequestFailed = "ErrorUnifiedMessagingRequestFailed",
    ErrorUnifiedMessagingServerNotFound = "ErrorUnifiedMessagingServerNotFound",
    ErrorUnableToGetUserOofSettings = "ErrorUnableToGetUserOofSettings",
    ErrorUnableToRemoveImContactFromGroup = "ErrorUnableToRemoveImContactFromGroup",
    ErrorUnsupportedSubFilter = "ErrorUnsupportedSubFilter",
    ErrorUnsupportedCulture = "ErrorUnsupportedCulture",
    ErrorUnsupportedMapiPropertyType = "ErrorUnsupportedMapiPropertyType",
    ErrorUnsupportedMimeConversion = "ErrorUnsupportedMimeConversion",
    ErrorUnsupportedPathForQuery = "ErrorUnsupportedPathForQuery",
    ErrorUnsupportedPathForSortGroup = "ErrorUnsupportedPathForSortGroup",
    ErrorUnsupportedPropertyDefinition = "ErrorUnsupportedPropertyDefinition",
    ErrorUnsupportedQueryFilter = "ErrorUnsupportedQueryFilter",
    ErrorUnsupportedRecurrence = "ErrorUnsupportedRecurrence",
    ErrorUnsupportedTypeForConversion = "ErrorUnsupportedTypeForConversion",
    ErrorUpdateDelegatesFailed = "ErrorUpdateDelegatesFailed",
    ErrorUserNotUnifiedMessagingEnabled = "ErrorUserNotUnifiedMessagingEnabled",
    ErrorVoiceMailNotImplemented = "ErrorVoiceMailNotImplemented",
    ErrorValueOutOfRange = "ErrorValueOutOfRange",
    ErrorVirusDetected = "ErrorVirusDetected",
    ErrorVirusMessageDeleted = "ErrorVirusMessageDeleted",
    ErrorWebRequestInInvalidState = "ErrorWebRequestInInvalidState",
    ErrorWin32InteropError = "ErrorWin32InteropError",
    ErrorWorkingHoursSaveFailed = "ErrorWorkingHoursSaveFailed",
    ErrorWorkingHoursXmlMalformed = "ErrorWorkingHoursXmlMalformed",
    ErrorWrongServerVersion = "ErrorWrongServerVersion",
    ErrorWrongServerVersionDelegate = "ErrorWrongServerVersionDelegate",
    ErrorMissingInformationSharingFolderId = "ErrorMissingInformationSharingFolderId",
    ErrorDuplicateSOAPHeader = "ErrorDuplicateSOAPHeader",
    ErrorSharingSynchronizationFailed = "ErrorSharingSynchronizationFailed",
    ErrorSharingNoExternalEwsAvailable = "ErrorSharingNoExternalEwsAvailable",
    ErrorFreeBusyDLLimitReached = "ErrorFreeBusyDLLimitReached",
    ErrorInvalidGetSharingFolderRequest = "ErrorInvalidGetSharingFolderRequest",
    ErrorNotAllowedExternalSharingByPolicy = "ErrorNotAllowedExternalSharingByPolicy",
    ErrorUserNotAllowedByPolicy = "ErrorUserNotAllowedByPolicy",
    ErrorPermissionNotAllowedByPolicy = "ErrorPermissionNotAllowedByPolicy",
    ErrorOrganizationNotFederated = "ErrorOrganizationNotFederated",
    ErrorMailboxFailover = "ErrorMailboxFailover",
    ErrorInvalidExternalSharingInitiator = "ErrorInvalidExternalSharingInitiator",
    ErrorMessageTrackingPermanentError = "ErrorMessageTrackingPermanentError",
    ErrorMessageTrackingTransientError = "ErrorMessageTrackingTransientError",
    ErrorMessageTrackingNoSuchDomain = "ErrorMessageTrackingNoSuchDomain",
    ErrorUserWithoutFederatedProxyAddress = "ErrorUserWithoutFederatedProxyAddress",
    ErrorInvalidOrganizationRelationshipForFreeBusy = "ErrorInvalidOrganizationRelationshipForFreeBusy",
    ErrorInvalidFederatedOrganizationId = "ErrorInvalidFederatedOrganizationId",
    ErrorInvalidExternalSharingSubscriber = "ErrorInvalidExternalSharingSubscriber",
    ErrorInvalidSharingData = "ErrorInvalidSharingData",
    ErrorInvalidSharingMessage = "ErrorInvalidSharingMessage",
    ErrorNotSupportedSharingMessage = "ErrorNotSupportedSharingMessage",
    ErrorApplyConversationActionFailed = "ErrorApplyConversationActionFailed",
    ErrorInboxRulesValidationError = "ErrorInboxRulesValidationError",
    ErrorOutlookRuleBlobExists = "ErrorOutlookRuleBlobExists",
    ErrorRulesOverQuota = "ErrorRulesOverQuota",
    ErrorNewEventStreamConnectionOpened = "ErrorNewEventStreamConnectionOpened",
    ErrorMissedNotificationEvents = "ErrorMissedNotificationEvents",
    ErrorDuplicateLegacyDistinguishedName = "ErrorDuplicateLegacyDistinguishedName",
    ErrorInvalidClientAccessTokenRequest = "ErrorInvalidClientAccessTokenRequest",
    ErrorUnauthorizedClientAccessTokenRequest = "ErrorUnauthorizedClientAccessTokenRequest",
    ErrorNoSpeechDetected = "ErrorNoSpeechDetected",
    ErrorUMServerUnavailable = "ErrorUMServerUnavailable",
    ErrorRecipientNotFound = "ErrorRecipientNotFound",
    ErrorRecognizerNotInstalled = "ErrorRecognizerNotInstalled",
    ErrorSpeechGrammarError = "ErrorSpeechGrammarError",
    ErrorInvalidManagementRoleHeader = "ErrorInvalidManagementRoleHeader",
    ErrorLocationServicesDisabled = "ErrorLocationServicesDisabled",
    ErrorLocationServicesRequestTimedOut = "ErrorLocationServicesRequestTimedOut",
    ErrorLocationServicesRequestFailed = "ErrorLocationServicesRequestFailed",
    ErrorLocationServicesInvalidRequest = "ErrorLocationServicesInvalidRequest",
    ErrorWeatherServiceDisabled = "ErrorWeatherServiceDisabled",
    ErrorMailboxScopeNotAllowedWithoutQueryString = "ErrorMailboxScopeNotAllowedWithoutQueryString",
    ErrorArchiveMailboxSearchFailed = "ErrorArchiveMailboxSearchFailed",
    ErrorGetRemoteArchiveFolderFailed = "ErrorGetRemoteArchiveFolderFailed",
    ErrorFindRemoteArchiveFolderFailed = "ErrorFindRemoteArchiveFolderFailed",
    ErrorGetRemoteArchiveItemFailed = "ErrorGetRemoteArchiveItemFailed",
    ErrorExportRemoteArchiveItemsFailed = "ErrorExportRemoteArchiveItemsFailed",
    ErrorInvalidPhotoSize = "ErrorInvalidPhotoSize",
    ErrorSearchQueryHasTooManyKeywords = "ErrorSearchQueryHasTooManyKeywords",
    ErrorSearchTooManyMailboxes = "ErrorSearchTooManyMailboxes",
    ErrorInvalidRetentionTagNone = "ErrorInvalidRetentionTagNone",
    ErrorDiscoverySearchesDisabled = "ErrorDiscoverySearchesDisabled",
    ErrorCalendarSeekToConditionNotSupported = "ErrorCalendarSeekToConditionNotSupported",
    ErrorCalendarIsGroupMailboxForAccept = "ErrorCalendarIsGroupMailboxForAccept",
    ErrorCalendarIsGroupMailboxForDecline = "ErrorCalendarIsGroupMailboxForDecline",
    ErrorCalendarIsGroupMailboxForTentative = "ErrorCalendarIsGroupMailboxForTentative",
    ErrorCalendarIsGroupMailboxForSuppressReadReceipt = "ErrorCalendarIsGroupMailboxForSuppressReadReceipt",
    ErrorOrganizationAccessBlocked = "ErrorOrganizationAccessBlocked",
    ErrorInvalidLicense = "ErrorInvalidLicense",
    ErrorMessagePerFolderCountReceiveQuotaExceeded = "ErrorMessagePerFolderCountReceiveQuotaExceeded",
    ErrorInvalidBulkActionType = "ErrorInvalidBulkActionType",
    ErrorInvalidKeepNCount = "ErrorInvalidKeepNCount",
    ErrorInvalidKeepNType = "ErrorInvalidKeepNType",
    ErrorNoOAuthServerAvailableForRequest = "ErrorNoOAuthServerAvailableForRequest",
    ErrorInstantSearchSessionExpired = "ErrorInstantSearchSessionExpired",
    ErrorInstantSearchTimeout = "ErrorInstantSearchTimeout",
    ErrorInstantSearchFailed = "ErrorInstantSearchFailed",
    ErrorUnsupportedUserForExecuteSearch = "ErrorUnsupportedUserForExecuteSearch",
    ErrorDuplicateExtendedKeywordDefinition = "ErrorDuplicateExtendedKeywordDefinition",
    ErrorMissingExchangePrincipal = "ErrorMissingExchangePrincipal",
    ErrorUnexpectedUnifiedGroupsCount = "ErrorUnexpectedUnifiedGroupsCount",
    ErrorParsingXMLResponse = "ErrorParsingXMLResponse",
    ErrorInvalidFederationOrganizationIdentifier = "ErrorInvalidFederationOrganizationIdentifier",
    ErrorInvalidSweepRule = "ErrorInvalidSweepRule",
    ErrorInvalidSweepRuleOperationType = "ErrorInvalidSweepRuleOperationType",
    ErrorTargetDomainNotSupported = "ErrorTargetDomainNotSupported",
    ErrorInvalidInternetWebProxyOnLocalServer = "ErrorInvalidInternetWebProxyOnLocalServer",
    ErrorNoSenderRestrictionsSettingsFoundInRequest = "ErrorNoSenderRestrictionsSettingsFoundInRequest",
    ErrorDuplicateSenderRestrictionsInputFound = "ErrorDuplicateSenderRestrictionsInputFound",
    ErrorSenderRestrictionsUpdateFailed = "ErrorSenderRestrictionsUpdateFailed",
    ErrorMessageSubmissionBlocked = "ErrorMessageSubmissionBlocked",
    ErrorExceededMessageLimit = "ErrorExceededMessageLimit",
    ErrorExceededMaxRecipientLimitBlock = "ErrorExceededMaxRecipientLimitBlock",
    ErrorAccountSuspend = "ErrorAccountSuspend",
    ErrorExceededMaxRecipientLimit = "ErrorExceededMaxRecipientLimit",
    ErrorMessageBlocked = "ErrorMessageBlocked",
    ErrorAccountSuspendShowTierUpgrade = "ErrorAccountSuspendShowTierUpgrade",
    ErrorExceededMessageLimitShowTierUpgrade = "ErrorExceededMessageLimitShowTierUpgrade",
    ErrorExceededMaxRecipientLimitShowTierUpgrade = "ErrorExceededMaxRecipientLimitShowTierUpgrade",
    ErrorInvalidLongitude = "ErrorInvalidLongitude",
    ErrorInvalidLatitude = "ErrorInvalidLatitude",
    ErrorProxySoapException = "ErrorProxySoapException",
    ErrorUnifiedGroupAlreadyExists = "ErrorUnifiedGroupAlreadyExists",
    ErrorUnifiedGroupAadAuthorizationRequestDenied = "ErrorUnifiedGroupAadAuthorizationRequestDenied",
    ErrorUnifiedGroupCreationDisabled = "ErrorUnifiedGroupCreationDisabled",
    ErrorMarketPlaceExtensionAlreadyInstalledForOrg = "ErrorMarketPlaceExtensionAlreadyInstalledForOrg",
    ErrorExtensionAlreadyInstalledForOrg = "ErrorExtensionAlreadyInstalledForOrg",
    ErrorNewerExtensionAlreadyInstalled = "ErrorNewerExtensionAlreadyInstalled",
    ErrorNewerMarketPlaceExtensionAlreadyInstalled = "ErrorNewerMarketPlaceExtensionAlreadyInstalled",
    ErrorInvalidExtensionId = "ErrorInvalidExtensionId",
    ErrorCannotUninstallProvidedExtensions = "ErrorCannotUninstallProvidedExtensions",
    ErrorNoRbacPermissionToInstallMarketPlaceExtensions = "ErrorNoRbacPermissionToInstallMarketPlaceExtensions",
    ErrorNoRbacPermissionToInstallReadWriteMailboxExtensions = "ErrorNoRbacPermissionToInstallReadWriteMailboxExtensions",
    ErrorInvalidReportMessageActionType = "ErrorInvalidReportMessageActionType",
    ErrorCannotDownloadExtensionManifest = "ErrorCannotDownloadExtensionManifest",
    ErrorCalendarForwardActionNotAllowed = "ErrorCalendarForwardActionNotAllowed",
    ErrorUnifiedGroupAliasNamingPolicy = "ErrorUnifiedGroupAliasNamingPolicy",
    ErrorSubscriptionsDisabledForGroup = "ErrorSubscriptionsDisabledForGroup",
    ErrorCannotFindFileAttachment = "ErrorCannotFindFileAttachment",
    ErrorInvalidValueForFilter = "ErrorInvalidValueForFilter",
    ErrorQuotaExceededOnDelete = "ErrorQuotaExceededOnDelete",
    ErrorAccessDeniedDueToCompliance = "ErrorAccessDeniedDueToCompliance",
    ErrorRecoverableItemsAccessDenied = "ErrorRecoverableItemsAccessDenied"
}
