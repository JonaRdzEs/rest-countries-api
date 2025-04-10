import { CountryList, Pagination } from "@/components";
import { getPaginatedCountries } from "@/actions";
//import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string,
  }
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const { countries = [], totalPages = 0 } = await getPaginatedCountries({ page });

  return (
    <div className="">
      <main className="p-3">
        <CountryList countries={countries} />
        <Pagination totalPages={totalPages} />
      </main>
    </div>
  );
}
