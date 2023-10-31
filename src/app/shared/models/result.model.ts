export enum responseCodeEnum {
  ok,
  error,
  warning,
  information,
  internalServerError,
  unauthorized
}


export class Result {
  public responseCode: responseCodeEnum;
  public message: string;
  public data: any;
  public tempData: any;

  constructor() {
    this.responseCode = responseCodeEnum.information;
    this.message = "";
    this.data = null;
    this.tempData = null;
  }
}
