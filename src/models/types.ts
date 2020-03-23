export interface FindResponsePagingAttributes {
    IndexedPagingOffset: number;
    NumeratorOffset: number;
    AbsoluteDenominator: number;
    IncludesLastItemInRange: boolean;
    TotalItemsInView: number;

    
}

export interface TimeChangePatternTypes {
    
}

export interface RecurrencePatternTypes {
    
}

export interface TaskRecurrencePatternTypes {
    
}

export interface RecurrenceRangeTypes {
    
}

export class MailboxCultureType {
    
}

export class InstalledAppType {
    public Id?: string;
    public MarketplaceAssetId?: string;
    public Enabled?: boolean;
    public ConsentState?: string;
    public Type?: string;
    public LicenseStatus?: string;
    public TrialExpirationDate?: Date;
    public ProviderName?: string;
    public IconUrl?: string;
    public HighResolutionIconUrl?: string;
    public DisplayName?: string;
    public Description?: string;
    public Requirements?: string;
    public Version?: string;

    
}

export class NonEmptyArrayOfRoleType {
    public Role: string[];

    
}

export class ManagementRoleType {
    public UserRoles?: NonEmptyArrayOfRoleType;
    public ApplicationRoles?: NonEmptyArrayOfRoleType;

    
}

export class SidAndAttributesType {
    public SecurityIdentifier: string;

    
}

export class NonEmptyArrayOfGroupIdentifiersType {
    public GroupIdentifier: SidAndAttributesType[];

    
}

export class NonEmptyArrayOfRestrictedGroupIdentifiersType {
    public RestrictedGroupIdentifier: SidAndAttributesType[];

    
}

export class SerializedSecurityContextType {
    public UserSid: string;
    public GroupSids?: NonEmptyArrayOfGroupIdentifiersType;
    public RestrictedGroupSids?: NonEmptyArrayOfRestrictedGroupIdentifiersType;
    public PrimarySmtpAddress?: string;

    
}

export class ConnectingSIDType {
    
}

export class PrincipalNameType {
    
}

export class SIDType {
    
}

export class PrimarySmtpAddressType {
    
}

export class SmtpAddressType {
    
}

export class ExchangeImpersonationType {
    public ConnectingSID: ConnectingSIDType;

    
}

export class OpenAsAdminOrSystemServiceType {
    public ConnectingSID: ConnectingSIDType;

    
}

export class ProxySecurityContextType {
    
}

export class ServerVersionInfo {
    public MajorVersion: number;
    public MinorVersion: number;
    public MajorBuildNumber: number;
    public MinorBuildNumber: number;
    public Version: string;

    
}

export class RequestServerVersion {
    public Version: ExchangeVersionType;

    
}

export class BaseEmailAddressType {
    
}

export class ArrayOfEmailAddressesType {
    public Address?: EmailAddressType[];

    
}

export class DirectoryEntryType {
    public Id?: EmailAddressType;

    
}

export class RoomType {
    
}

export class ArrayOfRoomsType {
    public Room?: RoomType[];

    
}

export class TimeSlot {
    public StartTime: Date;
    public DurationInMinutes: number;

    
}

export class MeetingLocation {
    public EmailAddress: string;
    public DisplayName: string;

    
}

export class ReminderType {
    public Subject: string;
    public Location?: string;
    public ReminderTime: Date;
    public StartDate: Date;
    public EndDate: Date;
    public ItemId: ItemIdType;
    public RecurringMasterItemId?: ItemIdType;
    public ReminderGroup?: ReminderGroupType;
    public UID: string;

    
}

export class ArrayOfRemindersType {
    public Reminder?: ReminderType[];

    
}

export class ArrayOfRecipientsType {
    
}

export class SingleRecipientType {
    
}

export class BasePathToElementType {
    
}

export class PathToUnindexedFieldType {
    
}

export class PathToIndexedFieldType {
    
}

export class PathToExceptionFieldType {
    
}

export class PathToExtendedFieldType {
    
}

export class NonEmptyArrayOfPathsToElementType {
    
}

export class NonEmptyArrayOfPropertyValuesType {
    
}

export class NonEmptyArrayOfExtendedPropertyType {
    
}

export class ExtendedPropertyType {
    public ExtendedFieldURI: PathToExtendedFieldType;

    
}

export class FolderResponseShapeType {
    public BaseShape: DefaultShapeNamesType;
    public AdditionalProperties?: NonEmptyArrayOfPathsToElementType;

    
}

export class ItemResponseShapeType {
    public BaseShape: DefaultShapeNamesType;
    public IncludeMimeContent?: boolean;
    public BodyType?: BodyTypeResponseType;
    public UniqueBodyType?: BodyTypeResponseType;
    public NormalizedBodyType?: BodyTypeResponseType;
    public FilterHtmlContent?: boolean;
    public ConvertHtmlCodePageToUTF8?: boolean;
    public InlineImageUrlTemplate?: string;
    public BlockExternalImages?: boolean;
    public AddBlankTargetToLinks?: boolean;
    public MaximumBodySize?: number;
    public AdditionalProperties?: NonEmptyArrayOfPathsToElementType;

    
}

export class AttachmentResponseShapeType {
    public IncludeMimeContent?: boolean;
    public BodyType?: BodyTypeResponseType;
    public FilterHtmlContent?: boolean;
    public AdditionalProperties?: NonEmptyArrayOfPathsToElementType;

    
}

export class ConversationResponseShapeType {
    public BaseShape: DefaultShapeNamesType;
    public AdditionalProperties?: NonEmptyArrayOfPathsToElementType;

    
}

export class PersonaResponseShapeType {
    public BaseShape: DefaultShapeNamesType;
    public AdditionalProperties?: NonEmptyArrayOfPathsToElementType;

    
}

export class NonEmptyArrayOfClientAccessTokenRequestsType {
    public TokenRequest: any;

    
}

export class ClientAccessTokenRequestType {
    public Id: string;
    public TokenType: any;
    public Scope?: string;
    public ResourceUri?: string;

    
}

export class ClientAccessTokenType {
    public Id: string;
    public TokenType: any;
    public TokenValue: string;
    public TTL: number;

    
}

export class ChangeDescriptionType {
    
}

export class ItemChangeDescriptionType {
    
}

export class FolderChangeDescriptionType {
    
}

export class SetItemFieldType {
    
}

export class SetFolderFieldType {
    
}

export class AppendToItemFieldType {
    
}

export class NonEmptyArrayOfItemChangeDescriptionsType {
    
}

export class NonEmptyArrayOfFolderChangeDescriptionsType {
    
}

export class ItemChangeType {
    public Updates: NonEmptyArrayOfItemChangeDescriptionsType;
    public CalendarActivityData?: CalendarActivityDataType;

    
}

export class NonEmptyArrayOfItemChangesType {
    public ItemChange: ItemChangeType[];

    
}

export class InternetHeaderType {
    
}

export class NonEmptyArrayOfInternetHeadersType {
    public InternetMessageHeader: InternetHeaderType[];

    
}

export class NonEmptyArrayOfPredictedActionReasonType {
    public PredictedActionReason: PredictedActionReasonType[];

    
}

export class RequestAttachmentIdType {
    
}

export class AttachmentIdType {
    
}

export class RootItemIdType {
    
}

export class NonEmptyArrayOfRequestAttachmentIdsType {
    
}

export class AttachmentType {
    public AttachmentId?: any;
    public Name?: string;
    public ContentType?: string;
    public ContentId?: string;
    public ContentLocation?: string;
    public AttachmentOriginalUrl?: string;
    public Size?: number;
    public LastModifiedTime?: Date;
    public IsInline?: boolean;

    
}

export class ItemAttachmentType {
    
}

export class SyncFolderItemsCreateOrUpdateType {
    
}

export class ArrayOfAttachmentsType {
    
}

export class NonEmptyArrayOfAttachmentsType {
    
}

export class BodyType {
    
}

export class UniqueBodyType {
    
}

export class NormalizedBodyType {
    
}

export class BaseFolderIdType {
    
}

export class FolderIdType {
    
}

export class AddressListIdType {
    
}

export class ArrayOfDistinguishedFolderIdType {
    
}

export class NonEmptyArrayOfBaseFolderIdsType {
    
}

export class TargetFolderIdType {
    public attributes? : any;
    [param: string] : any;
}

export class NonEmptyArrayOfUploadItemsType {
    public Item: UploadItemType[];

    
}

export class UploadItemType {
    public ParentFolderId: FolderIdType;
    public ItemId?: any;
    public Data: any;

    
}

export class FindFolderParentType {
    public Folders?: any;

    
}

export class BaseFolderType {
    public FolderId?: any;
    public ParentFolderId?: any;
    public FolderClass?: string;
    public DisplayName?: string;
    public TotalCount?: number;
    public ChildFolderCount?: number;
    public ExtendedProperty?: any;
    public ManagedFolderInformation?: any;
    public EffectiveRights?: any;
    public DistinguishedFolderId?: any;
    public PolicyTag?: any;
    public ArchiveTag?: any;
    public ReplicaList?: any;

    
}

export class ManagedFolderInformationType {
    public CanDelete?: boolean;
    public CanRenameOrMove?: boolean;
    public MustDisplayComment?: boolean;
    public HasQuota?: boolean;
    public IsManagedFoldersRoot?: boolean;
    public ManagedFolderId?: string;
    public Comment?: string;
    public StorageQuota?: number;
    public FolderSize?: number;
    public HomePage?: string;

    
}

export class ReminderItemActionType {
    public ActionType: any;
    public ItemId: any;
    public NewReminderTime?: string;

    
}

export class NonEmptyArrayOfReminderItemActionType {
    public ReminderItemAction: any;

    
}

export class TasksFolderType {
    
}

export class NonEmptyArrayOfFoldersType {
    
}

export class ArrayOfFoldersType {
    
}

export class BaseItemIdType {
    
}

export class ItemIdType {
    attributes?: any
}

export class NonEmptyArrayOfBaseItemIdsType {
    
}

export class ArrayOfBaseItemIdsType {
    
}

export class NonEmptyArrayOfItemIdsType {
    public ItemId: any;

    
}

export class ArrayOfItemIdsType {
    public ItemId?: any;

    
}

export class ResponseObjectType {
    
}

export class NonEmptyArrayOfResponseObjectsType {
    
}

export class FolderChangeType {
    public Updates: any;

    
}

export class NonEmptyArrayOfFolderChangesType {
    public FolderChange: any;

    
}

export class WellKnownResponseObjectType {
    
}

export class SmartResponseBaseType {
    
}

export class ReplyToItemType {
    
}

export class ForwardItemType {
    
}

export class CancelCalendarItemType {
    
}

export class ReferenceItemResponseType {
    
}

export class SuppressReadReceiptType {
    
}

export class FindItemParentType {
    
}

export class ItemType {
    public MimeContent?: MimeContentType;
    public ItemId?: ItemIdType;
    public ParentFolderId?: FolderIdType;
    public ItemClass?: ItemClassType;
    public Subject?: string;
    public Sensitivity?: SensitivityChoicesType;
    public Body?: BodyType;
    public Attachments?: NonEmptyArrayOfAttachmentsType;
    public DateTimeReceived?: Date;
    public Size?: number;
    public Categories?: ArrayOfStringsType;
    public Importance?: ImportanceChoicesType;
    public InReplyTo?: string;
    public IsSubmitted?: boolean;
    public IsDraft?: boolean;
    public IsFromMe?: boolean;
    public IsResend?: boolean;
    public IsUnmodified?: boolean;
    public InternetMessageHeaders?: NonEmptyArrayOfInternetHeadersType;
    public DateTimeSent?: Date;
    public DateTimeCreated?: Date;
    public ResponseObjects?: NonEmptyArrayOfResponseObjectsType;
    public ReminderDueBy?: Date;
    public ReminderIsSet?: boolean;
    public ReminderNextTime?: Date;
    public ReminderMinutesBeforeStart?: any;
    public DisplayCc?: string;
    public DisplayTo?: string;
    public DisplayBcc?: string;
    public HasAttachments?: boolean;
    public ExtendedProperty?: ExtendedPropertyType[];
    public Culture?: any;
    public EffectiveRights?: EffectiveRightsType;
    public LastModifiedName?: string;
    public LastModifiedTime?: Date;
    public IsAssociated?: boolean;
    public WebClientReadFormQueryString?: string;
    public WebClientEditFormQueryString?: string;
    public ConversationId?: ItemIdType;
    public UniqueBody?: BodyType;
    public Flag?: FlagType;
    public StoreEntryId?: any;
    public InstanceKey?: any;
    public NormalizedBody?: BodyType;
    public EntityExtractionResult?: EntityExtractionResultType;
    public PolicyTag?: RetentionTagType;
    public ArchiveTag?: RetentionTagType;
    public RetentionDate?: Date;
    public Preview?: string;
    public RightsManagementLicenseData?: RightsManagementLicenseDataType;
    public PredictedActionReasons?: NonEmptyArrayOfPredictedActionReasonType;
    public IsClutter?: boolean;
    public BlockStatus?: boolean;
    public HasBlockedImages?: boolean;
    public TextBody?: BodyType;
    public IconIndex?: IconIndexType;
    public SearchKey?: any;
    public SortKey?: any;
    public Hashtags?: ArrayOfStringsType;
    public Mentions?: ArrayOfRecipientsType;
    public MentionedMe?: boolean;
    public MentionsPreview?: MentionsPreviewType;
    public MentionsEx?: NonEmptyArrayOfMentionActionsType;
    public AppliedHashtags?: NonEmptyArrayOfAppliedHashtagType;
    public AppliedHashtagsPreview?: AppliedHashtagsPreviewType;
    public Likes?: NonEmptyArrayOfLikeType;
    public LikesPreview?: LikesPreviewType;
    public PendingSocialActivityTagIds?: ArrayOfStringsType;
    public AtAllMention?: boolean;
    public CanDelete?: boolean;
    public InferenceClassification?: InferenceClassificationType;
    
}

export class ArrayOfItemClassType {
    
}

export class FlagType {
    public FlagStatus: any;
    public StartDate?: Date;
    public DueDate?: Date;
    public CompleteDate?: Date;

    
}

export class EntityType {
    public Position?: any;

    
}

export class ArrayOfAddressesType {
    public Address?: string[];

    
}

export class ArrayOfAddressEntitiesType {
    public AddressEntity?: any;

    
}

export class ArrayOfEmailAddressEntitiesType {
    public EmailAddressEntity?: any;

    
}

export class ArrayOfUrlEntitiesType {
    public UrlEntity?: any;

    
}

export class ArrayOfMeetingSuggestionsType {
    public MeetingSuggestion: any;

    
}

export class ArrayOfTaskSuggestionsType {
    public TaskSuggestion: any;

    
}

export class ArrayOfContactsType {
    public Contact?: any;

    
}

export class ArrayOfUrlsType {
    public Url?: string[];

    
}

export class ArrayOfPhonesType {
    public Phone?: any;

    
}

export class PhoneType {
    public OriginalPhoneString?: string;
    public PhoneString?: string;
    public Type?: string;

    
}

export class ArrayOfPhoneEntitiesType {
    public Phone?: any;

    
}

export class ArrayOfEmailUsersType {
    public EmailUser?: any;

    
}

export class EmailUserType {
    public Name?: string;
    public UserId?: string;

    
}

export class ArrayOfExtractedEmailAddresses {
    public EmailAddress?: string[];

    
}

export class ParcelDeliveryEntityType {
    public Carrier?: string;
    public TrackingNumber?: string;
    public TrackingUrl?: string;
    public ExpectedArrivalFrom?: string;
    public ExpectedArrivalUntil?: string;
    public Product?: string;
    public ProductUrl?: string;
    public ProductImage?: string;
    public ProductSku?: string;
    public ProductDescription?: string;
    public ProductBrand?: string;
    public ProductColor?: string;
    public OrderNumber?: string;
    public Seller?: string;
    public OrderStatus?: string;
    public AddressName?: string;
    public StreetAddress?: string;
    public AddressLocality?: string;
    public AddressRegion?: string;
    public AddressCountry?: string;
    public PostalCode?: string;

    
}

export class InferenceClassificationOverrideType {
    public Id: any;
    public SenderSmtpAddress: string;
    public SenderDisplayName: string;
    public AlwaysClassifyAs: any;

    
}

export class ArrayOfInferenceClassificationOverridesType {
    public Override?: any;

    
}

export class ArrayOfParcelDeliveryEntitiesType {
    public ParcelDelivery?: any;

    
}

export class FlightEntityType {
    public FlightNumber?: string;
    public AirlineIataCode?: string;
    public DepartureTime?: string;
    public WindowsTimeZoneName?: string;
    public DepartureAirportIataCode?: string;
    public ArrivalAirportIataCode?: string;

    
}

export class ArrayOfFlightsType {
    public Flight?: any;

    
}

export class FlightReservationEntityType {
    public ReservationId?: string;
    public ReservationStatus?: string;
    public UnderName?: string;
    public BrokerName?: string;
    public BrokerPhone?: string;
    public Flights?: any;

    
}

export class ArrayOfFlightReservationsType {
    public FlightReservation?: any;

    
}

export class SenderAddInEntityType {
    public ExtensionId?: string;

    
}

export class ArrayOfSenderAddInsType {
    public SenderApp?: any;

    
}

export class EntityExtractionResultType {
    public Addresses?: any;
    public MeetingSuggestions?: any;
    public TaskSuggestions?: any;
    public EmailAddresses?: any;
    public Contacts?: any;
    public Urls?: any;
    public PhoneNumbers?: any;
    public ParcelDeliveries?: any;
    public FlightReservations?: any;
    public SenderAddIns?: any;

    
}

export class RightsManagementLicenseDataType {
    public RightsManagedMessageDecryptionStatus?: number;
    public RmsTemplateId?: string;
    public TemplateName?: string;
    public TemplateDescription?: string;
    public EditAllowed?: boolean;
    public ReplyAllowed?: boolean;
    public ReplyAllAllowed?: boolean;
    public ForwardAllowed?: boolean;
    public ModifyRecipientsAllowed?: boolean;
    public ExtractAllowed?: boolean;
    public PrintAllowed?: boolean;
    public ExportAllowed?: boolean;
    public ProgrammaticAccessAllowed?: boolean;
    public IsOwner?: boolean;
    public ContentOwner?: string;
    public ContentExpiryDate?: string;

    
}

export class ConversationActionType {
    public Action: any;
    public ConversationId: any;
    public ContextFolderId?: any;
    public ConversationLastSyncTime?: Date;
    public ProcessRightAway?: boolean;
    public DestinationFolderId?: any;
    public Categories?: any;
    public EnableAlwaysDelete?: boolean;
    public IsRead?: boolean;
    public DeleteType?: any;
    public RetentionPolicyType?: any;
    public RetentionPolicyTagId?: string;
    public Flag?: any;
    public SuppressReadReceipts?: boolean;

    
}

export class NonEmptyArrayOfApplyConversationActionType {
    public ConversationAction: any;

    
}

export class ConversationType {
    public ConversationId?: any;
    public ConversationTopic?: string;
    public UniqueRecipients?: any;
    public GlobalUniqueRecipients?: any;
    public UniqueUnreadSenders?: any;
    public GlobalUniqueUnreadSenders?: any;
    public UniqueSenders?: any;
    public GlobalUniqueSenders?: any;
    public LastDeliveryTime?: Date;
    public GlobalLastDeliveryTime?: Date;
    public Categories?: any;
    public GlobalCategories?: any;
    public FlagStatus?: any;
    public GlobalFlagStatus?: any;
    public HasAttachments?: boolean;
    public GlobalHasAttachments?: boolean;
    public MessageCount?: number;
    public GlobalMessageCount?: number;
    public UnreadCount?: number;
    public GlobalUnreadCount?: number;
    public Size?: number;
    public GlobalSize?: number;
    public ItemClasses?: any;
    public GlobalItemClasses?: any;
    public Importance?: any;
    public GlobalImportance?: any;
    public ItemIds?: any;
    public GlobalItemIds?: any;
    public LastModifiedTime?: Date;
    public InstanceKey?: any;
    public Preview?: string;
    public MailboxScope?: any;
    public IconIndex?: any;
    public GlobalIconIndex?: any;
    public DraftItemIds?: any;
    public HasIrm?: boolean;
    public GlobalHasIrm?: boolean;
    public InferenceClassification?: any;
    public SortKey?: any;
    public MentionedMe?: boolean;
    public GlobalMentionedMe?: boolean;
    public SenderSMTPAddress?: any;
    public MailboxGuids?: any;
    public From?: any;
    public AtAllMention?: boolean;
    public GlobalAtAllMention?: boolean;

    
}

export class HighlightTermType {
    public Scope: string;
    public Value: string;

    
}

export class ArrayOfConversationsType {
    
}

export class ConversationRequestType {
    public ConversationId: any;
    public SyncState?: any;

    
}

export class ArrayOfConversationRequestsType {
    
}

export class ConversationNodeType {
    public InternetMessageId?: string;
    public ParentInternetMessageId?: string;
    public Items?: any;

    
}

export class ArrayOfConversationNodesType {
    
}

export class ConversationResponseType {
    public ConversationId: any;
    public SyncState?: any;
    public ConversationNodes?: any;
    public CanDelete?: boolean;

    
}

export class ArrayOfHighlightTermsType {
    public Term?: any;

    
}

export class PersonaAttributionType {
    public Id: string;
    public SourceId: any;
    public DisplayName: string;
    public IsWritable?: boolean;
    public IsQuickContact?: boolean;
    public IsHidden?: boolean;
    public FolderId?: any;

    
}

export class ArrayOfPersonaAttributionsType {
    public Attribution: any;

    
}

export class ArrayOfValueAttributionsType {
    public Attribution: string[];

    
}

export class ArrayOfStringValueType {
    public Value: string[];

    
}

export class StringAttributedValueType {
    public Value: string;
    public Attributions: any;

    
}

export class BodyContentType {
    public Value: string;
    public BodyType: any;

    
}

export class BodyContentAttributedValueType {
    public Value: any;
    public Attributions: any;

    
}

export class StringArrayAttributedValueType {
    public Values: any;
    public Attributions: any;

    
}

export class EmailAddressAttributedValueType {
    public Value: any;
    public Attributions: any;

    
}

export class PersonaPhoneNumberType {
    public Number: string;
    public Type: string;

    
}

export class PhoneNumberAttributedValueType {
    public Value: any;
    public Attributions: any;

    
}

export class PersonaPostalAddressType {
    public Street?: string;
    public City?: string;
    public State?: string;
    public Country?: string;
    public PostalCode?: string;
    public PostOfficeBox?: string;
    public Type?: string;
    public Latitude?: number;
    public Longitude?: number;
    public Accuracy?: number;
    public Altitude?: number;
    public AltitudeAccuracy?: number;
    public FormattedAddress?: string;
    public LocationUri?: string;
    public LocationSource?: any;

    
}

export class PostalAddressAttributedValueType {
    public Value: any;
    public Attributions: any;

    
}

export class ExtendedPropertyAttributedValueType {
    public Value: any;
    public Attributions: any;

    
}

export class ArrayOfStringAttributedValuesType {
    public StringAttributedValue?: any;

    
}

export class ArrayOfStringArrayAttributedValuesType {
    public StringArrayAttributedValue?: any;

    
}

export class ArrayOfBodyContentAttributedValuesType {
    public BodyContentAttributedValue?: any;

    
}

export class ArrayOfEmailAddressAttributedValuesType {
    public EmailAddressAttributedValue?: any;

    
}

export class ArrayOfPhoneNumberAttributedValuesType {
    public PhoneNumberAttributedValue?: any;

    
}

export class ArrayOfPostalAddressAttributedValuesType {
    public PostalAddressAttributedValue?: any;

    
}

export class ArrayOfExtendedPropertyAttributedValueType {
    public ExtendedPropertyAttributedValue?: any;

    
}

export class InsightFiltersType {
    public Count?: number;
    public Types?: any;
    public KeyInsightsOnly?: boolean;

    
}

export class InsightValue {
    public InsightSource?: string;
    public UpdatedUtcTicks?: any;

    
}

export class ArrayOfInsightValue {
    public Item?: any;

    
}

export class ArrayOfSkillInsightValue {
    public Item?: any;

    
}

export class ArrayOfProfileInsightValue {
    public Item?: any;

    
}

export class ArrayOfJobInsightValue {
    public Item?: any;

    
}

export class ArrayOfCompanyInsightValue {
    public Item?: any;

    
}

export class InsightContent {
    
}

export class Insight {
    public InsightType?: string;
    public Rank?: number;
    public Content?: any;
    public Text?: string;
    public ItemList?: any;
    public RequiresToken?: boolean;

    
}

export class ComputedInsightValueProperty {
    public Key: string;
    public Value: string;

    
}

export class ArrayOfComputedInsightValueProperty {
    public Property?: any;

    
}

export class ArrayOfInsight {
    public Insight?: any;

    
}

export class PersonResponseShapeType {
    public BaseShape: any;
    public AdditionalProperties?: any;

    
}

export class PersonType {
    public FullName?: string;
    public GivenName?: string;
    public Surname?: string;
    public PhoneNumber?: string;
    public SMSNumber?: string;
    public EmailAddress?: string;
    public Alias?: string;
    public Department?: string;
    public LinkedInProfileLink?: string;
    public Skills?: any;
    public ProfessionalBiography?: string;
    public ManagementChain?: any;
    public DirectReports?: any;
    public Peers?: any;
    public TeamSize?: string;
    public CurrentJob?: any;
    public Birthday?: string;
    public Hometown?: string;
    public CurrentLocation?: string;
    public CompanyProfile?: any;
    public Office?: string;
    public Headline?: string;
    public MutualConnections?: any;
    public Title?: string;
    public MutualManager?: any;
    public Insights?: any;
    public UserProfilePicture?: any;

    
}

export class ArrayOfPersonType {
    
}

export class PeopleTokenType {
    public TokenSource: any;
    public ExpirationDateTime?: Date;
    public TokenValue?: string;

    
}

export class NonEmptyArrayOfPeopleTokenType {
    public PeopleToken: any;

    
}

export class PersonaType {
    public PersonaId: any;
    public PersonaType?: string;
    public PersonaObjectStatus?: string;
    public CreationTime?: Date;
    public Bodies?: any;
    public DisplayNameFirstLastSortKey?: string;
    public DisplayNameLastFirstSortKey?: string;
    public CompanyNameSortKey?: string;
    public HomeCitySortKey?: string;
    public WorkCitySortKey?: string;
    public DisplayNameFirstLastHeader?: string;
    public DisplayNameLastFirstHeader?: string;
    public DisplayName?: string;
    public DisplayNameFirstLast?: string;
    public DisplayNameLastFirst?: string;
    public FileAs?: string;
    public FileAsId?: string;
    public DisplayNamePrefix?: string;
    public GivenName?: string;
    public MiddleName?: string;
    public Surname?: string;
    public Generation?: string;
    public Nickname?: string;
    public YomiCompanyName?: string;
    public YomiFirstName?: string;
    public YomiLastName?: string;
    public Title?: string;
    public Department?: string;
    public CompanyName?: string;
    public Location?: string;
    public EmailAddress?: EmailAddress;
    public EmailAddresses?: EmailAddress[];
    public PhoneNumber?: PersonaPhoneNumberType;
    public ImAddress?: string;
    public HomeCity?: string;
    public WorkCity?: string;
    public RelevanceScore?: number;
    public FolderIds?: any;
    public Attributions?: any;
    public DisplayNames?: any;
    public FileAses?: any;
    public FileAsIds?: any;
    public DisplayNamePrefixes?: any;
    public GivenNames?: any;
    public MiddleNames?: any;
    public Surnames?: any;
    public Generations?: any;
    public Nicknames?: any;
    public Initials?: any;
    public YomiCompanyNames?: any;
    public YomiFirstNames?: any;
    public YomiLastNames?: any;
    public BusinessPhoneNumbers?: any;
    public BusinessPhoneNumbers2?: any;
    public HomePhones?: any;
    public HomePhones2?: any;
    public MobilePhones?: any;
    public MobilePhones2?: any;
    public AssistantPhoneNumbers?: any;
    public CallbackPhones?: any;
    public CarPhones?: any;
    public HomeFaxes?: any;
    public OrganizationMainPhones?: any;
    public OtherFaxes?: any;
    public OtherTelephones?: any;
    public OtherPhones2?: any;
    public Pagers?: any;
    public RadioPhones?: any;
    public TelexNumbers?: any;
    public TTYTDDPhoneNumbers?: any;
    public WorkFaxes?: any;
    public Emails1?: any;
    public Emails2?: any;
    public Emails3?: any;
    public BusinessHomePages?: any;
    public PersonalHomePages?: any;
    public OfficeLocations?: any;
    public ImAddresses?: any;
    public ImAddresses2?: any;
    public ImAddresses3?: any;
    public BusinessAddresses?: any;
    public HomeAddresses?: any;
    public OtherAddresses?: any;
    public Titles?: any;
    public Departments?: any;
    public CompanyNames?: any;
    public Managers?: any;
    public AssistantNames?: any;
    public Professions?: any;
    public SpouseNames?: any;
    public Children?: any;
    public Schools?: any;
    public Hobbies?: any;
    public WeddingAnniversaries?: any;
    public Birthdays?: any;
    public Locations?: any;
    public InlineLinks?: any;
    public ItemLinkIds?: any;
    public HasActiveDeals?: string;
    public IsBusinessContact?: string;
    public AttributedHasActiveDeals?: any;
    public AttributedIsBusinessContact?: any;
    public SourceMailboxGuids?: any;
    public LastContactedDate?: Date;
    public ExtendedProperties?: any;
    public ExternalDirectoryObjectId?: string;
    public MapiEntryId?: string;
    public MapiEmailAddress?: string;
    public MapiAddressType?: string;
    public MapiSearchKey?: string;
    public MapiTransmittableDisplayName?: string;
    public MapiSendRichInfo?: boolean;

    
}

export class ArrayOfPeopleType {
    Persona: PersonaType;
}

export class MailboxLocatorType {
    public ExternalDirectoryObjectId?: string;
    public LegacyDn?: string;
    public EmailAddress?: string;
    public DisplayName?: string;
    public OrganizationId?: string;

    
}

export class UserLocatorType {
    
}

export class ArrayOfItemsType {
    
}

export class ArrayOfCalendarItemsType {
    
}

export class InstantSearchPayloadType {
    public SearchSessionId: string;
    public SearchRequestId: any;
    public ResultType: any;
    public Items?: any;
    public Conversations?: any;
    public CalendarItems?: any;

    
}

export class ArrayOfStringsType {
    public String?: string[];

    
}

export class ArrayOfRealItemsType {
    
}

export class NonEmptyArrayOfAllItemsType {
    
}

export class AcceptItemType {
    
}

export class TentativelyAcceptItemType {
    
}

export class DeclineItemType {
    
}

export class ProposeNewTimeType {
    
}

export class RemoveItemType {
    
}

export class AddItemToMyCalendarType {
    
}

export class PostReplyItemBaseType {
    
}

export class MimeContentType {
    
}

export class MimeContentUTF8Type {
    
}

export class ArrayOfSharingMessageActionType {
    public SharingMessageAction?: any;

    
}

export class SharingMessageActionType {
    public Importance?: any;
    public ActionType?: any;
    public Action?: any;

    
}

export class BasePagingType {
    public MaxEntriesReturned: number;

    
}

export class IndexedPageViewType {
    
}

export class FractionalPageViewType {
    
}

export class CalendarViewType {
    
}

export class ContactsViewType {
    
}

export class ResolutionType {
    public Mailbox: any;
    public Contact?: any;

    
}

export class ArrayOfResolutionType {
    public Resolution?: any;

    
}

export class ArrayOfDLExpansionType {
    public Mailbox?: any;

    
}

export class NonEmptyArrayOfTimeZoneIdType {
    public Id: string[];

    
}

export class ArrayOfTimeZoneDefinitionType {
    public TimeZoneDefinition: any;

    
}

export class OnlineMeetingSettingsType {
    public LobbyBypass: any;
    public AccessLevel: any;
    public Presenters: any;

    
}

export class AttendeeType {
    public Mailbox: any;
    public ResponseType?: any;
    public LastResponseTime?: Date;
    public ProposedStart?: Date;
    public ProposedEnd?: Date;

    
}

export class NonEmptyArrayOfAttendeesType {
    public Attendee: any;

    
}

export class OccurrenceItemIdType {
    
}

export class RecurringMasterItemIdType {
    
}

export class ArrayOfOccurrenceRangesType {
    public Range: any;

    
}

export class OccurrencesRangeType {
    public Start: Date;
    public End: Date;
    public Count: number;
    public CompareOriginalStartTime: boolean;

    
}

export class RecurrencePatternBaseType {
    
}

export class RegeneratingPatternBaseType {
    
}

export class DailyRegeneratingPatternType {
    
}

export class WeeklyRegeneratingPatternType {
    
}

export class MonthlyRegeneratingPatternType {
    
}

export class YearlyRegeneratingPatternType {
    
}

export class DailyRecurrencePatternType {
    
}

export class EnhancedLocationType {
    public DisplayName: string;
    public Annotation?: string;
    public PostalAddress?: any;

    
}

export class TimeChangeType {
    public Offset: any;
    public Time: any;

    
}

export class TimeZoneType {
    public BaseOffset: any;

    
}

export class TimeZoneContextType {
    public TimeZoneDefinition: any;

    
}

export class TransitionTargetType {
    
}

export class TransitionType {
    public To: any;

    
}

export class TimeZoneDefinitionType {
    public Periods: any;
    public TransitionsGroups?: any;
    public Transitions?: any;

    
}

export class NonEmptyArrayOfPeriodsType {
    public Period: any;

    
}

export class PeriodType {
    public Bias: any;
    public Name: string;
    public Id: string;

    
}

export class ArrayOfTransitionsGroupsType {
    public TransitionsGroup: any;

    
}

export class ArrayOfTransitionsType {
    public Transition?: any;

    
}

export class RecurrenceRangeBaseType {
    public StartDate: Date;

    
}

export class NoEndRecurrenceRangeType {
    
}

export class OccurrenceInfoType {
    public ItemId: any;
    public Start: Date;
    public End: Date;
    public OriginalStart: Date;

    
}

export class NonEmptyArrayOfOccurrenceInfoType {
    public Occurrence: any;

    
}

export class DeletedOccurrenceInfoType {
    public Start: Date;

    
}

export class NonEmptyArrayOfDeletedOccurrencesType {
    public DeletedOccurrence: any;

    
}

export class ChangeHighlightsType {
    public HasLocationChanged?: boolean;
    public Location?: string;
    public HasStartTimeChanged?: boolean;
    public Start?: Date;
    public HasEndTimeChanged?: boolean;
    public End?: Date;

    
}

export class CompleteNameType {
    public Title?: string;
    public FirstName?: string;
    public MiddleName?: string;
    public LastName?: string;
    public Suffix?: string;
    public Initials?: string;
    public FullName?: string;
    public Nickname?: string;
    public YomiFirstName?: string;
    public YomiLastName?: string;

    
}

export class ImAddressDictionaryEntryType {
    
}

export class ContactUrlDictionaryEntryType {
    public Type: any;
    public Name?: string;
    public Address?: string;

    
}

export class AbchEmailAddressDictionaryEntryType {
    public Type: any;
    public Address: string;
    public IsMessengerEnabled?: boolean;
    public Capabilities?: any;

    
}

export class EmailAddressDictionaryEntryType {
    
}

export class PhoneNumberDictionaryEntryType {
    
}

export class PhysicalAddressDictionaryEntryType {
    public Street?: string;
    public City?: string;
    public State?: string;
    public CountryOrRegion?: string;
    public PostalCode?: string;

    
}

export class ContactUrlDictionaryType {
    public Url: any;

    
}

export class AbchEmailAddressDictionaryType {
    public Email: any;

    
}

export class ImAddressDictionaryType {
    public Entry: any;

    
}

export class EmailAddressDictionaryType {
    public Entry: any;

    
}

export class PhoneNumberDictionaryType {
    public Entry: any;

    
}

export class PhysicalAddressDictionaryType {
    public Entry: any;

    
}

export class MembersListType {
    public Member?: any;

    
}

export class MemberType {
    public Mailbox?: any;
    public Status?: any;

    
}

export class ArrayOfAbchPersonContactHandlesType {
    public ContactHandle?: any;

    
}

export class AbchPersonContactHandle {
    public SourceId: string;
    public ObjectId: string;
    public AccountName?: string;

    
}

export class ArrayOfGuidType {
    public Guid?: any;

    
}

export class ArrayOfBinaryType {
    public Base64Binary?: any;

    
}

export class SearchParametersType {
    public Restriction: any;
    public BaseFolderIds: any;

    
}

export class ConstantValueType {
    public Value: string;

    
}

export class SearchExpressionType {
    
}

export class AggregateOnType {
    public Aggregate: any;

    
}

export class BaseGroupByType {
    public Order: any;

    
}

export class ArrayOfGroupIdType {
    
}

export class GroupedItemsType {
    public GroupIndex: string;
    public Items: any;
    public GroupSummary?: any;

    
}

export class ArrayOfGroupedItemsType {
    
}

export class GroupSummaryType {
    public GroupCount: number;
    public UnreadCount: number;
    public InstanceKey: any;
    public GroupByValue: string;

    
}

export class FieldURIOrConstantType {
    
}

export class ExcludesValueType {
    public Value: any;

    
}

export class IsEqualToType {
    
}

export class IsNotEqualToType {
    
}

export class IsGreaterThanType {
    
}

export class IsGreaterThanOrEqualToType {
    
}

export class IsLessThanType {
    
}

export class IsLessThanOrEqualToType {
    
}

export class AndType {
    
}

export class OrType {
    
}

export class RestrictionType {
    public SearchExpression: any;

    
}

export class FieldOrderType {
    public Path: any;

    
}

export class NonEmptyArrayOfFieldOrdersType {
    public FieldOrder: any;

    
}

export class NonEmptyArrayOfFolderNamesType {
    public FolderName: string[];

    
}

export class BaseNotificationEventType {
    public Watermark?: any;

    
}

export class NotificationType {
    public SubscriptionId: any;
    public PreviousWatermark?: any;
    public MoreEvents?: boolean;

    
}

export class NonEmptyArrayOfNotificationEventTypesType {
    
}

export class BaseSubscriptionRequestType {
    public FolderIds?: any;
    public EventTypes: any;
    public Watermark?: any;

    
}

export class StreamingSubscriptionRequestType {
    public FolderIds?: any;
    public EventTypes: any;

    
}

export class NonEmptyArrayOfSubscriptionIdsType {
    public SubscriptionId: any;

    
}

export class NonEmptyArrayOfNotificationsType {
    public Notification?: any;

    
}

export class SyncFolderItemsDeleteType {
    public ItemId: any;

    
}

export class SyncFolderItemsReadFlagType {
    public ItemId: any;
    public IsRead: boolean;

    
}

export class SyncFolderItemsChangesType {
    
}

export class SyncFolderHierarchyCreateOrUpdateType {
    
}

export class SyncFolderHierarchyDeleteType {
    public FolderId: any;

    
}

export class SyncFolderHierarchyChangesType {
    
}

export class RequestTypeHeader {
    public RequestType: any;

    
}

export class CalendarEventDetails {
    public ID?: string;
    public Subject?: string;
    public Location?: string;
    public IsMeeting: boolean;
    public IsRecurring: boolean;
    public IsException: boolean;
    public IsReminderSet: boolean;
    public IsPrivate: boolean;

    
}

export class CalendarEvent {
    public StartTime: Date;
    public EndTime: Date;
    public BusyType: any;
    public CalendarEventDetails?: CalendarEventDetails;

    
}

export class ArrayOfCalendarEvent {
    public CalendarEvent?: CalendarEvent[];

    
}

export class Duration {
    public StartTime: Date;
    public EndTime: Date;

    
}

export class EmailAddress {
    public Name?: string;
    public Address: string;
    public RoutingType?: string;

    
}

export class FreeBusyViewOptionsType {
    public TimeWindow: any;
    public MergedFreeBusyIntervalInMinutes?: number;
    public RequestedView?: any;

    
}

export class WorkingPeriod {
    public DayOfWeek: any;
    public StartTimeInMinutes: number;
    public EndTimeInMinutes: number;

    
}

export class ArrayOfWorkingPeriod {
    public WorkingPeriod?: any;

    
}

export class SerializableTimeZoneTime {
    public Bias: number;
    public Time: string;
    public DayOrder: any;
    public Month: any;
    public DayOfWeek: any;
    public Year?: string;

    
}

export class SerializableTimeZone {
    public Bias: number;
    public StandardTime: any;
    public DaylightTime: any;

    
}

export class WorkingHours {
    public TimeZone: any;
    public WorkingPeriodArray: any;

    
}

export class FreeBusyView {
    public FreeBusyViewType: string;
    public MergedFreeBusy?: string;
    public CalendarEventArray?: ArrayOfCalendarEvent;
    public WorkingHours?: any;

    
}

export class MailboxData {
    public Email: any;
    public AttendeeType: any;
    public ExcludeConflicts?: boolean;

    
}

export class ArrayOfMailboxData {
    public MailboxData?: any;

    
}

export class SuggestionsViewOptionsType {
    public GoodThreshold?: number;
    public MaximumResultsByDay?: number;
    public MaximumNonWorkHourResultsByDay?: number;
    public MeetingDurationInMinutes?: number;
    public MinimumSuggestionQuality?: any;
    public DetailedSuggestionsWindow: any;
    public CurrentMeetingTime?: Date;
    public GlobalObjectId?: string;

    
}

export class ArrayOfAttendeeConflictData {
    
}

export class AttendeeConflictData {
    
}

export class UnknownAttendeeConflictData {
    
}

export class TooBigGroupAttendeeConflictData {
    
}

export class Suggestion {
    public MeetingTime: Date;
    public IsWorkTime: boolean;
    public SuggestionQuality: any;
    public AttendeeConflictDataArray?: any;

    
}

export class ArrayOfSuggestion {
    public Suggestion?: any;

    
}

export class SuggestionDayResult {
    public Date: Date;
    public DayQuality: any;
    public SuggestionArray?: any;

    
}

export class ArrayOfSuggestionDayResult {
    public SuggestionDayResult?: any;

    
}

export class ReplyBody {
    public Message?: string;

    
}

export class ArrayOfEventIDType {
    
}

export class UserOofSettings {
    public OofState: any;
    public ExternalAudience: any;
    public Duration?: Duration;
    public InternalReply?: ReplyBody;
    public ExternalReply?: ReplyBody;
    public DeclineMeetingReply?: ReplyBody;
    public DeclineEventsForScheduledOOF?: boolean;
    public DeclineAllEventsForScheduledOOF?: boolean;
    public CreateOOFEvent?: boolean;
    public OOFEventSubject?: string;
    public AutoDeclineFutureRequestsWhenOOF?: boolean;
    public OOFEventID?: string;
    public EventsToDeleteIDs?: any;

    
}

export class Value {
    
}

export class ApprovalRequestDataType {
    public IsUndecidedApprovalRequest?: boolean;
    public ApprovalDecision?: number;
    public ApprovalDecisionMaker?: string;
    public ApprovalDecisionTime?: Date;

    
}

export class ReminderMessageDataType {
    public ReminderText?: string;
    public Location?: string;
    public StartTime?: Date;
    public EndTime?: Date;
    public AssociatedCalendarItemId?: any;

    
}

export class MessageSafetyType {
    public MessageSafetyLevel?: number;
    public MessageSafetyReason?: number;
    public Info?: string;

    
}

export class VotingOptionDataType {
    public DisplayName?: string;
    public SendPrompt?: any;

    
}

export class ArrayOfVotingOptionDataType {
    public VotingOptionData?: any;

    
}

export class VotingInformationType {
    public UserOptions?: any;
    public VotingResponse?: string;

    
}

export class AlternateIdBaseType {
    public Format: any;

    
}

export class AlternateIdType {
    
}

export class AlternatePublicFolderIdType {
    
}

export class AlternatePublicFolderItemIdType {
    
}

export class NonEmptyArrayOfAlternateIdsType {
    
}

export class UserIdType {
    public SID?: string;
    public PrimarySmtpAddress?: string;
    public DisplayName?: string;
    public DistinguishedUser?: any;
    public ExternalUserIdentity?: string;

    
}

export class ArrayOfPermissionsType {
    
}

export class ArrayOfCalendarPermissionsType {
    
}

export class ArrayOfUnknownEntriesType {
    
}

export class BasePermissionType {
    public UserId: any;
    public CanCreateItems?: boolean;
    public CanCreateSubFolders?: boolean;
    public IsFolderOwner?: boolean;
    public IsFolderVisible?: boolean;
    public IsFolderContact?: boolean;
    public EditItems?: any;
    public DeleteItems?: any;

    
}

export class PermissionSetType {
    public Permissions: any;
    public UnknownEntries?: any;

    
}

export class CalendarPermissionSetType {
    public CalendarPermissions: any;
    public UnknownEntries?: any;

    
}

export class EffectiveRightsType {
    public CreateAssociated: boolean;
    public CreateContents: boolean;
    public CreateHierarchy: boolean;
    public Delete: boolean;
    public Modify: boolean;
    public Read: boolean;
    public ViewPrivateItems?: boolean;

    
}

export class ArrayOfDelegateUserType {
    public DelegateUser: any;

    
}

export class ArrayOfUserIdType {
    public UserId: any;

    
}

export class DelegateUserType {
    public UserId: any;
    public DelegatePermissions?: any;
    public ReceiveCopiesOfMeetingMessages?: boolean;
    public ViewPrivateItems?: boolean;

    
}

export class DelegatePermissionsType {
    public CalendarFolderPermissionLevel?: any;
    public TasksFolderPermissionLevel?: any;
    public InboxFolderPermissionLevel?: any;
    public ContactsFolderPermissionLevel?: any;
    public NotesFolderPermissionLevel?: any;
    public JournalFolderPermissionLevel?: any;

    
}

export class ConflictResultsType {
    public Count: number;

    
}

export class OutOfOfficeMailTip {
    public ReplyBody: any;
    public Duration?: any;

    
}

export class SmtpDomainList {
    public Domain?: any;

    
}

export class SmtpDomain {
    public Name: string;
    public IncludeSubdomains: boolean;

    
}

export class MailTips {
    public RecipientAddress: any;
    public PendingMailTips: any;
    public OutOfOffice?: any;
    public MailboxFull?: boolean;
    public CustomMailTip?: string;
    public TotalMemberCount?: number;
    public ExternalMemberCount?: number;
    public MaxMessageSize?: number;
    public DeliveryRestricted?: boolean;
    public IsModerated?: boolean;
    public InvalidRecipient?: boolean;
    public Scope?: number;
    public RecipientSuggestions?: any;
    public PreferAccessibleContent?: boolean;

    
}

export class ArrayOfRecipientSuggestionsType {
    public RecipientSuggestion?: any;

    
}

export class RecipientSuggestionType {
    public DisplayName: string;
    public EmailAddress: string;

    
}

export class ServiceConfiguration {
    
}

export class ConfigurationRequestDetailsType {
    
}

export class ArrayOfSmtpAddressType {
    
}

export class ArrayOfEncryptedSharedFolderDataType {
    
}

export class EncryptedSharedFolderDataType {
    public Token: any;
    public Data: any;

    
}

export class EncryptedDataContainerType {
    
}

export class ArrayOfInvalidRecipientsType {
    
}

export class InvalidRecipientType {
    public SmtpAddress: any;
    public ResponseCode: any;
    public MessageText?: string;

    
}

export class AcceptSharingInvitationType {
    
}

export class PhoneCallIdType {
    public Id: string;

    
}

export class PhoneCallInformationType {
    public PhoneCallState: any;
    public ConnectionFailureCause: any;
    public SIPResponseText?: string;
    public SIPResponseCode?: number;

    
}

export class UserConfigurationNameType {
    
}

export class UserConfigurationDictionaryObjectType {
    public Type: any;
    public Value: string[];

    
}

export class UserConfigurationDictionaryEntryType {
    public DictionaryKey: any;
    public DictionaryValue: any;

    
}

export class UserConfigurationDictionaryType {
    public DictionaryEntry?: any;

    
}

export class UserConfigurationType {
    public UserConfigurationName: any;
    public ItemId?: any;
    public Dictionary?: any;
    public XmlData?: any;
    public BinaryData?: any;

    
}

export class ArrayOfProtectionRulesType {
    public Rule?: any;

    
}

export class ProtectionRuleType {
    public Condition: any;
    public Action: any;

    
}

export class ProtectionRuleConditionType {
    
}

export class ProtectionRuleAndType {
    
}

export class ProtectionRuleRecipientIsType {
    public Value: any;

    
}

export class ProtectionRuleSenderDepartmentsType {
    public Value: any;

    
}

export class ProtectionRuleActionType {
    public Argument?: any;

    
}

export class ProtectionRuleArgumentType {
    public Value: any;

    
}

export class PolicyNudgeRulesServiceConfiguration {
    
}

export class ArrayOfFolderIdType {
    
}

export class FindMessageTrackingSearchResultType {
    
}

export class ArrayOfFindMessageTrackingSearchResultType {
    
}

export class RecipientTrackingEventType {
    
}

export class MessageTrackingReportType {
    
}

export class TrackingPropertyType {
    public Name: string;
    public Value?: string;

    
}

export class ArrayOfTrackingPropertiesType {
    
}

export class ArrayOfArraysOfTrackingPropertiesType {
    
}

export class ArrayOfRecipientTrackingEventType {
    
}

export class RulePredicateSizeRangeType {
    public MinimumSize?: number;
    public MaximumSize?: number;

    
}

export class RulePredicateDateRangeType {
    public StartDateTime?: Date;
    public EndDateTime?: Date;

    
}

export class RulePredicatesType {
    public Categories?: any;
    public ContainsBodyStrings?: any;
    public ContainsHeaderStrings?: any;
    public ContainsRecipientStrings?: any;
    public ContainsSenderStrings?: any;
    public ContainsSubjectOrBodyStrings?: any;
    public ContainsSubjectStrings?: any;
    public FlaggedForAction?: any;
    public FromAddresses?: any;
    public FromConnectedAccounts?: any;
    public HasAttachments?: boolean;
    public Importance?: any;
    public IsApprovalRequest?: boolean;
    public IsAutomaticForward?: boolean;
    public IsAutomaticReply?: boolean;
    public IsEncrypted?: boolean;
    public IsMeetingRequest?: boolean;
    public IsMeetingResponse?: boolean;
    public IsNDR?: boolean;
    public IsPermissionControlled?: boolean;
    public IsReadReceipt?: boolean;
    public IsSigned?: boolean;
    public IsVoicemail?: boolean;
    public ItemClasses?: any;
    public MessageClassifications?: any;
    public NotSentToMe?: boolean;
    public SentCcMe?: boolean;
    public SentOnlyToMe?: boolean;
    public SentToAddresses?: any;
    public SentToMe?: boolean;
    public SentToOrCcMe?: boolean;
    public Sensitivity?: any;
    public WithinDateRange?: any;
    public WithinSizeRange?: any;

    
}

export class RuleActionsType {
    public AssignCategories?: any;
    public CopyToFolder?: any;
    public Delete?: boolean;
    public ForwardAsAttachmentToRecipients?: any;
    public ForwardToRecipients?: any;
    public MarkImportance?: any;
    public MarkAsRead?: boolean;
    public MoveToFolder?: any;
    public PermanentDelete?: boolean;
    public RedirectToRecipients?: any;
    public SendSMSAlertToRecipients?: any;
    public ServerReplyWithMessage?: any;
    public StopProcessingRules?: boolean;

    
}

export class RuleType {
    public RuleId?: string;
    public DisplayName: string;
    public Priority: number;
    public IsEnabled: boolean;
    public IsNotSupported?: boolean;
    public IsInError?: boolean;
    public Conditions?: any;
    public Exceptions?: any;
    public Actions?: any;

    
}

export class ArrayOfRulesType {
    public Rule?: RuleType;
}

export class RuleValidationErrorType {
    public FieldURI: any;
    public ErrorCode: any;
    public ErrorMessage: string;
    public FieldValue: string;

    
}

export class ArrayOfRuleValidationErrorsType {
    public Error: any;

    
}

export class RuleOperationType {
    
}

export class ArrayOfRuleOperationsType {
    
}

export class RuleOperationErrorType {
    public OperationIndex: number;
    public ValidationErrors: any;

    
}

export class ArrayOfRuleOperationErrorsType {
    public RuleOperationError: any;

    
}

export class ArrayOfSearchItemKindsType {
    public SearchItemKind: any;

    
}

export class UserMailboxType {
    public Id: string;
    public IsArchive: boolean;

    
}

export class ArrayOfUserMailboxesType {
    public UserMailbox: any;

    
}

export class SearchableMailboxType {
    public Guid: any;
    public PrimarySmtpAddress: string;
    public IsExternalMailbox: boolean;
    public ExternalEmailAddress: string;
    public DisplayName: string;
    public IsMembershipGroup: boolean;
    public ReferenceId: string;

    
}

export class ArrayOfSearchableMailboxesType {
    public SearchableMailbox?: any;

    
}

export class KeywordStatisticsSearchResultType {
    public Keyword: string;
    public ItemHits: number;
    public Size: any;

    
}

export class ArrayOfKeywordStatisticsSearchResultsType {
    public KeywordStat?: any;

    
}

export class MailboxStatisticsSearchResultType {
    public UserMailbox: any;
    public KeywordStatisticsSearchResult?: any;

    
}

export class ExtendedAttributeType {
    public Name: string;
    public Value: string;

    
}

export class ArrayOfExtendedAttributesType {
    public ExtendedAttribute?: any;

    
}

export class MailboxSearchScopeType {
    public Mailbox: string;
    public SearchScope: any;
    public ExtendedAttributes?: any;

    
}

export class NonEmptyArrayOfMailboxSearchScopesType {
    public MailboxSearchScope: any;

    
}

export class MailboxQueryType {
    public Query: string;
    public MailboxSearchScopes: any;

    
}

export class PreviewItemMailboxType {
    public MailboxId: string;
    public PrimarySmtpAddress: string;

    
}

export class NonEmptyArrayOfMailboxQueriesType {
    public MailboxQuery: any;

    
}

export class NonEmptyArrayOfExtendedFieldURIsType {
    
}

export class PreviewItemResponseShapeType {
    public BaseShape: any;
    public AdditionalProperties?: any;

    
}

export class SearchPreviewItemType {
    public Id: any;
    public Mailbox?: any;
    public ParentId?: any;
    public ItemClass?: any;
    public UniqueHash?: string;
    public SortValue?: string;
    public OwaLink?: string;
    public Sender?: string;
    public ToRecipients?: any;
    public CcRecipients?: any;
    public BccRecipients?: any;
    public CreatedTime?: Date;
    public ReceivedTime?: Date;
    public SentTime?: Date;
    public Subject?: string;
    public Size?: any;
    public Preview?: string;
    public Importance?: any;
    public Read?: boolean;
    public HasAttachment?: boolean;
    public ExtendedProperties?: any;

    
}

export class ArrayOfSearchPreviewItemsType {
    public SearchPreviewItem?: any;

    
}

export class FailedSearchMailboxType {
    public Mailbox: string;
    public ErrorCode: number;
    public ErrorMessage: string;
    public IsArchive: boolean;

    
}

export class ArrayOfFailedSearchMailboxesType {
    public FailedMailbox?: any;

    
}

export class SearchMailboxesResultType {
    public SearchQueries: any;
    public ResultType: any;
    public ItemCount: any;
    public Size: any;
    public PageItemCount: number;
    public PageItemSize: any;
    public KeywordStats?: any;
    public Items?: any;
    public FailedMailboxes?: any;
    public Refiners?: any;
    public MailboxStats?: any;

    
}

export class SearchRefinerItemType {
    public Name: string;
    public Value: string;
    public Count: any;
    public Token: string;

    
}

export class ArrayOfSearchRefinerItemsType {
    public Refiner?: any;

    
}

export class MailboxStatisticsItemType {
    public MailboxId: string;
    public DisplayName: string;
    public ItemCount: any;
    public Size: any;

    
}

export class ArrayOfMailboxStatisticsItemsType {
    public MailboxStat?: any;

    
}

export class MailboxHoldStatusType {
    public Mailbox: string;
    public Status: any;
    public AdditionalInfo?: string;

    
}

export class ArrayOfMailboxHoldStatusType {
    public MailboxHoldStatus?: any;

    
}

export class MailboxHoldResultType {
    public HoldId: string;
    public Query?: string;
    public MailboxHoldStatuses: any;

    
}

export class NonEmptyArrayOfLegacyDNsType {
    public LegacyDN: string[];

    
}

export class NonIndexableItemStatisticType {
    public Mailbox: string;
    public ItemCount: any;
    public ErrorMessage?: string;

    
}

export class ArrayOfNonIndexableItemStatisticsType {
    public NonIndexableItemStatistic?: any;

    
}

export class NonIndexableItemDetailType {
    public ItemId: any;
    public ErrorCode: any;
    public ErrorDescription: string;
    public IsPartiallyIndexed: boolean;
    public IsPermanentFailure: boolean;
    public SortValue: string;
    public AttemptCount: number;
    public LastAttemptTime?: Date;
    public AdditionalInfo?: string;

    
}

export class ArrayOfNonIndexableItemDetailsType {
    public NonIndexableItemDetail?: any;

    
}

export class NonIndexableItemDetailResultType {
    public Items?: any;
    public FailedMailboxes?: any;

    
}

export class DiscoverySearchConfigurationType {
    public SearchId: string;
    public SearchQuery: string;
    public SearchableMailboxes?: any;
    public InPlaceHoldIdentity?: string;
    public ManagedByOrganization?: string;
    public Language?: string;

    
}

export class ArrayOfDiscoverySearchConfigurationType {
    public DiscoverySearchConfiguration?: any;

    
}

export class RetentionTagType {
    
}

export class RetentionPolicyTagType {
    public DisplayName: string;
    public RetentionId: any;
    public RetentionPeriod: number;
    public Type: any;
    public RetentionAction: any;
    public Description?: string;
    public IsVisible: boolean;
    public OptedInto: boolean;
    public IsArchive: boolean;
    public ParentLabelIdentity?: string;
    public Priority?: number;

    
}

export class ArrayOfRetentionPolicyTagsType {
    public RetentionPolicyTag?: any;

    
}

export class ClientExtensionType {
    public SpecificUsers?: any;
    public Manifest?: any;

    
}

export class ImGroupType {
    public DisplayName: any;
    public GroupType: any;
    public ExchangeStoreId?: any;
    public MemberCorrelationKey?: any;
    public ExtendedProperties?: any;
    public SmtpAddress?: string;

    
}

export class ArrayOfImGroupType {
    
}

export class ImItemListType {
    public Groups?: any;
    public Personas?: any;

    
}

export class NonEmptyArrayOfExtendedFieldURIs {
    
}

export class NonEmptyStateDefinitionType {
    
}

export class BaseCalendarItemStateDefinitionType {
    
}

export class DeleteFromFolderStateDefinitionType {
    
}

export class MeetingSpaceType {
    public Id?: string;
    public ChangeKey?: string;
    public Type?: any;
    public Version?: string;
    public JoinUrl?: string;
    public DateTimeCreated?: string;
    public DateTimeModified?: string;
    public ExpiryTime?: string;
    public Meadata?: string;
    public Tag?: string;

    
}

export class ParticipantActivity {
    public Id: any;
    public CreatedBy: string;
    public StartTime: string;
    public EndTime: string;
    public ClientVersion: string;
    public Role: any;
    public MediaType: any;
    public MediaDetails?: string;

    
}

export class NonEmptyArrayOfParticipantActivities {
    public ParticipantActivity: any;

    
}

export class ContentActivity {
    public Id: any;
    public SharedBy: string;
    public ContentLocation: string;
    public StartTime: string;
    public EndTime: string;
    public Type: any;
    public MediaType: any;
    public Acl: any;

    
}

export class NonEmptyArrayOfContentActivities {
    public ContentActivity: any;

    
}

export class MeetingInstanceType {
    public Id?: string;
    public ChangeKey?: string;
    public Version?: string;
    public JoinUrl?: string;
    public DateTimeCreated?: string;
    public DateTimeModified?: string;
    public Meadata?: string;
    public Tag?: string;
    public ParentGoid?: string;
    public ParticipantActivities?: any;
    public ContentActivities?: any;

    
}

export class SearchFolderScopeType {
    
}

export class PrimaryMailboxSearchScopeType {
    public FolderScope?: any;
    public IsDeepTraversal?: boolean;

    
}

export class LargeArchiveSearchScopeType {
    public ArchiveTypes: any;

    
}

export class GroupSearchScopeType {
    public GroupTypes: any;

    
}

export class SingleLargeArchiveSearchScopeType {
    public MailboxGuid?: any;
    public FolderScope: any;
    public IsDeepTraversal: boolean;

    
}

export class OneDriveSearchScopeType {
    public OneDriveView: any;

    
}

export class DelveSearchScopeType {
    public DelveView: any;

    
}

export class CustomSearchScopeType {
    public MailboxGuid: any;
    public FolderScope: any;
    public IsDeepTraversal: boolean;

    
}

export class ArrayOfSearchScopeType {
    public PrimaryMailboxSearchScope?: any;
    public LargeArchiveSearchScope?: any;
    public GroupSearchScope?: any;
    public CustomSearchScope?: any;
    public OneDriveSearchScope?: any;
    public SingleLargeArchiveSearchScope?: any;
    public DelveSearchScope?: any;

    
}

export class DynamicRefinerQueryType {
    public RefinerQuery: string;
    public TDRefinerId: number;

    
}

export class ExtendedKeywordDefinitionType {
    public Keyword: string;
    public Properties: any;

    
}

export class SuggestionType {
    public SuggestedQuery: string;
    public DisplayText: string;
    public SuggestionType: any;
    public Trigger?: string;
    public TDSuggestionId: number;
    public IsDeletable: boolean;

    
}

export class SearchSuggestionsType {
    public TDSuggestionsBatchId: any;
    public TDSuggestionsInstanceId: any;
    public Suggestions?: any;
    public DiagnosticsData?: any;

    
}

export class DeleteSearchSuggestionResponseType {
    public Success: boolean;
    public StatusMessage?: string;
    public DiagnosticsData?: any;

    
}

export class SearchDiagnosticsStepType {
    public StartTime?: string;
    public StepTime?: any;
    public StepType?: string;
    public AdditionalEntries?: string[];

    
}

export class SearchRefinerType {
    public RefinerType: any;
    public Refiner: any;
    public ResultCount?: any;

    
}

export class SearchDiagnosticsType {
    
}

export class MailboxInformationType {
    
}

export class ExecuteSearchQueryIdType {
    public Id: any;

    
}

export class SearchResultsType {
    public Items?: any;
    public Conversations?: any;
    public People?: any;
    public MoreResultsAvailable: boolean;
    public RefinerTelemetryBatchId: number;
    public SearchRefiners?: any;
    public DiagnosticsData?: any;
    public SearchResultsCount?: number;
    public TotalResultsCount?: number;
    public SearchTerms?: any;
    public QueryId?: any;
    public MailboxesInformation?: any;

    
}

export class ArrayOfWorkHours {
    public WorkHours?: any;

    
}

export class WorkHoursType {
    public WorkDay?: any;
    public TimeSlots?: any;

    
}

export class ArrayOfWorkTimeSlot {
    public TimeSlot?: any;

    
}

export class WorkTimeSlot {
    public StartTimeInMinutes: number;
    public EndTimeInMinutes: number;

    
}

export class AnalyzedQuery {
    public QueryLanguage: string;
    public SearchRestrictions: any;

    
}

export class ContextPropertyType {
    public Key: string;
    public Value: string;

    
}

export class ArrayOfContextProperty {
    public ContextProperty: any;

    
}

export class ArrayOfEntityFeedbackEntry {
    public EntityFeedbackEntry: any;

    
}

export class EntityFeedbackEntryType {
    public ClientEventTimeUtc: Date;
    public ClientEventTimeLocal: Date;
    public ClientSessionId: any;
    public ClientVersion: string;
    public ClientId: any;
    public EntrySequenceNumber: number;
    public TransactionId?: string;
    public EventType: string;
    public TargetEntityList?: string;
    public EntityAddSource?: any;
    public JsonPropertyBag?: string;

    
}

export class ArrayOfInboxReminderType {
    public InboxReminder?: any;

    
}

export class InboxReminderType {
    public Id?: any;
    public ReminderOffset?: number;
    public Message?: string;
    public IsOrganizerReminder?: boolean;
    public OccurrenceChange?: any;
    public SendOption?: any;

    
}

export class InsightContextItem {
    public Name?: string;
    public Val?: string;

    
}

export class ArrayOfInsightContextItem {
    public Context?: any;

    
}

export class InsightItemType {
    public ItemId: any;
    public InsightId: any;
    public Type?: string;
    public StartTimeUtc?: Date;
    public EndTimeUtc?: Date;
    public Status?: any;
    public Version?: string;
    public Context?: any;
    public Text?: string;
    public ApplicationsIds?: any;
    public SuggestedActions?: string;
    public AppContexts?: any;

    
}

export class ArrayOfInsightItemType {
    public Insight?: any;

    
}

export class ResponseMessageInfoType {
    public MessageText?: string;
    public ResponseCode?: string;

    
}

export class BaseAvailabilityCalendarViewType {
    public FreeBusyViewType: any;

    
}

export class ArrayOfPeopleQuerySource {
    public Source: string[];

    
}

export class CalendarActivityDataType {
    public ActivityAction: string;
    public ClientId: string;
    public CasRequestId: any;
    public IndexSelected: number;

    
}

export class MentionActionType {
    public Id: string;
    public CreatedBy: any;
    public CreatedDateTime?: string;
    public ServerCreatedDateTime?: string;
    public DeepLink?: string;
    public Application?: string;
    public Mentioned: any;
    public MentionText?: string;
    public ClientReference?: string;

    
}

export class NonEmptyArrayOfMentionActionsType {
    public MentionAction: any;

    
}

export class AppliedHashtagType {
    public Id: string;
    public CreatedBy: any;
    public CreatedDateTime?: string;
    public ServerCreatedDateTime?: string;
    public DeepLink?: string;
    public Application?: string;
    public Tag: string;
    public IsAutoTagged: boolean;
    public IsInlined: boolean;

    
}

export class AppliedHashtagsPreviewType {
    public Hashtags: any;

    
}

export class NonEmptyArrayOfAppliedHashtagType {
    public AppliedHashtag: any;

    
}

export class LikeType {
    public Id: string;
    public CreatedBy: any;
    public CreatedDateTime?: string;
    public ServerCreatedDateTime?: string;
    public DeepLink?: string;
    public Application?: string;

    
}

export class LikesPreviewType {
    public LikeCount: number;

    
}

export class MentionsPreviewType {
    public IsMentioned: boolean;

    
}

export class NonEmptyArrayOfLikeType {
    public Like: any;

    
}

export class AttendeeAvailability {
    public EmailAddress: string;
    public Availability: any;

    
}

export class ArrayOfMeetingLocation {
    public MeetingLocation?: any;

    
}

export class ArrayOfAttendeeAvailability {
    public AttendeeAvailability?: any;

    
}

export class MeetingTimeCandidate {
    public MeetingTimeslot: any;
    public Confidence: number;
    public Score: number;
    public OrganizerAvailability: any;
    public AttendeeAvailabilities: any;
    public Locations: any;
    public SuggestionHint: string;

    
}

export class ArrayOfMeetingTimeCandidate {
    public MeetingTimeCandidate: any;

    
}

export class MeetingTimeCandidatesConstraintItem {
    public Email?: string;

    
}

export class ArrayOfLocationConstraintItems {
    public LocationItem?: any;

    
}

export class ArrayOfAttendeeConstraintItems {
    public AttendeeItem?: any;

    
}

export class ArrayOfTimeSlot {
    public TimeSlot?: any;

    
}

export class FindMeetingTimesAttendeeConstraints {
    public AttendeeEntries?: any;

    
}

export class FindMeetingTimesLocationConstraints {
    public LocationEntries?: any;
    public IsRequired?: boolean;
    public SuggestLocation?: boolean;

    
}

export class FindMeetingTimesSearchConstraints {
    public SearchWindows?: any;
    public MeetingDurationInMinutes?: number;
    public ActivityDomain?: any;

    
}

export class FindMeetingTimesConstraints {
    public MaxCandidates?: number;
    public IsOrganizerOptional?: boolean;
    public ReturnSuggestionHints?: boolean;
    public AppName?: string;
    public AppScenario?: string;
    public MinimumAttendeePercentage?: number;

    
}

export class OfficeClientType {
    public Code: any;
    public Version: any;

    
}

export class ArrayOfAppsType {
    public App?: any;
    public Metadata?: any;

    
}

export class AppType {
    public Metadata?: any;
    public Manifest: any;

    
}

export class Metadata {
    public CustomApps: string;
    public GenericInfo?: string;

    
}

export class AppMetadata {
    public EndNodeUrl?: string;
    public AppStatus?: string;
    public ActionUrl?: string;
    public ProductId?: string;
    public EnabledStatus?: boolean;
    public ConsentState?: string;
    public ExtensionType?: string;
    public MarketplaceAssetId?: string;
    public LicenseStatus?: string;
    public TrialExpirationDate?: Date;
    public InstalledBy?: string;
    public IsMandatory?: boolean;

    
}

export class EmailAddressType extends BaseEmailAddressType {
    public Name?: string;
    public EmailAddress?: any;
    public RoutingType?: any;
    public MailboxType?: any;
    public ItemId?: any;
    public OriginalDisplayName?: string;

}

export class EmailAddressExtendedType extends EmailAddressType {
    public ExternalObjectId?: string;
    public PrimaryEmailAddress?: any;

}

export class DeleteItemFieldType extends ItemChangeDescriptionType {
}

export class DeleteFolderFieldType extends FolderChangeDescriptionType {
}

export class AppendToFolderFieldType extends FolderChangeDescriptionType {
}

export class FileAttachmentType extends AttachmentType {
    public IsContactPhoto?: boolean;
    public Content?: any;

}

export class ReferenceAttachmentType extends AttachmentType {
    public AttachLongPathName?: string;
    public ProviderType?: string;
    public ProviderEndpointUrl?: string;
    public AttachmentThumbnailUrl?: string;
    public AttachmentPreviewUrl?: string;
    public PermissionType?: number;
    public OriginalPermissionType?: number;
    public AttachmentIsFolder?: boolean;

}

export class DistinguishedFolderIdType extends BaseFolderIdType {
    public Mailbox?: any;

}

export class FolderType extends BaseFolderType {
    public PermissionSet?: any;
    public UnreadCount?: number;

}

export class CalendarFolderType extends BaseFolderType {
    public SharingEffectiveRights?: any;
    public PermissionSet?: any;

}

export class ContactsFolderType extends BaseFolderType {
    public SharingEffectiveRights?: any;
    public PermissionSet?: any;
    public SourceId?: string;
    public AccountName?: string;

}

export class SearchFolderType extends FolderType {
    public SearchParameters?: any;

}

export class ResponseObjectCoreType  {
    public ReferenceItemId?: any;
}

export class SmartResponseType extends SmartResponseBaseType {
    public NewBodyContent?: any;

}

export class ReplyAllToItemType extends SmartResponseType {
    public IsSpecificMessageReply?: boolean;

}



export class AddressEntityType extends EntityType {
    public Address?: string;

}

export class EmailAddressEntityType extends EntityType {
    public EmailAddress?: string;

}

export class UrlEntityType extends EntityType {
    public Url?: string;

}

export class MeetingSuggestionType extends EntityType {
    public Attendees?: any;
    public Location?: string;
    public Subject?: string;
    public MeetingString?: string;
    public StartTime?: Date;
    public EndTime?: Date;
    public TimeStringBeginIndex?: number;
    public TimeStringLength?: number;
    public EntityId?: string;
    public ExtractionId?: string;

}

export class ContactType extends EntityType {
    public PersonName?: string;
    public BusinessName?: string;
    public PhoneNumbers?: any;
    public Urls?: any;
    public EmailAddresses?: EmailAddress;
    public Addresses?: any;
    public ContactString?: string;

}

export class PhoneEntityType extends EntityType {
    public OriginalPhoneString?: string;
    public PhoneString?: string;
    public Type?: string;

}

export class TaskSuggestionType extends EntityType {
    public TaskString?: string;
    public Assignees?: any;

}

export class StringInsightValue extends InsightValue {
    public Data?: string;

}

export class DelveDocument extends InsightValue {
    public Rank?: number;
    public Author?: string;
    public Created?: string;
    public LastModifiedTime?: string;
    public DefaultEncodingURL?: string;
    public FileType?: string;
    public Title?: string;
    public DocumentId?: string;
    public PreviewURL?: string;
    public LastEditor?: string;

}

export class ProfileInsightValue extends InsightValue {
    public FullName?: string;
    public FirstName?: string;
    public LastName?: string;
    public EmailAddress?: string;
    public Avatar?: string;
    public JoinedUtcTicks?: any;
    public ProfilePicture?: any;
    public Title?: string;

}

export class OutOfOfficeInsightValue extends InsightValue {
    public StartTime?: Date;
    public EndTime?: Date;
    public Message?: string;
    public Culture?: string;

}

export class JobInsightValue extends InsightValue {
    public Company?: string;
    public CompanyDescription?: string;
    public CompanyTicker?: string;
    public CompanyLogoUrl?: string;
    public CompanyWebsiteUrl?: string;
    public CompanyLinkedInUrl?: string;
    public Title?: string;
    public StartUtcTicks?: any;
    public EndUtcTicks?: any;

}

export class CompanyInsightValue extends InsightValue {
    public Name: string;
    public SatoriId?: string;
    public Description?: string;
    public DescriptionAttribution?: string;
    public ImageUrl?: string;
    public ImageUrlAttribution?: string;
    public YearFound?: string;
    public FinanceSymbol?: string;
    public WebsiteUrl?: string;

}

export class UserProfilePicture extends InsightValue {
    public Blob?: string;
    public PhotoSize?: string;
    public Url?: string;
    public ImageType?: string;

}

export class EducationInsightValue extends InsightValue {
    public Institute?: string;
    public Degree?: string;
    public StartUtcTicks?: any;
    public EndUtcTicks?: any;

}

export class SkillInsightValue extends InsightValue {
    public Name?: string;
    public Strength?: number;

}

export class MeetingInsightValue extends InsightValue {
    public Id?: string;
    public Subject?: string;
    public StartUtcTicks?: any;
    public EndUtcTicks?: any;
    public Location?: string;
    public Organizer?: any;
    public Attendees?: any;

}

export class EmailInsightValue extends InsightValue {
    public Id?: string;
    public ThreadId?: string;
    public Subject?: string;
    public LastEmailDateUtcTicks?: any;
    public Body?: string;
    public LastEmailSender?: any;
    public EmailsCount?: number;

}

export class SingleValueInsightContent extends InsightContent {
    public Item?: any;

}

export class MultiValueInsightContent extends InsightContent {
    public ItemList?: any;

}

export class ComputedInsightValue extends InsightValue {
    public Properties?: any;

}

export class GroupLocatorType extends MailboxLocatorType {
    public AccessType?: number;

}

export class MeetingRegistrationResponseObjectType extends WellKnownResponseObjectType {
    public ProposedStart?: Date;
    public ProposedEnd?: Date;

}

export class PostReplyItemType extends PostReplyItemBaseType {
    public NewBodyContent?: any;

}

export class MessageType extends ItemType {
    public Sender?: any;
    public ToRecipients?: any;
    public CcRecipients?: any;
    public BccRecipients?: any;
    public IsReadReceiptRequested?: boolean;
    public IsDeliveryReceiptRequested?: boolean;
    public ConversationIndex?: any;
    public ConversationTopic?: string;
    public From?: any;
    public InternetMessageId?: string;
    public IsRead?: boolean;
    public IsResponseRequested?: boolean;
    public References?: string;
    public ReplyTo?: any;
    public ReceivedBy?: any;
    public ReceivedRepresenting?: any;
    public ApprovalRequestData?: any;
    public VotingInformation?: any;
    public ReminderMessageData?: any;
    public MessageSafety?: any;
    public SenderSMTPAddress?: any;
    public MailboxGuids?: any;
    public PublishedCalendarItemIcs?: string;
    public PublishedCalendarItemName?: string;

}

export class TaskType extends ItemType {
    public ActualWork?: number;
    public AssignedTime?: Date;
    public BillingInformation?: string;
    public ChangeCount?: number;
    public Companies?: any;
    public CompleteDate?: Date;
    public Contacts?: any;
    public DelegationState?: any;
    public Delegator?: string;
    public DueDate?: Date;
    public IsAssignmentEditable?: number;
    public IsComplete?: boolean;
    public IsRecurring?: boolean;
    public IsTeamTask?: boolean;
    public Mileage?: string;
    public Owner?: string;
    public PercentComplete?: number;
    public Recurrence?: any;
    public StartDate?: Date;
    public Status?: any;
    public StatusDescription?: string;
    public TotalWork?: number;

}

export class PostItemType extends ItemType {
    public ConversationIndex?: any;
    public ConversationTopic?: string;
    public From?: any;
    public InternetMessageId?: string;
    public IsRead?: boolean;
    public PostedTime?: Date;
    public References?: string;
    public Sender?: any;

}

export class SharingMessageType extends MessageType {
    public SharingMessageAction?: any;
    public SharingMessageActions?: any;

}

export class SeekToConditionPageViewType extends BasePagingType {
    public Condition: any;

}

export class RecurringMasterItemIdRangesType extends ItemIdType {
    public Ranges?: any;

}

export class IntervalRecurrencePatternBaseType extends RecurrencePatternBaseType {
    public Interval: number;

}

export class RelativeYearlyRecurrencePatternType extends RecurrencePatternBaseType {
    public DaysOfWeek: any;
    public DayOfWeekIndex: any;
    public Month: any;

}

export class AbsoluteYearlyRecurrencePatternType extends RecurrencePatternBaseType {
    public DayOfMonth: number;
    public Month: any;

}

export class RelativeMonthlyRecurrencePatternType extends IntervalRecurrencePatternBaseType {
    public DaysOfWeek: any;
    public DayOfWeekIndex: any;

}

export class AbsoluteMonthlyRecurrencePatternType extends IntervalRecurrencePatternBaseType {
    public DayOfMonth: number;

}

export class WeeklyRecurrencePatternType extends IntervalRecurrencePatternBaseType {
    public DaysOfWeek: any;
    public FirstDayOfWeek?: any;

}

export class AbsoluteDateTransitionType extends TransitionType {
    public DateTime: Date;

}

export class RecurringTimeTransitionType extends TransitionType {
    public TimeOffset: any;
    public Month: number;

}

export class RecurringDateTransitionType extends RecurringTimeTransitionType {
    public Day: number;

}

export class RecurringDayTransitionType extends RecurringTimeTransitionType {
    public DayOfWeek: any;
    public Occurrence: number;

}

export class EndDateRecurrenceRangeType extends RecurrenceRangeBaseType {
    public EndDate: Date;

}

export class NumberedRecurrenceRangeType extends RecurrenceRangeBaseType {
    public NumberOfOccurrences: number;

}

export class CalendarItemType extends ItemType {
    public UID?: string;
    public RecurrenceId?: Date;
    public DateTimeStamp?: Date;
    public Start?: Date;
    public End?: Date;
    public OriginalStart?: Date;
    public IsAllDayEvent?: boolean;
    public LegacyFreeBusyStatus?: any;
    public Location?: string;
    public When?: string;
    public IsMeeting?: boolean;
    public IsCancelled?: boolean;
    public IsRecurring?: boolean;
    public MeetingRequestWasSent?: boolean;
    public IsResponseRequested?: boolean;
    public CalendarItemType?: any;
    public MyResponseType?: any;
    public Organizer?: any;
    public RequiredAttendees?: any;
    public OptionalAttendees?: any;
    public Resources?: any;
    public InboxReminders?: any;
    public ConflictingMeetingCount?: number;
    public AdjacentMeetingCount?: number;
    public ConflictingMeetings?: any;
    public AdjacentMeetings?: any;
    public Duration?: string;
    public TimeZone?: string;
    public AppointmentReplyTime?: Date;
    public AppointmentSequenceNumber?: number;
    public AppointmentState?: number;
    public Recurrence?: any;
    public FirstOccurrence?: any;
    public LastOccurrence?: any;
    public ModifiedOccurrences?: any;
    public DeletedOccurrences?: any;
    public MeetingTimeZone?: any;
    public StartTimeZone?: any;
    public EndTimeZone?: any;
    public ConferenceType?: number;
    public AllowNewTimeProposal?: boolean;
    public IsOnlineMeeting?: boolean;
    public MeetingWorkspaceUrl?: string;
    public NetShowUrl?: string;
    public EnhancedLocation?: any;
    public StartWallClock?: Date;
    public EndWallClock?: Date;
    public StartTimeZoneId?: string;
    public EndTimeZoneId?: string;
    public IntendedFreeBusyStatus?: any;
    public JoinOnlineMeetingUrl?: string;
    public OnlineMeetingSettings?: any;
    public IsOrganizer?: boolean;
    public CalendarActivityData?: any;
    public DoNotForwardMeeting?: boolean;

}

export class MeetingMessageType extends MessageType {
    public AssociatedCalendarItemId?: any;
    public IsDelegated?: boolean;
    public IsOutOfDate?: boolean;
    public HasBeenProcessed?: boolean;
    public ResponseType?: any;
    public UID?: string;
    public RecurrenceId?: Date;
    public DateTimeStamp?: Date;
    public IsOrganizer?: boolean;

}

export class MeetingRequestMessageType extends MeetingMessageType {
    public MeetingRequestType?: any;
    public IntendedFreeBusyStatus?: any;
    public Start?: Date;
    public End?: Date;
    public OriginalStart?: Date;
    public IsAllDayEvent?: boolean;
    public LegacyFreeBusyStatus?: any;
    public Location?: string;
    public When?: string;
    public IsMeeting?: boolean;
    public IsCancelled?: boolean;
    public IsRecurring?: boolean;
    public MeetingRequestWasSent?: boolean;
    public CalendarItemType?: any;
    public MyResponseType?: any;
    public Organizer?: any;
    public RequiredAttendees?: any;
    public OptionalAttendees?: any;
    public Resources?: any;
    public ConflictingMeetingCount?: number;
    public AdjacentMeetingCount?: number;
    public ConflictingMeetings?: any;
    public AdjacentMeetings?: any;
    public Duration?: string;
    public TimeZone?: string;
    public AppointmentReplyTime?: Date;
    public AppointmentSequenceNumber?: number;
    public AppointmentState?: number;
    public Recurrence?: any;
    public FirstOccurrence?: any;
    public LastOccurrence?: any;
    public ModifiedOccurrences?: any;
    public DeletedOccurrences?: any;
    public MeetingTimeZone?: any;
    public StartTimeZone?: any;
    public EndTimeZone?: any;
    public ConferenceType?: number;
    public AllowNewTimeProposal?: boolean;
    public IsOnlineMeeting?: boolean;
    public MeetingWorkspaceUrl?: string;
    public NetShowUrl?: string;
    public EnhancedLocation?: any;
    public ChangeHighlights?: any;
    public StartWallClock?: Date;
    public EndWallClock?: Date;
    public StartTimeZoneId?: string;
    public EndTimeZoneId?: string;
    public DoNotForwardMeeting?: boolean;

}

export class MeetingResponseMessageType extends MeetingMessageType {
    public Start?: Date;
    public End?: Date;
    public Location?: string;
    public Recurrence?: any;
    public CalendarItemType?: string;
    public ProposedStart?: Date;
    public ProposedEnd?: Date;
    public EnhancedLocation?: any;

}

export class MeetingCancellationMessageType extends MeetingMessageType {
    public Start?: Date;
    public End?: Date;
    public Location?: string;
    public Recurrence?: any;
    public CalendarItemType?: string;
    public EnhancedLocation?: any;
    public DoNotForwardMeeting?: boolean;

}

export class RoleMemberItemType extends ItemType {
    public DisplayName?: string;
    public Type?: any;
    public MemberId?: string;

}

export class NetworkItemType extends ItemType {
    public DomainId?: number;
    public DomainTag?: string;
    public UserTileUrl?: string;
    public ProfileUrl?: string;
    public Settings?: number;
    public IsDefault?: boolean;
    public AutoLinkError?: string;
    public AutoLinkSuccess?: string;
    public UserEmail?: string;
    public ClientPublishSecret?: string;
    public ClientToken?: string;
    public ClientToken2?: string;
    public ContactSyncError?: string;
    public ContactSyncSuccess?: string;
    public ErrorOffers?: number;
    public FirstAuthErrorDates?: string;
    public LastVersionSaved?: number;
    public LastWelcomeContact?: string;
    public Offers?: number;
    public PsaLastChanged?: Date;
    public RefreshToken2?: string;
    public RefreshTokenExpiry2?: string;
    public SessionHandle?: string;
    public RejectedOffers?: number;
    public SyncEnabled?: boolean;
    public TokenRefreshLastAttempted?: Date;
    public TokenRefreshLastCompleted?: Date;
    public PsaState?: string;
    public SourceEntryID?: any;
    public AccountName?: string;
    public LastSync?: Date;

}

export class AbchPersonItemType extends ItemType {
    public AntiLinkInfo?: string;
    public PersonId?: any;
    public ContactHandles?: any;
    public ContactCategories?: any;
    public RelevanceOrder1?: string;
    public RelevanceOrder2?: string;
    public TrustLevel?: number;
    public FavoriteOrder?: number;
    public ExchangePersonIdGuid?: any;

}

export class ContactItemType extends ItemType {
    public FileAs?: string;
    public FileAsMapping?: any;
    public DisplayName?: string;
    public GivenName?: string;
    public Initials?: string;
    public MiddleName?: string;
    public Nickname?: string;
    public CompleteName?: any;
    public CompanyName?: string;
    public EmailAddresses?: any;
    public AbchEmailAddresses?: any;
    public PhysicalAddresses?: any;
    public PhoneNumbers?: any;
    public AssistantName?: string;
    public Birthday?: Date;
    public BusinessHomePage?: any;
    public Children?: any;
    public Companies?: any;
    public ContactSource?: any;
    public Department?: string;
    public Generation?: string;
    public ImAddresses?: any;
    public JobTitle?: string;
    public Manager?: string;
    public Mileage?: string;
    public OfficeLocation?: string;
    public PostalAddressIndex?: any;
    public Profession?: string;
    public SpouseName?: string;
    public Surname?: string;
    public WeddingAnniversary?: Date;
    public HasPicture?: boolean;
    public PhoneticFullName?: string;
    public PhoneticFirstName?: string;
    public PhoneticLastName?: string;
    public Alias?: string;
    public Notes?: string;
    public Photo?: any;
    public UserSMIMECertificate?: any;
    public MSExchangeCertificate?: any;
    public DirectoryId?: string;
    public ManagerMailbox?: any;
    public DirectReports?: any;
    public AccountName?: string;
    public IsAutoUpdateDisabled?: boolean;
    public IsMessengerEnabled?: boolean;
    public Comment?: string;
    public ContactShortId?: number;
    public ContactType?: string;
    public Gender?: string;
    public IsHidden?: boolean;
    public ObjectId?: string;
    public PassportId?: any;
    public IsPrivate?: boolean;
    public SourceId?: string;
    public TrustLevel?: number;
    public CreatedBy?: string;
    public Urls?: any;
    public Cid?: any;
    public SkypeAuthCertificate?: string;
    public SkypeContext?: string;
    public SkypeId?: string;
    public SkypeRelationship?: string;
    public YomiNickname?: string;
    public XboxLiveTag?: string;
    public InviteFree?: boolean;
    public HidePresenceAndProfile?: boolean;
    public IsPendingOutbound?: boolean;
    public SupportGroupFeeds?: boolean;
    public UserTileHash?: string;
    public UnifiedInbox?: boolean;
    public Mris?: any;
    public Wlid?: string;
    public AbchContactId?: any;
    public NotInBirthdayCalendar?: boolean;
    public ShellContactType?: string;
    public ImMri?: string;
    public PresenceTrustLevel?: number;
    public OtherMri?: string;
    public ProfileLastChanged?: string;
    public MobileIMEnabled?: boolean;
    public PartnerNetworkProfilePhotoUrl?: string;
    public PartnerNetworkThumbnailPhotoUrl?: string;
    public PersonId?: string;
    public ConversationGuid?: any;

}

export class DistributionListType extends ItemType {
    public DisplayName?: string;
    public FileAs?: string;
    public ContactSource?: any;
    public Members?: any;

}

export class GroupByType extends BaseGroupByType {
    public AggregateOn: any;
    public UseCollapsibleGroups?: boolean;
    public ItemsPerGroup?: any;
    public MaxItemsPerGroup?: any;
    public GroupsToExpand?: any;

}

export class DistinguishedGroupByType extends BaseGroupByType {
    public StandardGroupBy: any;

}

export class ExistsType extends SearchExpressionType {
    public Path: any;

}

export class TwoOperandExpressionType extends SearchExpressionType {
    public Path: any;
    public FieldURIOrConstant: any;

}

export class ExcludesType extends SearchExpressionType {
    public Path: any;
    public Bitmask: any;

}

export class ContainsExpressionType extends SearchExpressionType {
    public Path: any;
    public Constant: any;

}

export class NotType extends SearchExpressionType {
    public SearchExpression: any;

}

export class MultipleOperandBooleanExpressionType extends SearchExpressionType {
    public SearchExpression?: any;

}

export class NearType extends MultipleOperandBooleanExpressionType {
    public Distance: any;
    public Ordered: boolean;

}

export class BaseObjectChangedEventType extends BaseNotificationEventType {
    public TimeStamp: Date;
    public ParentFolderId: FolderIdType;

}

export class ModifiedEventType extends BaseObjectChangedEventType {
    public UnreadCount?: number;

}

export class MovedCopiedEventType extends BaseObjectChangedEventType {
    public OldParentFolderId: any;

}

export class PushSubscriptionRequestType extends BaseSubscriptionRequestType {
    public StatusFrequency: any;
    public URL: string;
    public CallerData?: string;

}

export class PullSubscriptionRequestType extends BaseSubscriptionRequestType {
    public Timeout: any;

}

export class IndividualAttendeeConflictData extends AttendeeConflictData {
    public BusyType: any;

}

export class GroupAttendeeConflictData extends AttendeeConflictData {
    public NumberOfMembers: number;
    public NumberOfMembersAvailable: number;
    public NumberOfMembersWithConflict: number;
    public NumberOfMembersWithNoData: number;

}

export class PermissionType extends BasePermissionType {
    public ReadItems?: any;
    public PermissionLevel: any;

}

export class CalendarPermissionType extends BasePermissionType {
    public ReadItems?: any;
    public CalendarPermissionLevel: any;

}

export class MailTipsServiceConfiguration extends ServiceConfiguration {
    public MailTipsEnabled: boolean;
    public MaxRecipientsPerGetMailTipsRequest: number;
    public MaxMessageSize: number;
    public LargeAudienceThreshold: number;
    public ShowExternalRecipientCount: boolean;
    public InternalDomains: any;
    public PolicyTipsEnabled: boolean;
    public LargeAudienceCap: number;

}

export class UnifiedMessageServiceConfiguration extends ServiceConfiguration {
    public UmEnabled: boolean;
    public PlayOnPhoneDialString: string;
    public PlayOnPhoneEnabled: boolean;

}

export class SharePointURLsServiceConfiguration extends ServiceConfiguration {
    public InternalSPMySiteHostURL: string;
    public ExternalSPMySiteHostURL: string;

}

export class OfficeIntegrationConfiguration extends ServiceConfiguration {
    public OfficeSidebarURL: string;

}

export class ProtectionRulesServiceConfiguration extends ServiceConfiguration {
    public Rules: any;
    public InternalDomains: any;

}

export class CreateRuleOperationType extends RuleOperationType {
    public Rule: any;

}

export class SetRuleOperationType extends RuleOperationType {
    public Rule: any;

}

export class DeleteRuleOperationType extends RuleOperationType {
    public RuleId: string;

}

export class OneDriveItemType extends ItemType {
    public ResourceId: string;

}

export class FileItemType extends ItemType {
    public FileName?: string;
    public FileExtension?: string;
    public FileSize?: any;
    public FileCreatedTime?: string;
    public FileModifiedTime?: string;
    public StorageProviderContext?: string;
    public FileID?: string;
    public ItemReferenceId?: string;
    public ReferenceId?: string;
    public Sender?: string;
    public ItemReceivedTime?: string;
    public ItemPath?: string;
    public ItemSentTime?: string;
    public FileContexts?: any;
    public VisualizationContainerUrl?: string;
    public VisualizationContainerTitle?: string;
    public VisualizationAccessUrl?: string;
    public ReferenceAttachmentProviderEndpoint?: string;
    public ReferenceAttachmentProviderType?: string;
    public ItemConversationId?: string;
    public SharepointItemListId?: any;
    public SharepointItemListItemId?: string;
    public SharepointItemSiteId?: any;
    public SharepointItemSitePath?: string;
    public SharepointItemWebId?: any;
    public AttachmentId?: string;

}

export class DocumentFileItemType extends FileItemType {
    public Author?: any;
    public Title?: string;
    public LastModifiedBy?: string;

}

export class DelveItemType extends ItemType {
    public GraphNodeLogicalId: string;

}

export class DeletedOccurrenceStateDefinitionType extends BaseCalendarItemStateDefinitionType {
    public OccurrenceDate: Date;
    public IsOccurrencePresent?: boolean;

}

export class LocationBasedStateDefinitionType extends BaseCalendarItemStateDefinitionType {
    public OrganizerLocation: string;
    public AttendeeLocation: string;

}

export class PeopleSuggestionType extends SuggestionType {
    public PrimarySmtpAddress: string;
    public PersonType?: string;

}

export class FileSuggestionType extends SuggestionType {
    public FileName: string;
    public FileExtension: string;
    public FileReferenceId?: string;
    public FileTitle?: string;
    public ContainerTitle?: string;
    public ContainerUrl?: string;

}

export class FolderRefinerType extends SearchRefinerType {
    public FolderId?: any;

}

export class PeopleRefinerType extends SearchRefinerType {
    public DisplayName?: string;
    public SmtpAddress?: any;

}

export class MailboxRefinerType extends SearchRefinerType {
    public MailboxDisplayName?: string;

}

export class AttachmentRefinerType extends SearchRefinerType {
    public HasAttachment?: boolean;

}

export class HashtagRefinerType extends SearchRefinerType {
    public DisplayName?: string;

}

export class SearchResultItemIdType extends ItemIdType {
    public EntryId?: any;
    public OutlookItemId?: any;

}

export class SearchResultConversationIdType extends ItemIdType {
    public OutlookConversationId?: any;

}

export class AttendeeConstraintItem extends MeetingTimeCandidatesConstraintItem {
    public IsRequired?: boolean;

}

export class LocationConstraintItem extends MeetingTimeCandidatesConstraintItem {
    public Name?: string;
    public ResolveAvailability?: boolean;

}

export enum SpecialLogonTypeType {
    Admin = "Admin",
    SystemService = "SystemService"
}

export enum ExchangeVersionType {
    Exchange2007 = "Exchange2007",
    Exchange2007_SP1 = "Exchange2007_SP1",
    Exchange2009 = "Exchange2009",
    Exchange2010 = "Exchange2010",
    Exchange2010_SP1 = "Exchange2010_SP1",
    Exchange2010_SP2 = "Exchange2010_SP2",
    Exchange2012 = "Exchange2012",
    Exchange2013 = "Exchange2013",
    Exchange2013_SP1 = "Exchange2013_SP1",
    Exchange2015 = "Exchange2015",
    Exchange2016 = "Exchange2016",
    V2015_10_05 = "V2015_10_05",
    V2016_01_06 = "V2016_01_06",
    V2016_04_13 = "V2016_04_13",
    V2016_07_13 = "V2016_07_13",
    V2016_10_10 = "V2016_10_10",
    V2017_01_07 = "V2017_01_07",
    V2017_04_14 = "V2017_04_14",
    V2017_07_11 = "V2017_07_11",
    V2017_10_09 = "V2017_10_09",
    V2018_01_08 = "V2018_01_08"
}

export enum DateTimePrecisionType {
    Seconds = "Seconds",
    Milliseconds = "Milliseconds"
}

export enum NonEmptyStringType {
}

export enum MailboxTypeType {
    Unknown = "Unknown",
    OneOff = "OneOff",
    Mailbox = "Mailbox",
    PublicDL = "PublicDL",
    PrivateDL = "PrivateDL",
    Contact = "Contact",
    PublicFolder = "PublicFolder",
    GroupMailbox = "GroupMailbox",
    ImplicitContact = "ImplicitContact",
    User = "User"
}

export enum ActivityDomainType {
    Unknown = "Unknown",
    Personal = "Personal",
    Work = "Work"
}

export enum ReminderGroupType {
    Calendar = "Calendar",
    Task = "Task"
}

export enum UnindexedFieldURIType {
}

export enum DistinguishedPropertySetType {
    Meeting = "Meeting",
    Appointment = "Appointment",
    Common = "Common",
    PublicStrings = "PublicStrings",
    Address = "Address",
    InternetHeaders = "InternetHeaders",
    CalendarAssistant = "CalendarAssistant",
    UnifiedMessaging = "UnifiedMessaging",
    Task = "Task",
    Sharing = "Sharing"
}

export enum MapiPropertyTypeType {
    ApplicationTime = "ApplicationTime",
    ApplicationTimeArray = "ApplicationTimeArray",
    Binary = "Binary",
    BinaryArray = "BinaryArray",
    Boolean = "Boolean",
    CLSID = "CLSID",
    CLSIDArray = "CLSIDArray",
    Currency = "Currency",
    CurrencyArray = "CurrencyArray",
    Double = "Double",
    DoubleArray = "DoubleArray",
    Error = "Error",
    Float = "Float",
    FloatArray = "FloatArray",
    Integer = "Integer",
    IntegerArray = "IntegerArray",
    Long = "Long",
    LongArray = "LongArray",
    Null = "Null",
    Object = "Object",
    ObjectArray = "ObjectArray",
    Short = "Short",
    ShortArray = "ShortArray",
    SystemTime = "SystemTime",
    SystemTimeArray = "SystemTimeArray",
    String = "String",
    StringArray = "StringArray"
}

export enum FolderQueryTraversalType {
    Shallow = "Shallow",
    Deep = "Deep",
    SoftDeleted = "SoftDeleted"
}

export enum SearchFolderTraversalType {
    Shallow = "Shallow",
    Deep = "Deep"
}

export enum ItemQueryTraversalType {
    Shallow = "Shallow",
    SoftDeleted = "SoftDeleted",
    Associated = "Associated"
}

export enum ConversationQueryTraversalType {
    Shallow = "Shallow",
    Deep = "Deep"
}

export enum DefaultShapeNamesType {
    IdOnly = "IdOnly",
    Default = "Default",
    AllProperties = "AllProperties",
    PcxPeopleSearch = "PcxPeopleSearch"
}

export enum BodyTypeResponseType {
    Best = "Best",
    HTML = "HTML",
    Text = "Text"
}

export enum DisposalType {
    HardDelete = "HardDelete",
    SoftDelete = "SoftDelete",
    MoveToDeletedItems = "MoveToDeletedItems"
}

export enum ConflictResolutionType {
    NeverOverwrite = "NeverOverwrite",
    AutoResolve = "AutoResolve",
    AlwaysOverwrite = "AlwaysOverwrite"
}

export enum ClientAccessTokenTypeType {
    CallerIdentity = "CallerIdentity",
    ExtensionCallback = "ExtensionCallback",
    ScopedToken = "ScopedToken",
    ExtensionRestApiCallback = "ExtensionRestApiCallback",
    Connectors = "Connectors",
    Loki = "Loki",
    DesktopOutlook = "DesktopOutlook"
}

export enum ResponseClassType {
    Success = "Success",
    Warning = "Warning",
    Error = "Error"
}

export enum SensitivityChoicesType {
    Normal = "Normal",
    Personal = "Personal",
    Private = "Private",
    Confidential = "Confidential"
}

export enum ImportanceChoicesType {
    Low = "Low",
    Normal = "Normal",
    High = "High"
}

export enum BodyTypeType {
    HTML = "HTML",
    Text = "Text"
}

export enum FolderClassType {
}

export enum DistinguishedFolderIdNameType {
    calendar = "calendar",
    contacts = "contacts",
    deleteditems = "deleteditems",
    drafts = "drafts",
    inbox = "inbox",
    journal = "journal",
    notes = "notes",
    outbox = "outbox",
    sentitems = "sentitems",
    tasks = "tasks",
    msgfolderroot = "msgfolderroot",
    publicfoldersroot = "publicfoldersroot",
    root = "root",
    junkemail = "junkemail",
    searchfolders = "searchfolders",
    voicemail = "voicemail",
    recoverableitemsroot = "recoverableitemsroot",
    recoverableitemsdeletions = "recoverableitemsdeletions",
    recoverableitemsversions = "recoverableitemsversions",
    recoverableitemspurges = "recoverableitemspurges",
    recoverableitemsdiscoveryholds = "recoverableitemsdiscoveryholds",
    archiveroot = "archiveroot",
    archivemsgfolderroot = "archivemsgfolderroot",
    archivedeleteditems = "archivedeleteditems",
    archiveinbox = "archiveinbox",
    archiverecoverableitemsroot = "archiverecoverableitemsroot",
    archiverecoverableitemsdeletions = "archiverecoverableitemsdeletions",
    archiverecoverableitemsversions = "archiverecoverableitemsversions",
    archiverecoverableitemspurges = "archiverecoverableitemspurges",
    archiverecoverableitemsdiscoveryholds = "archiverecoverableitemsdiscoveryholds",
    syncissues = "syncissues",
    conflicts = "conflicts",
    localfailures = "localfailures",
    serverfailures = "serverfailures",
    recipientcache = "recipientcache",
    quickcontacts = "quickcontacts",
    conversationhistory = "conversationhistory",
    adminauditlogs = "adminauditlogs",
    todosearch = "todosearch",
    mycontacts = "mycontacts",
    directory = "directory",
    imcontactlist = "imcontactlist",
    peopleconnect = "peopleconnect",
    favorites = "favorites",
    mecontact = "mecontact",
    personmetadata = "personmetadata",
    teamspaceactivity = "teamspaceactivity",
    teamspacemessaging = "teamspacemessaging",
    teamspaceworkitems = "teamspaceworkitems",
    scheduled = "scheduled",
    orionnotes = "orionnotes",
    tagitems = "tagitems",
    alltaggeditems = "alltaggeditems",
    allcategorizeditems = "allcategorizeditems",
    externalcontacts = "externalcontacts",
    teamchat = "teamchat",
    teamchathistory = "teamchathistory",
    yammerdata = "yammerdata",
    yammerroot = "yammerroot",
    yammerinbound = "yammerinbound",
    yammeroutbound = "yammeroutbound",
    yammerfeeds = "yammerfeeds",
    kaizaladata = "kaizaladata",
    messageingestion = "messageingestion",
    onedriveroot = "onedriveroot",
    onedriverecylebin = "onedriverecylebin",
    onedrivesystem = "onedrivesystem",
    onedrivevolume = "onedrivevolume",
    important = "important",
    starred = "starred",
    archive = "archive"
}

export enum CreateActionType {
    CreateNew = "CreateNew",
    Update = "Update",
    UpdateOrCreate = "UpdateOrCreate"
}

export enum CompleteActionType {
    Commit = "Commit",
    Abandon = "Abandon"
}

export enum ViewFilterType {
    All = "All",
    Flagged = "Flagged",
    HasAttachment = "HasAttachment",
    ToOrCcMe = "ToOrCcMe",
    Unread = "Unread",
    TaskActive = "TaskActive",
    TaskOverdue = "TaskOverdue",
    TaskCompleted = "TaskCompleted",
    NoClutter = "NoClutter",
    Clutter = "Clutter"
}

export enum ReminderActionType {
    Dismiss = "Dismiss",
    Snooze = "Snooze"
}

export enum DerivedItemIdType {
}

export enum ItemClassType {
}

export enum FlagStatusType {
    NotFlagged = "NotFlagged",
    Flagged = "Flagged",
    Complete = "Complete"
}

export enum PredictedActionReasonType {
    None = "None",
    ConversationStarterIsYou = "ConversationStarterIsYou",
    OnlyRecipient = "OnlyRecipient",
    ConversationContributions = "ConversationContributions",
    MarkedImportantBySender = "MarkedImportantBySender",
    SenderIsManager = "SenderIsManager",
    SenderIsInManagementChain = "SenderIsInManagementChain",
    SenderIsDirectReport = "SenderIsDirectReport",
    ActionBasedOnSender = "ActionBasedOnSender",
    NameOnToLine = "NameOnToLine",
    NameOnCcLine = "NameOnCcLine",
    ManagerPosition = "ManagerPosition",
    ReplyToAMessageFromMe = "ReplyToAMessageFromMe",
    PreviouslyFlagged = "PreviouslyFlagged",
    ActionBasedOnRecipients = "ActionBasedOnRecipients",
    ActionBasedOnSubjectWords = "ActionBasedOnSubjectWords",
    ActionBasedOnBasedOnBodyWords = "ActionBasedOnBasedOnBodyWords"
}

export enum EmailPositionType {
    LatestReply = "LatestReply",
    Other = "Other",
    Subject = "Subject",
    Signature = "Signature"
}

export enum InferenceClassificationType {
    Focused = "Focused",
    Other = "Other"
}

export enum ConversationActionTypeType {
    AlwaysCategorize = "AlwaysCategorize",
    AlwaysDelete = "AlwaysDelete",
    AlwaysMove = "AlwaysMove",
    Delete = "Delete",
    Move = "Move",
    Copy = "Copy",
    SetReadState = "SetReadState",
    SetRetentionPolicy = "SetRetentionPolicy",
    Flag = "Flag"
}

export enum ConversationNodeSortOrder {
    TreeOrderAscending = "TreeOrderAscending",
    TreeOrderDescending = "TreeOrderDescending",
    DateOrderAscending = "DateOrderAscending",
    DateOrderDescending = "DateOrderDescending"
}

export enum TokenSourceType {
    None = "None",
    LinkedIn = "LinkedIn"
}

export enum GroupMemberIdentifierType {
    ExternalDirectoryObjectId = "ExternalDirectoryObjectId",
    LegacyExchangeDN = "LegacyExchangeDN",
    SmtpAddress = "SmtpAddress"
}

export enum ModernGroupTypeType {
    None = "None",
    Private = "Private",
    Secret = "Secret",
    Public = "Public"
}

export enum MessageDispositionType {
    SaveOnly = "SaveOnly",
    SendOnly = "SendOnly",
    SendAndSaveCopy = "SendAndSaveCopy"
}

export enum CalendarItemCreateOrDeleteOperationType {
    SendToNone = "SendToNone",
    SendOnlyToAll = "SendOnlyToAll",
    SendToAllAndSaveCopy = "SendToAllAndSaveCopy"
}

export enum CalendarItemUpdateOperationType {
    SendToNone = "SendToNone",
    SendOnlyToAll = "SendOnlyToAll",
    SendOnlyToChanged = "SendOnlyToChanged",
    SendToAllAndSaveCopy = "SendToAllAndSaveCopy",
    SendToChangedAndSaveCopy = "SendToChangedAndSaveCopy"
}

export enum AffectedTaskOccurrencesType {
    AllOccurrences = "AllOccurrences",
    SpecifiedOccurrenceOnly = "SpecifiedOccurrenceOnly"
}

export enum TaskStatusType {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
    Completed = "Completed",
    WaitingOnOthers = "WaitingOnOthers",
    Deferred = "Deferred"
}

export enum TaskDelegateStateType {
    NoMatch = "NoMatch",
    OwnNew = "OwnNew",
    Owned = "Owned",
    Accepted = "Accepted",
    Declined = "Declined",
    Max = "Max"
}

export enum SharingActionImportance {
    Primary = "Primary",
    Secondary = "Secondary"
}

export enum SharingAction {
    AcceptAndViewCalendar = "AcceptAndViewCalendar",
    ViewCalendar = "ViewCalendar",
    AddThisCalendar = "AddThisCalendar",
    Accept = "Accept"
}

export enum SharingActionType {
    Accept = "Accept"
}

export enum IndexBasePointType {
    Beginning = "Beginning",
    End = "End"
}

export enum ResolveNamesSearchScopeType {
    ActiveDirectory = "ActiveDirectory",
    ActiveDirectoryContacts = "ActiveDirectoryContacts",
    Contacts = "Contacts",
    ContactsActiveDirectory = "ContactsActiveDirectory"
}

export enum MeetingRequestTypeType {
    None = "None",
    FullUpdate = "FullUpdate",
    InformationalUpdate = "InformationalUpdate",
    NewMeetingRequest = "NewMeetingRequest",
    Outdated = "Outdated",
    SilentUpdate = "SilentUpdate",
    PrincipalWantsCopy = "PrincipalWantsCopy"
}

export enum AvailabilityStatusType {
    Unknown = "Unknown",
    Free = "Free",
    Tentative = "Tentative",
    Busy = "Busy",
    Oof = "Oof",
    WorkingElsewhere = "WorkingElsewhere"
}

export enum LegacyFreeBusyType {
    Free = "Free",
    Tentative = "Tentative",
    Busy = "Busy",
    OOF = "OOF",
    WorkingElsewhere = "WorkingElsewhere",
    NoData = "NoData"
}

export enum CalendarItemTypeType {
    Single = "Single",
    Occurrence = "Occurrence",
    Exception = "Exception",
    RecurringMaster = "RecurringMaster"
}

export enum ResponseTypeType {
    Unknown = "Unknown",
    Organizer = "Organizer",
    Tentative = "Tentative",
    Accept = "Accept",
    Decline = "Decline",
    NoResponseReceived = "NoResponseReceived"
}

export enum LobbyBypassType {
    Disabled = "Disabled",
    EnabledForGatewayParticipants = "EnabledForGatewayParticipants"
}

export enum OnlineMeetingAccessLevelType {
    Locked = "Locked",
    Invited = "Invited",
    Internal = "Internal",
    Everyone = "Everyone"
}

export enum PresentersType {
    Disabled = "Disabled",
    Internal = "Internal",
    Everyone = "Everyone"
}

export enum DayOfWeekType {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Day = "Day",
    Weekday = "Weekday",
    WeekendDay = "WeekendDay"
}

export enum DayOfWeekIndexType {
    First = "First",
    Second = "Second",
    Third = "Third",
    Fourth = "Fourth",
    Last = "Last"
}

export enum MonthNamesType {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

export enum LocationSourceType {
    None = "None",
    LocationServices = "LocationServices",
    PhonebookServices = "PhonebookServices",
    Device = "Device",
    Contact = "Contact",
    Resource = "Resource"
}

export enum TransitionTargetKindType {
    Period = "Period",
    Group = "Group"
}

export enum RoleMemberTypeType {
    None = "None",
    Passport = "Passport",
    Everyone = "Everyone",
    Email = "Email",
    Phone = "Phone",
    SkypeId = "SkypeId",
    ExternalId = "ExternalId",
    Group = "Group",
    Guid = "Guid",
    Role = "Role",
    Service = "Service",
    Circle = "Circle",
    Domain = "Domain",
    Partner = "Partner"
}

export enum ImAddressKeyType {
    ImAddress1 = "ImAddress1",
    ImAddress2 = "ImAddress2",
    ImAddress3 = "ImAddress3"
}

export enum EmailAddressKeyType {
    EmailAddress1 = "EmailAddress1",
    EmailAddress2 = "EmailAddress2",
    EmailAddress3 = "EmailAddress3"
}

export enum AbchEmailAddressTypeType {
    Personal = "Personal",
    Business = "Business",
    Other = "Other",
    Passport = "Passport"
}

export enum ContactUrlKeyType {
    Personal = "Personal",
    Business = "Business",
    Attachment = "Attachment",
    EbcDisplayDefinition = "EbcDisplayDefinition",
    EbcFinalImage = "EbcFinalImage",
    EbcLogo = "EbcLogo",
    Feed = "Feed",
    Image = "Image",
    InternalMarker = "InternalMarker",
    Other = "Other"
}

export enum PhoneNumberKeyType {
    AssistantPhone = "AssistantPhone",
    BusinessFax = "BusinessFax",
    BusinessPhone = "BusinessPhone",
    BusinessPhone2 = "BusinessPhone2",
    Callback = "Callback",
    CarPhone = "CarPhone",
    CompanyMainPhone = "CompanyMainPhone",
    HomeFax = "HomeFax",
    HomePhone = "HomePhone",
    HomePhone2 = "HomePhone2",
    Isdn = "Isdn",
    MobilePhone = "MobilePhone",
    OtherFax = "OtherFax",
    OtherTelephone = "OtherTelephone",
    Pager = "Pager",
    PrimaryPhone = "PrimaryPhone",
    RadioPhone = "RadioPhone",
    Telex = "Telex",
    TtyTddPhone = "TtyTddPhone",
    BusinessMobile = "BusinessMobile",
    IPPhone = "IPPhone",
    Mms = "Mms",
    Msn = "Msn"
}

export enum PhysicalAddressIndexType {
    None = "None",
    Home = "Home",
    Business = "Business",
    Other = "Other"
}

export enum PhysicalAddressKeyType {
    Home = "Home",
    Business = "Business",
    Other = "Other"
}

export enum FileAsMappingType {
    None = "None",
    LastCommaFirst = "LastCommaFirst",
    FirstSpaceLast = "FirstSpaceLast",
    Company = "Company",
    LastCommaFirstCompany = "LastCommaFirstCompany",
    CompanyLastFirst = "CompanyLastFirst",
    LastFirst = "LastFirst",
    LastFirstCompany = "LastFirstCompany",
    CompanyLastCommaFirst = "CompanyLastCommaFirst",
    LastFirstSuffix = "LastFirstSuffix",
    LastSpaceFirstCompany = "LastSpaceFirstCompany",
    CompanyLastSpaceFirst = "CompanyLastSpaceFirst",
    LastSpaceFirst = "LastSpaceFirst",
    DisplayName = "DisplayName",
    FirstName = "FirstName",
    LastFirstMiddleSuffix = "LastFirstMiddleSuffix",
    LastName = "LastName",
    Empty = "Empty"
}

export enum ContactSourceType {
    ActiveDirectory = "ActiveDirectory",
    Store = "Store"
}

export enum MemberStatusType {
    Unrecognized = "Unrecognized",
    Normal = "Normal",
    Demoted = "Demoted"
}

export enum AggregateType {
    Minimum = "Minimum",
    Maximum = "Maximum"
}

export enum StandardGroupByType {
    ConversationTopic = "ConversationTopic"
}

export enum ExcludesAttributeType {
}

export enum ContainmentModeType {
    FullString = "FullString",
    Prefixed = "Prefixed",
    Substring = "Substring",
    PrefixOnWords = "PrefixOnWords",
    ExactPhrase = "ExactPhrase"
}

export enum ContainmentComparisonType {
    Exact = "Exact",
    IgnoreCase = "IgnoreCase",
    IgnoreNonSpacingCharacters = "IgnoreNonSpacingCharacters",
    Loose = "Loose",
    IgnoreCaseAndNonSpacingCharacters = "IgnoreCaseAndNonSpacingCharacters",
    LooseAndIgnoreCase = "LooseAndIgnoreCase",
    LooseAndIgnoreNonSpace = "LooseAndIgnoreNonSpace",
    LooseAndIgnoreCaseAndIgnoreNonSpace = "LooseAndIgnoreCaseAndIgnoreNonSpace"
}

export enum SortDirectionType {
    Ascending = "Ascending",
    Descending = "Descending"
}

export enum NotificationEventTypeType {
    CopiedEvent = "CopiedEvent",
    CreatedEvent = "CreatedEvent",
    DeletedEvent = "DeletedEvent",
    ModifiedEvent = "ModifiedEvent",
    MovedEvent = "MovedEvent",
    NewMailEvent = "NewMailEvent",
    FreeBusyChangedEvent = "FreeBusyChangedEvent"
}

export enum SubscriptionStatusType {
    OK = "OK",
    Unsubscribe = "Unsubscribe"
}

export enum ConnectionStatusType {
    OK = "OK",
    Closed = "Closed"
}

export enum UnifiedGroupAccessType {
    None = "None",
    Private = "Private",
    Secret = "Secret",
    Public = "Public"
}

export enum SyncFolderItemsScopeType {
    NormalItems = "NormalItems",
    NormalAndAssociatedItems = "NormalAndAssociatedItems"
}

export enum AvailabilityProxyRequestType {
    CrossSite = "CrossSite",
    CrossForest = "CrossForest"
}

export enum MeetingAttendeeType {
    Organizer = "Organizer",
    Required = "Required",
    Optional = "Optional",
    Room = "Room",
    Resource = "Resource"
}

export enum SuggestionQuality {
    Excellent = "Excellent",
    Good = "Good",
    Fair = "Fair",
    Poor = "Poor"
}

export enum OofState {
    Disabled = "Disabled",
    Enabled = "Enabled",
    Scheduled = "Scheduled"
}

export enum ExternalAudience {
    None = "None",
    Known = "Known",
    All = "All"
}

export enum SendPromptType {
    None = "None",
    Send = "Send",
    VotingOption = "VotingOption"
}

export enum IdFormatType {
    EwsLegacyId = "EwsLegacyId",
    EwsId = "EwsId",
    EntryId = "EntryId",
    HexEntryId = "HexEntryId",
    StoreId = "StoreId",
    OwaId = "OwaId"
}

export enum DistinguishedUserType {
    Default = "Default",
    Anonymous = "Anonymous"
}

export enum PermissionReadAccessType {
    None = "None",
    FullDetails = "FullDetails"
}

export enum CalendarPermissionReadAccessType {
    None = "None",
    TimeOnly = "TimeOnly",
    TimeAndSubjectAndLocation = "TimeAndSubjectAndLocation",
    FullDetails = "FullDetails"
}

export enum PermissionActionType {
    None = "None",
    Owned = "Owned",
    All = "All"
}

export enum PermissionLevelType {
    None = "None",
    Owner = "Owner",
    PublishingEditor = "PublishingEditor",
    Editor = "Editor",
    PublishingAuthor = "PublishingAuthor",
    Author = "Author",
    NoneditingAuthor = "NoneditingAuthor",
    Reviewer = "Reviewer",
    Contributor = "Contributor",
    Custom = "Custom"
}

export enum CalendarPermissionLevelType {
    None = "None",
    Owner = "Owner",
    PublishingEditor = "PublishingEditor",
    Editor = "Editor",
    PublishingAuthor = "PublishingAuthor",
    Author = "Author",
    NoneditingAuthor = "NoneditingAuthor",
    Reviewer = "Reviewer",
    Contributor = "Contributor",
    FreeBusyTimeOnly = "FreeBusyTimeOnly",
    FreeBusyTimeAndSubjectAndLocation = "FreeBusyTimeAndSubjectAndLocation",
    Custom = "Custom"
}

export enum DeliverMeetingRequestsType {
    DelegatesOnly = "DelegatesOnly",
    DelegatesAndMe = "DelegatesAndMe",
    DelegatesAndSendInformationToMe = "DelegatesAndSendInformationToMe",
    NoForward = "NoForward"
}

export enum DelegateFolderPermissionLevelType {
    None = "None",
    Editor = "Editor",
    Reviewer = "Reviewer",
    Author = "Author",
    Custom = "Custom"
}

export enum InvalidRecipientResponseCodeType {
    OtherError = "OtherError",
    RecipientOrganizationNotFederated = "RecipientOrganizationNotFederated",
    CannotObtainTokenFromSTS = "CannotObtainTokenFromSTS",
    SystemPolicyBlocksSharingWithThisRecipient = "SystemPolicyBlocksSharingWithThisRecipient",
    RecipientOrganizationFederatedWithUnknownTokenIssuer = "RecipientOrganizationFederatedWithUnknownTokenIssuer"
}

export enum SharingDataType {
    Calendar = "Calendar",
    Contacts = "Contacts"
}

export enum PhoneCallStateType {
    Idle = "Idle",
    Connecting = "Connecting",
    Alerted = "Alerted",
    Connected = "Connected",
    Disconnected = "Disconnected",
    Incoming = "Incoming",
    Transferring = "Transferring",
    Forwarding = "Forwarding"
}

export enum ConnectionFailureCauseType {
    None = "None",
    UserBusy = "UserBusy",
    NoAnswer = "NoAnswer",
    Unavailable = "Unavailable",
    Other = "Other"
}

export enum UserConfigurationDictionaryObjectTypesType {
    DateTime = "DateTime",
    Boolean = "Boolean",
    Byte = "Byte",
    String = "String",
    Integer32 = "Integer32",
    UnsignedInteger32 = "UnsignedInteger32",
    Integer64 = "Integer64",
    UnsignedInteger64 = "UnsignedInteger64",
    StringArray = "StringArray",
    ByteArray = "ByteArray"
}

export enum ProtectionRuleTrueType {
}

export enum ProtectionRuleAllInternalType {
}

export enum ProtectionRuleValueType {
}

export enum ProtectionRuleActionKindType {
    RightsProtectMessage = "RightsProtectMessage"
}

export enum TeamMailboxLifecycleStateType {
    Active = "Active",
    Closed = "Closed",
    Unlinked = "Unlinked",
    PendingDelete = "PendingDelete"
}

export enum ReportMessageActionType {
    Junk = "Junk",
    NotJunk = "NotJunk",
    Phish = "Phish",
    Unsubscribe = "Unsubscribe"
}

export enum MessageTrackingReportTemplateType {
    Summary = "Summary",
    RecipientPath = "RecipientPath"
}

export enum FlaggedForActionType {
    Any = "Any",
    Call = "Call",
    DoNotForward = "DoNotForward",
    FollowUp = "FollowUp",
    FYI = "FYI",
    Forward = "Forward",
    NoResponseNecessary = "NoResponseNecessary",
    Read = "Read",
    Reply = "Reply",
    ReplyToAll = "ReplyToAll",
    Review = "Review"
}

export enum RuleFieldURIType {
}

export enum RuleValidationErrorCodeType {
    ADOperationFailure = "ADOperationFailure",
    ConnectedAccountNotFound = "ConnectedAccountNotFound",
    CreateWithRuleId = "CreateWithRuleId",
    EmptyValueFound = "EmptyValueFound",
    DuplicatedPriority = "DuplicatedPriority",
    DuplicatedOperationOnTheSameRule = "DuplicatedOperationOnTheSameRule",
    FolderDoesNotExist = "FolderDoesNotExist",
    InvalidAddress = "InvalidAddress",
    InvalidDateRange = "InvalidDateRange",
    InvalidFolderId = "InvalidFolderId",
    InvalidSizeRange = "InvalidSizeRange",
    InvalidValue = "InvalidValue",
    MessageClassificationNotFound = "MessageClassificationNotFound",
    MissingAction = "MissingAction",
    MissingParameter = "MissingParameter",
    MissingRangeValue = "MissingRangeValue",
    NotSettable = "NotSettable",
    RecipientDoesNotExist = "RecipientDoesNotExist",
    RuleNotFound = "RuleNotFound",
    SizeLessThanZero = "SizeLessThanZero",
    StringValueTooBig = "StringValueTooBig",
    UnsupportedAddress = "UnsupportedAddress",
    UnexpectedError = "UnexpectedError",
    UnsupportedRule = "UnsupportedRule"
}

export enum SearchItemKindType {
    Email = "Email",
    Meetings = "Meetings",
    Tasks = "Tasks",
    Notes = "Notes",
    Docs = "Docs",
    Journals = "Journals",
    Contacts = "Contacts",
    Im = "Im",
    Voicemail = "Voicemail",
    Faxes = "Faxes",
    Posts = "Posts",
    Rssfeeds = "Rssfeeds"
}

export enum MailboxSearchLocationType {
    PrimaryOnly = "PrimaryOnly",
    ArchiveOnly = "ArchiveOnly",
    All = "All"
}

export enum SearchResultType {
    StatisticsOnly = "StatisticsOnly",
    PreviewOnly = "PreviewOnly"
}

export enum SearchPageDirectionType {
    Previous = "Previous",
    Next = "Next"
}

export enum PreviewItemBaseShapeType {
    Default = "Default",
    Compact = "Compact"
}

export enum HoldActionType {
    Create = "Create",
    Update = "Update",
    Remove = "Remove"
}

export enum HoldStatusType {
    NotOnHold = "NotOnHold",
    Pending = "Pending",
    OnHold = "OnHold",
    PartialHold = "PartialHold",
    Failed = "Failed"
}

export enum ItemIndexErrorType {
    None = "None",
    GenericError = "GenericError",
    Timeout = "Timeout",
    StaleEvent = "StaleEvent",
    MailboxOffline = "MailboxOffline",
    AttachmentLimitReached = "AttachmentLimitReached",
    MarsWriterTruncation = "MarsWriterTruncation",
    DocumentParserFailure = "DocumentParserFailure"
}

export enum UserPhotoSizeType {
    HR48x48 = "HR48x48",
    HR64x64 = "HR64x64",
    HR96x96 = "HR96x96",
    HR120x120 = "HR120x120",
    HR240x240 = "HR240x240",
    HR360x360 = "HR360x360",
    HR432x432 = "HR432x432",
    HR504x504 = "HR504x504",
    HR648x648 = "HR648x648",
    HR1024xN = "HR1024xN",
    HR1920xN = "HR1920xN"
}

export enum UserPhotoTypeType {
    UserPhoto = "UserPhoto",
    ProfileHeaderPhoto = "ProfileHeaderPhoto"
}

export enum ElcFolderType {
    Calendar = "Calendar",
    Contacts = "Contacts",
    DeletedItems = "DeletedItems",
    Drafts = "Drafts",
    Inbox = "Inbox",
    JunkEmail = "JunkEmail",
    Journal = "Journal",
    Notes = "Notes",
    Outbox = "Outbox",
    SentItems = "SentItems",
    Tasks = "Tasks",
    All = "All",
    ManagedCustomFolder = "ManagedCustomFolder",
    RssSubscriptions = "RssSubscriptions",
    SyncIssues = "SyncIssues",
    ConversationHistory = "ConversationHistory",
    Personal = "Personal",
    RecoverableItems = "RecoverableItems",
    NonIpmRoot = "NonIpmRoot"
}

export enum RetentionActionType {
    None = "None",
    MoveToDeletedItems = "MoveToDeletedItems",
    MoveToFolder = "MoveToFolder",
    DeleteAndAllowRecovery = "DeleteAndAllowRecovery",
    PermanentlyDelete = "PermanentlyDelete",
    MarkAsPastRetentionLimit = "MarkAsPastRetentionLimit",
    MoveToArchive = "MoveToArchive"
}

export enum RetentionType {
    Delete = "Delete",
    Archive = "Archive"
}

export enum ClientExtensionProvidedToType {
    Everyone = "Everyone",
    SpecificUsers = "SpecificUsers"
}

export enum ClientExtensionTypeType {
    Default = "Default",
    Private = "Private",
    MarketPlace = "MarketPlace",
    PrivateCatalog = "PrivateCatalog",
    MarketplacePrivateCatalog = "MarketplacePrivateCatalog"
}

export enum ClientExtensionScopeType {
    None = "None",
    User = "User",
    Organization = "Organization",
    Default = "Default"
}

export enum ConsentStateType {
    NotResponded = "NotResponded",
    NotConsented = "NotConsented",
    Consented = "Consented"
}

export enum DisableReasonType {
    NoReason = "NoReason",
    OutlookClientPerformance = "OutlookClientPerformance",
    OWAClientPerformance = "OWAClientPerformance",
    MobileClientPerformance = "MobileClientPerformance"
}

export enum IconIndexType {
    Default = "Default",
    PostItem = "PostItem",
    MailRead = "MailRead",
    MailUnread = "MailUnread",
    MailReplied = "MailReplied",
    MailForwarded = "MailForwarded",
    MailEncrypted = "MailEncrypted",
    MailSmimeSigned = "MailSmimeSigned",
    MailEncryptedReplied = "MailEncryptedReplied",
    MailSmimeSignedReplied = "MailSmimeSignedReplied",
    MailEncryptedForwarded = "MailEncryptedForwarded",
    MailSmimeSignedForwarded = "MailSmimeSignedForwarded",
    MailEncryptedRead = "MailEncryptedRead",
    MailSmimeSignedRead = "MailSmimeSignedRead",
    MailIrm = "MailIrm",
    MailIrmForwarded = "MailIrmForwarded",
    MailIrmReplied = "MailIrmReplied",
    SmsSubmitted = "SmsSubmitted",
    SmsRoutedToDeliveryPoint = "SmsRoutedToDeliveryPoint",
    SmsRoutedToExternalMessagingSystem = "SmsRoutedToExternalMessagingSystem",
    SmsDelivered = "SmsDelivered",
    OutlookDefaultForContacts = "OutlookDefaultForContacts",
    AppointmentItem = "AppointmentItem",
    AppointmentRecur = "AppointmentRecur",
    AppointmentMeet = "AppointmentMeet",
    AppointmentMeetRecur = "AppointmentMeetRecur",
    AppointmentMeetNY = "AppointmentMeetNY",
    AppointmentMeetYes = "AppointmentMeetYes",
    AppointmentMeetNo = "AppointmentMeetNo",
    AppointmentMeetMaybe = "AppointmentMeetMaybe",
    AppointmentMeetCancel = "AppointmentMeetCancel",
    AppointmentMeetInfo = "AppointmentMeetInfo",
    TaskItem = "TaskItem",
    TaskRecur = "TaskRecur",
    TaskOwned = "TaskOwned",
    TaskDelegated = "TaskDelegated"
}

export enum MeetingSpaceTypeEnum {
    Public = "Public",
    Private = "Private"
}

export enum ParticipantActivityRole {
    Organizer = "Organizer",
    Attendee = "Attendee",
    Presenter = "Presenter"
}

export enum ParticipantActivityMediaType {
    AppSharing = "AppSharing",
    AudioVideo = "AudioVideo",
    Chat = "Chat",
    DataConf = "DataConf",
    Meeting = "Meeting",
    MeetingConf = "MeetingConf",
    PhoneConf = "PhoneConf",
    Focus = "Focus"
}

export enum ContentActivityType {
    Poll = "Poll",
    WhiteBoard = "WhiteBoard",
    QAndA = "QAndA",
    Chat = "Chat",
    Meeting = "Meeting",
    Annotations = "Annotations",
    SharedNotes = "SharedNotes"
}

export enum ContentActivityMediaType {
    AppSharing = "AppSharing",
    AudioVideo = "AudioVideo",
    Chat = "Chat",
    DataConf = "DataConf",
    Meeting = "Meeting",
    MeetingConf = "MeetingConf",
    PhoneConf = "PhoneConf"
}

export enum ContentActivityAcl {
    Organizer = "Organizer",
    Presenter = "Presenter",
    Everyone = "Everyone"
}

export enum SearchApplicationIdType {
    Outlook = "Outlook",
    Owa = "Owa",
    Paw = "Paw",
    Teamspace = "Teamspace",
    OneDrive = "OneDrive",
    Other = "Other"
}

export enum RefinerTypeType {
    None = "None",
    To = "To",
    From = "From",
    Folder = "Folder",
    HasAttachment = "HasAttachment",
    MailboxSource = "MailboxSource"
}

export enum SearchResultsPropertySetNameType {
    Default = "Default",
    Owa16 = "Owa16",
    Outlook16 = "Outlook16"
}

export enum ExecuteSearchSortOrderType {
    DateTime = "DateTime",
    Relevance = "Relevance"
}

export enum MatchOptionsType {
    FullString = "FullString",
    Prefix = "Prefix"
}

export enum PeopleSuggestionPersonType {
    Unknown = "Unknown",
    Person = "Person",
    DistributionList = "DistributionList",
    Room = "Room",
    Place = "Place",
    ModernGroup = "ModernGroup"
}

export enum ClientIdType {
    Web = "Web",
    Mobile = "Mobile",
    Tablet = "Tablet",
    Desktop = "Desktop",
    Exchange = "Exchange",
    Outlook = "Outlook",
    MacOutlook = "MacOutlook",
    POP3 = "POP3",
    IMAP4 = "IMAP4",
    Other = "Other",
    Lync = "Lync",
    OutlookService = "OutlookService",
    MacMail = "MacMail"
}

export enum EntityFeedbackEntityAddSourceType {
    None = "None",
    EntityRelevanceApi = "EntityRelevanceApi",
    EntityRelevanceApiCache = "EntityRelevanceApiCache",
    ActiveDirectory = "ActiveDirectory",
    ExplicitTyping = "ExplicitTyping",
    Paste = "Paste",
    LocalCacheAndEntityRelevanceApi = "LocalCacheAndEntityRelevanceApi",
    LocalCache = "LocalCache",
    Other = "Other"
}

export enum SystemDayOfWeek {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

export enum EmailReminderChangeType {
    None = "None",
    Added = "Added",
    Override = "Override",
    Deleted = "Deleted"
}

export enum EmailReminderSendOption {
    NotSet = "NotSet",
    User = "User",
    AllAttendees = "AllAttendees",
    Staff = "Staff",
    Customer = "Customer"
}

export enum InsightStatusType {
    Created = "Created",
    Active = "Active",
    Dismissed = "Dismissed",
    Invalid = "Invalid"
}

export enum EmptySuggestionReason {
    Unknown = "Unknown",
    AttendeesUnavailable = "AttendeesUnavailable",
    LocationsUnavailable = "LocationsUnavailable",
    OrganizerUnavailable = "OrganizerUnavailable",
    AttendeesUnavailableOrUnknown = "AttendeesUnavailableOrUnknown"
}

export enum AddInStateType {
    Flagged = "Flagged",
    OK = "OK",
    Removed = "Removed",
    Undefined = "Undefined",
    WithdrawingSoon = "WithdrawingSoon",
    Withdrawn = "Withdrawn"
}

export enum AADOfficeExtensionStatusType {
    OptionalDisabled = "OptionalDisabled",
    OptionalEnabled = "OptionalEnabled",
    Mandatory = "Mandatory",
    Undefined = "Undefined"
}

export enum OfficeClientCodeType {
}

export enum VersionType {
}

export enum OMEMessageRevocationStatus {
    None = "None",
    Success = "Success",
    Failed = "Failed",
    MessageNotFound = "MessageNotFound",
    PartialFailed = "PartialFailed",
    AlreadyRevoked = "AlreadyRevoked"
}
