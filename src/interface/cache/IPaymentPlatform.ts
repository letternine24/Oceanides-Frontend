export interface IPaymentPlatform {
  paymentPlatformId: number;
  paymentTypeId: number;
  paymentTypeName: string;
  paymentSourceID: number;
  companyId: number;
  paymentPlatformName: string;
  url: string;
  apiId: string;
  apiKey: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankSwiftCode: string;
  walletAddress: string;
  description: string;
  activeDeposit: boolean;
  activeWithdrawal: boolean;
}
