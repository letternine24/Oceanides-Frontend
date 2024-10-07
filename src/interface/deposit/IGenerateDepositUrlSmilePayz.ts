export interface IGenerateDepositUrlSmilePayz {
    userId: number;
    cTraderLogin: number;
    username: string;
    email: string;
    companyId: number;
    paymentPlatformId: number;
    amount: number;
    amountUsd: number;
    currencyCode: string;
    paymentMethodCode: string
  }
  