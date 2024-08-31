import React from "react";
import { useFetch } from "@composables/useFetch";
import { ApiEndpoints } from "@enum/apiEndpoints";

interface Company {
  id: number;
  name: string;
  // Define other properties as needed
}

const CompaniesList: React.FC = () => {
  const { data, loading, error } = useFetch<Company[]>(
    ApiEndpoints.GetCompanies
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((company) => (
        <li key={company.id}>{company.name}</li>
      ))}
    </ul>
  );
};

export default CompaniesList;
