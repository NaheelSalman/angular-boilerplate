export class mdl_Authenticate {
  public userName: string;
  public password: string;
  public fcmID: string;
  public deviceID: string;
  public deviceInfo: string;

  constructor() {
    this.userName = "";
    this.password = "";
    this.fcmID = "";
    this.deviceID = "";
    this.deviceInfo = "";
  }
}

export class mdl_Account {
  public apiUrl: string | null;
  public urlIdentity: string|null;

  constructor() {
    this.apiUrl =null;
    this.urlIdentity = null;
  }
}

export class mdl_AuthenticateOrganization {
  public code: string;

  constructor() {
    this.code = "";
  }
}

export class mdl_Refresh {
  public refreshToken: string;
  public uniqueID: string | null;

  constructor() {
    this.refreshToken = "";
    this.uniqueID = null;
  }
}
