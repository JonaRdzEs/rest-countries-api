import { CountryList, Pagination } from "@/components";
import { getPaginatedCountries, getRegions } from "@/actions";
import { SearchInput, RegionSelector } from "@/components";
//import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
    country?: string;
    regionId?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const country = searchParams.country;
  const regionId = searchParams.regionId;

  const [countriesResp, regionsResp] = await Promise.all([
    getPaginatedCountries({ page, regionId, name: country }),
    getRegions(),
  ]);

  const { countries = [], totalPages = 0 } = countriesResp;
  const { regions = [] } = regionsResp;

  return (
    <div className="mt-6">
      <div className="flex justify-start gap-3 sm:justify-between items-stretch flex-wrap">
        <SearchInput />
        <RegionSelector regions={regions} />
      </div>
      {totalPages > 0 ? (
        <>
          <CountryList countries={countries} />
          <Pagination totalPages={totalPages} />
        </>
      ) : (
        <h1>Country does not exist</h1>
      )}
    </div>
  );
}
