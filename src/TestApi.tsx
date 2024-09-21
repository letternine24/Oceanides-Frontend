import { useFetchCompanies } from "./composables/cache/useFetchCompanies";
import { useFetchCountries } from "./composables/cache/useFetchCountries";
import { useFetchExternalPaymentTypes } from "./composables/cache/useFetchExternalPaymentTypes";
import { useFetchPaymentPlatforms } from "./composables/cache/useFetchPaymentPlatforms";
import { useFetchPaymentStatus } from "./composables/cache/useFetchPaymentStatus";
import { useFetchPayzPaymentMethod } from "./composables/cache/useFetchSmilePayzPaymentMethod";

const TestApi = () => {
  const { companies } = useFetchCompanies();
  const { countries } = useFetchCountries();
  const { externalPaymentTypes } = useFetchExternalPaymentTypes();
  const { paymentPlatforms } = useFetchPaymentPlatforms();
  const { paymentStatuses } = useFetchPaymentStatus();
  const { payzPaymentMethod } = useFetchPayzPaymentMethod();

  return <div>TestApi</div>;
};

export default TestApi;
