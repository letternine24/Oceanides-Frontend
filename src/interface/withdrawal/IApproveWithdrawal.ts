export interface IApproveWithdrawalRequest {
  withdrawalId: number;
  companyId: number;
  userId: number;
  currencyCode: string;
  amount: number;
  amountUsd: number;
  paymentPlatformId: number;
  transactionId: string;
}
