export interface IKycVerificationRequest {
  CompanyId: number;
  UserId?: number;
  FirstName: string;
  LastName: string;
  Email: string;
  ContactNumber: string;
  DateOfBirth: string;
  Address: string;
  Nationality: string;
  DocumentType: string;
  FrontKyc: string;
  BackKyc: string;
}
