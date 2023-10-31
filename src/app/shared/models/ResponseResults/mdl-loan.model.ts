import { Utility } from "../../helpers/utility";
import { mdl_EmployeeLeaves } from "../Requests/mld-employee-leaves.model";
import { mdl_ApprovalFlowAccessControl, mdl_ApprovalRequests } from "./mdl-approval-requests.model";

export class mdl_Loan {
  public id!: number;
  public employeeID!: number;
  public employeeName!: string;
  public amount!: number;
  public amountRequired!: number;
  public loanTypeID!: number;
  public noOfInstallments!: number;
  public installmentAmount!: number;
  public dateCreated!: Date;
  public reason!: string;
  public bankAndChequeNo!: string;
  public chequeDate?: Date;
  public loanApproveDate?: Date;
  public loanStartDate?: Date;
  public voucherGenerated!: boolean;
  public statusID!: number;
  public actionBy!: number;
  public actionDate!: Date;
  public modifiedBy!: number;
  public dateModified?: Date;
  public approvedBy!: number;
  public isCompleted!: boolean;
  public approversJson!: string;
  public actionDetailsJson!: string;
  public approvalFlowDetails: mdl_ApprovalRequests[] = [];
  public loanApprovals: mdl_LoanApprovals[] = [];
  public approvalFlowAccess: mdl_ApprovalFlowAccessControl = new mdl_ApprovalFlowAccessControl();
  public organizationID!: number;
  public userID!: number;
  public sequenceNo!: number;
  public statusName!: string;
  public isSelected!: boolean;
  public comments!: string;
  public loanWaiverJson!: string;
  public leaveDetailsJson!: string;
  public loanPaymentsJson!: string;
  public loanWaiverDetails: mdl_LoanWaiver[] = [];
  public leaveDetails: mdl_EmployeeLeaves[] = [];
  public loanPaymentDetails: mdl_LoanPayment[] = [];
  public paramStatusID!: number;
  public hireDate?: Date;
  public loanType!: string;
  public remainingAmount: string = Utility.decimalToString(this.loanPaymentDetails != null ? this.amount - this.loanPaymentDetails.reduce((sum, x) => sum + x.amount, 0) : this.amount);
  public paidAmount: string = Utility.decimalToString(this.loanPaymentDetails != null ? this.loanPaymentDetails.reduce((sum, x) => sum + x.amount, 0) : 0);
  public paid!: number;
}

export class mdl_LoanApprovals {
  public id!: number;
  public employeeID!: number;
  public employeeName!: string;
  public loanID!: number;
  public amount!: number;
  public amountRequired!: number;
  public loanTypeID!: number;
  public noOfInstallments!: number;
  public installmentAmount!: number;
  public dateCreated!: Date;
  public reason!: string;
  public bankAndChequeNo!: string;
  public chequeDate?: Date;
  public loanApproveDate?: Date;
  public loanStartDate?: Date;
  public voucherGenerated!: boolean;
  public statusID!: number;
  public actionBy!: number;
  public actionDate!: Date;
  public modifiedBy!: number;
  public dateModified?: Date;
  public approvedBy!: number;
  public isCompleted!: boolean;
  public comments!: string;
}

export class mdl_LoanParams {
  public id!: number;
  public employeeID!: number;
  public loanID!: number;
  public startDate!: Date;
  public endDate!: Date;
  public legalEntityIDs!: string;
  public branchIDs!: string;
  public locationIDs!: string;
  public statusID!: number;
  public organizationID!: number;
  public userID!: number;
  public isAdmin!: boolean;
  public selectedEmployeeID!: number;
}

export class mdl_LoanType {
  public id!: number;
  public loanTypeName!: string;
  public dateCreated!: Date;
  public createdBy!: number;
  public organizationID!: number;
  public dateModified!: Date;
  public modifiedBy!: number;
  public isActive!: boolean;
}

export class mdl_LoanWaiver {
  public id!: number;
  public employeeID!: number;
  public loanWaiverDate!: Date;
  public dateCreated!: Date;
  public waiverBy!: number;
  public loanID!: number;
  public organizationID!: number;
  public isDelete!: boolean;
  public employeeName!: string;
  public month!: number;
  public year!: number;
}

export class mdl_LoanPayment {
  public id!: number;
  public loanID!: number;
  public salaryPaymentID!: number;
  public amount!: number;
  public dateCreated!: Date;
  public paymentMonth!: Date;
  public employeeID!: number;
  public organizationID!: number;
  public isDelete!: boolean;
  public month!: number;
  public year!: number;
}
