export class mdl_GlobalPermissions {
  public userID: number;
  public roleID: number;
  public legalEntitesIDs: string;
  public branchIDs: string;
  public locationIDs: string;
  public rwfModulesIDs: string;
  public name: string;
  public notes: string;

  constructor() {
    this.userID = 0;
    this.roleID = 0;
    this.legalEntitesIDs = "";
    this.branchIDs = "";
    this.locationIDs = "";
    this.rwfModulesIDs = "";
    this.name = "";
    this.notes = "";
  }
}
