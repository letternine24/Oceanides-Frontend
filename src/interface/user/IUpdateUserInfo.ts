export interface IUpdateUserInfoRequest {
  userId: number | undefined;
  companyId: number;
  fullName: string;
  contactNumber: string;
  dateOfBirth: string;
}
