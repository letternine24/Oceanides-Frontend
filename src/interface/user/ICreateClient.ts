export interface ICreateClient {
  companyId: number;
  fullname?: string;
  username?: string;
  email?: string;
  contactNumber?: string;
  password?: string;
  countryId: number;
  referralCode?: string;
}
