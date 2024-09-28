export interface IUpdateUserPasswordRequest {
  userId: number;
  companyId: number;
  oldPassword: string;
  newPassword: string;
}
