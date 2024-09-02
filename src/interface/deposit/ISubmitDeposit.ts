export interface ISubmitDeposit {
  companyId: number;
  userId: number;
  amount: number;
  amountUsd: number;
  paymentPlatformId: number;
  transactionId: string;
  receipt: string;
}
