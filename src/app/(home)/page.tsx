import { CountryList, Pagination } from "@/components";
import { getPaginatedCountries, getRegions } from "@/actions";
import { SearchInput, RegionSelector, NoContent, ZoomExclamation } from "@/components";

interface Props {
  searchParams: {
    page?: string;
    country?: string;
    regionId?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const parsedPage = parseInt(searchParams.page ?? "");
  const page = isNaN(parsedPage) ? 1 : parsedPage;
  const country = searchParams.country;
  const regionId = searchParams.regionId;

  const [countriesResp, regionsResp] = await Promise.all([
    getPaginatedCountries({ page, regionId, name: country }),
    getRegions(),
  ]);

  const { countries, totalPages } = countriesResp;
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
        <NoContent title="Country Not Found" icon={<ZoomExclamation />}>
          <p className="text-lg text-charcoal-black text-center">
            Oops! The country you’re looking for doesn’t seem to exist. It might
            have been removed, renamed, or never existed at all.
          </p>
          <p className="text-lg text-charcoal-black text-center">
            Try searching again to explore other countries.
          </p>
        </NoContent>
      )}
    </div>
  );
}
