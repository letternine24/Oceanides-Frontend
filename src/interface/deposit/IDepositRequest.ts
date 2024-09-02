export interface IDepositRequest {
  companyId: number;
  userId: number;
  username: string;
  amount: number;
  amountUsd: number;
  paymentPlatformId: number;
}
