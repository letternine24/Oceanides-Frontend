export enum KycStatus {
  NotSubmitted = 0,
  PendingApproval = 1,
  Approved = 3,
  CancelledByAdmin = 4,
}

export const getKYCStatusText = (status: KycStatus): string => {
  switch (status) {
    case KycStatus.NotSubmitted:
      return "User has not submitted yet.";
    case KycStatus.PendingApproval:
      return "Account Status: Submitted, pending approval";
    case KycStatus.Approved:
      return "Completed and approved.";
    case KycStatus.CancelledByAdmin:
      return "Account Status: Cancelled by the admin.";
    default:
      return "Unknown status";
  }
};
