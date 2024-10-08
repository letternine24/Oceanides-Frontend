export interface IWithdrawalRequest {
  companyId: number;
  userId: number;
  amount: number;
  amountUsd: number;
  paymentPlatformId: number;
  currencyCode: string;
  otpValue: string;
}
