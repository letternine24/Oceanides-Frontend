export interface ICompany {
  companyId: number;
  companyName: string;
  domainUrl: string;
  active: boolean;
  cTraderDomainUrl: string;
  cTraderLogin: string;
  cTraderPassword: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  smtpFrom: string;
  emailVerificationTemplate: string;
  companyLogo: string;
  telegramGroupChatId: string;
  countryId: number;
  countryCode: string;
  currencyCode: string;
}
