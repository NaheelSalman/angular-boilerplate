export class tbl_EmployeeQualifications {
  id: number = 0;
  employeeID: number | null = null;
  degreeName: string = '';
  degreeTitle: string = '';
  specialization: string = '';
  percentageGPA: string = '';
  passingYear: number = 0;
  boardUniversity: string = '';

  constructor() {
    // Initialize properties with default values if needed
    this.id = 0;
    this.employeeID = null;
    this.degreeName = '';
    this.degreeTitle = '';
    this.specialization = '';
    this.percentageGPA = '';
    this.passingYear = 0;
    this.boardUniversity = '';
  }
}
export class tbl_EmployeeEmergencyContact {
  employeeID: number = 0;
  name: string = '';
  contactNo: string = '';
  address: string = '';

  constructor() {
    // Initialize properties with default values if needed
    this.employeeID = 0;
    this.name = '';
    this.contactNo = '';
    this.address = '';
  }
}
