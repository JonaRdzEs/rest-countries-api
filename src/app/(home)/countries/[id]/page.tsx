import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BorderCountries, TextInfo } from "@/components";
import { getCountryById } from "@/actions";

interface Props {
  params: {
    id: string;
  };
}

export default async function CountryPage({ params }: Props) {
  const { ok, country } = await getCountryById(params.id);

  if (!ok) {
    redirect("/");
  }

  if (!country) {
    return <h1>Country does not exists, go back to the country list</h1>;
  }

  return (
    <section className="mt-9">
      <Link
        href="/"
        className="shadow-md rounded-sm p-2 flex justify-center items-center gap-2 w-36 bg-pure-white"
      >
        <svg
          className="w-4 h-4 text-charcoal-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        <span>Back</span>
      </Link>
      <Image
        className="w-full mx-auto my-12 md:h-[450px] shadow-sm max-w-3xl"
        src={country.flag}
        alt={country.name}
        width={768}
        height={550}
      />
      <h1 className="font-bold text-charcoal-black text-2xl">{country.name}</h1>
      <div className="my-6">
        <TextInfo title="Native Name:">{country.nativeName}</TextInfo>
        <TextInfo title="Population:">{country.population}</TextInfo>
        <TextInfo title="Region:">{country.region}</TextInfo>
        <TextInfo title="Sub Region:">{country.subregion}</TextInfo>
        {country.capital && (
          <TextInfo title="Capital:">{country.capital}</TextInfo>
        )}
      </div>
      <div className="mb-8">
        <TextInfo title="Top Level Domain:">{country.topLevelDomain.join(", ")}</TextInfo>
        <TextInfo title="Currencies:">{country.currencies.map((curr) => curr.name).join(", ")}</TextInfo>
        <TextInfo title="Languages:">{country.languages.map((lan) => lan.name).join(", ")}</TextInfo>
      </div>
      {country.borders.length > 0 && (
        <>
          <h4 className="text-base font-bold text-charcoal-black mb-3">Border Countries:</h4>
          <BorderCountries countries={country.borders} />
        </>
      )}
    </section>
  );
}
