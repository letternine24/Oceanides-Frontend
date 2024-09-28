export enum ApiEndpoints {
  // Cache
  ReloadMasterCache = "/api/Cache/ReloadMasterCache",
  GetCompanies = "/api/Cache/GetCompanies",
  GetCountries = "/api/Cache/GetCountries",
  GetCurrencies = "/api/Cache/GetCurrencies",
  GetStatuses = "/api/Cache/GetStatuses",
  GetExternalPaymentTypes = "/api/Cache/GetExternalPaymentTypes",
  GetPaymentPlatforms = "/api/Cache/GetPaymentPlatforms",
  GetSmilePayzPaymentMethod = "/api/Cache/GetSmilePayzPaymentMethod",

  // Deposit
  GenerateDepositUrlEss = "/api/Deposit/GenerateDepositUrlEss",
  DepositRequest = "/api/Deposit/DepositRequest",
  SubmitDeposit = "/api/Deposit/SubmitDeposit",

  // Test ???
  SendEmailVerificationTest = "/api/Test/SendEmailVerificationTest",
  SendTelegramMessageTest = "/api/Test/SendTelegramMessageTest",
  GcsFileExistsTest = "/api/Test/GcsFileExistsTest",
  GcsListBucketObjectsTest = "/api/Test/GcsListBucketObjectsTest",
  EssCreateDepositFormTest = "/api/Test/EssCreateDepositFormTest",

  // User
  CreateClient = "/api/User/CreateClient",
  Login = "/api/User/Login",
  ResendVerificationEmail = "/api/User/ResendVefificationEmail",
  VerifyEmail = "/api/User/VerifyEmail",
  KycVerification = "/api/User/KycVerification",
  GetUserInfo = "/api/User/GetUserInfo",
  UpdateUserInfo = "/api/User/UpdateUserInfo",
  UpdateUserPassword = "/api/User/UpdateUserPassword",
  GetReferralHierarchy = "/api/User/GetReferralHierarchy",
}
