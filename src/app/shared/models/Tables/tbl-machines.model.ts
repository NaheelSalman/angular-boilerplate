export class tbl_Machines {
  id: number = 0;
  machineAlias: string = '';
  enrollNo: string = '';
  utilityLoginName: string = '';
  utilityLoginPassword: string = '';
  organizationID: number = 0;
  connectionType: string = '';
  ip: string = '';
  serialPort: string = '';
  port: string = '';
  baudrate: string = '';
  machineNumber: string = '';
  isHost: boolean = false;
  enabled: boolean = false;
  commPassword: string = '';
  userCount: number | null = null;
  isAndroid: string = '';
  checkInCode: number = 0;
  checkOutCode: number = 0;
  breakInCode: number = 0;
  breakOutCode: number = 0;
  autoConnect: string = '';
  machineID: number = 0;
  legalEntityID: string = '';
  branchID: string = '';
  locationID: number | null = null;
  isActive: boolean = false;

  constructor() {
    // Initialize properties with default values if needed
    this.id = 0;
    this.machineAlias = '';
    this.enrollNo = '';
    this.utilityLoginName = '';
    this.utilityLoginPassword = '';
    this.organizationID = 0;
    this.connectionType = '';
    this.ip = '';
    this.serialPort = '';
    this.port = '';
    this.baudrate = '';
    this.machineNumber = '';
    this.isHost = false;
    this.enabled = false;
    this.commPassword = '';
    this.userCount = null;
    this.isAndroid = '';
    this.checkInCode = 0;
    this.checkOutCode = 0;
    this.breakInCode = 0;
    this.breakOutCode = 0;
    this.autoConnect = '';
    this.machineID = 0;
    this.legalEntityID = '';
    this.branchID = '';
    this.locationID = null;
    this.isActive = false;
  }
}

export class mdl_MachineMapping {
  enrollNo: string = '';
  id: number = 0;
  machineAlias: string = '';
  connectionType: string = '';
  ip: string | null = null;
  serialPort: number | null = null;
  port: number | null = null;
  baudrate: number | null = null;
  machineNumber: number = 0;

  constructor() {
    // Initialize properties with default values if needed
    this.enrollNo = '';
    this.id = 0;
    this.machineAlias = '';
    this.connectionType = '';
    this.ip = null;
    this.serialPort = null;
    this.port = null;
    this.baudrate = null;
    this.machineNumber = 0;
  }
}

