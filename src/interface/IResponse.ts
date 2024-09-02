export interface IResponse {
  responseCode: number;
  responseMessage: string;
  data: any | null;
  dataList: any[] | null;
}
