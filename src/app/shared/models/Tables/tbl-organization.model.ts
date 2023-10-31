export class tbl_Organization {
  public id: number;
  public accountId: number;
  public legalName: string;
  public nameToBeDisplayed: string;
  public businessService: string;
  public active: boolean;
  public logo: string;
  public banner: string;
  public address: string;
  public address2: string;
  public phone: string;
  public businessStartDate: string;
  public contactPersonEmail: string;
  public companyEmail: string;
  public dateCreated: Date | null;
  public autoReplyEmail: string;
  public timeZone: string;
  public countryID: number;
  public dateFormat: number;
  public timeFormat: number;
  public dualReporting: boolean;
  public monthStartDay: number;
  public employeesLimit: number;
  public isNegativeLeaves: boolean;
  public clientID: string;
  public settlementAsPerWorkDays: boolean;
  public webLoginsLimit: number;
  public apiUrl: string;
  public urlIdentity: string;
  public licenseExpiryDate: Date;
  public website: string;
  public country: string;
  public region: string;
  public languages: string;
  public noOfBranches: number;
  public noOfDomains: number;
  public noOfEntities: number;
  public noOfLocations: number;
  public dateFormatString: string;
  public timeFormatString: string;
  public languageID: number;
  public isDepartmentLevels: boolean;
  public currencySymbol: string;
  public isLocationEnabled: boolean;
  public isDefaultAPI: boolean;
  public locationAPIKey: string;
  public incomeTaxStartMonth: number = 1;

  constructor() {
    this.id = 0;
    this.accountId = 0;
    this.legalName = "";
    this.nameToBeDisplayed = "";
    this.businessService = "";
    this.active = false;
    this.logo = "";
    this.banner = "";
    this.address = "";
    this.address2 = "";
    this.phone = "";
    this.businessStartDate = "";
    this.contactPersonEmail = "";
    this.companyEmail = "";
    this.dateCreated = null;
    this.autoReplyEmail = "";
    this.timeZone = "";
    this.countryID = 0;
    this.dateFormat = 0;
    this.timeFormat = 0;
    this.dualReporting = false;
    this.monthStartDay = 0;
    this.employeesLimit = 0;
    this.isNegativeLeaves = false;
    this.clientID = "";
    this.settlementAsPerWorkDays = false;
    this.webLoginsLimit = 0;
    this.apiUrl = "";
    this.urlIdentity = "";
    this.licenseExpiryDate = new Date();
    this.website = "";
    this.country = "";
    this.region = "";
    this.languages = "";
    this.noOfBranches = 0;
    this.noOfDomains = 0;
    this.noOfEntities = 0;
    this.noOfLocations = 0;
    this.dateFormatString = "";
    this.timeFormatString = "";
    this.languageID = 0;
    this.isDepartmentLevels = false;
    this.currencySymbol = "";
    this.isLocationEnabled = false;
    this.isDefaultAPI = false;
    this.locationAPIKey = "";
    this.incomeTaxStartMonth = 1;
  }
}
