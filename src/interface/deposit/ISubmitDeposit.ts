export interface ISubmitDeposit {
  companyId: number;
  currencyCode: string,
  userId: number;
  amount: number;
  amountUsd: number;
  paymentPlatformId: number;
  transactionId: string;
  receipt: string;
}
