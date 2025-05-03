import Image from "next/image";
import { redirect } from "next/navigation";
import { BorderCountries, TextInfo, Link, NoContent, FlagOff } from "@/components";
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
    return (
      <NoContent title="Country Not Found" icon={<FlagOff />} withButton>
        <p className="text-lg text-charcoal-black text-center dark:text-pure-white">
          We couldn’t find any information for the country you’re looking for.
        </p>
        <p className="text-lg text-charcoal-black text-center dark:text-pure-white">
          Please check the country ID in the URL or return to the countries list.
        </p>
      </NoContent>
    );
  }

  return (
    <section className="mt-9">
      <Link path="/" className="gap-2 w-36 p-3">
        <>
          <svg
            className="w-4 h-4 text-charcoal-black dark:text-pure-white"
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
        </>
      </Link>
      <div className="w-full my-12 flex justify-start items-start flex-col gap-9 xl:flex-row xl:items-center 2xl:gap-16">
        <Image
          className="w-full mx-auto md:h-[481px] max-w-[720px] shadow-md"
          src={country.flag}
          alt={country.name}
          width={768}
          height={550}
        />
        <div className="w-full max-w-[720px] mx-auto">
            <h1 className="font-bold text-charcoal-black text-3xl my-6 md:flex-grow xl:text-4xl dark:text-pure-white">{country.name}</h1>
            <div className="w-full flex justify-start items-start gap-8 flex-wrap sm:justify-between sm:flex-nowrap xl:justify-start">
              <div className="flex justify-start items-stretch flex-col gap-3">
                <TextInfo title="Native Name:" textClassName="sm:text-lg md:text-xl">{country.nativeName}</TextInfo>
                <TextInfo title="Population:" textClassName="sm:text-lg md:text-xl">{country.population}</TextInfo>
                <TextInfo title="Region:" textClassName="sm:text-lg md:text-xl">{country.region}</TextInfo>
                <TextInfo title="Sub Region:" textClassName="sm:text-lg md:text-xl">{country.subregion}</TextInfo>
                {country.capital && (
                  <TextInfo title="Capital:" textClassName="sm:text-lg md:text-xl">{country.capital}</TextInfo>
                )}
              </div>
              <div className="flex justify-start items-stretch flex-col gap-3">
                <TextInfo title="Top Level Domain:" textClassName="sm:text-lg md:text-xl">
                  {country.topLevelDomain.join(", ")}
                </TextInfo>
                <TextInfo title="Currencies:" textClassName="sm:text-lg md:text-xl">
                  {country.currencies.map((curr) => curr.name).join(", ")}
                </TextInfo>
                <TextInfo title="Languages:" textClassName="sm:text-lg md:text-xl">
                  {country.languages.map((lan) => lan.name).join(", ")}
                </TextInfo>
              </div>
            </div>
            {country.borders.length > 0 && (
              <div className="my-8">
                <h4 className="text-base font-bold text-charcoal-black mb-5 dark:text-pure-white">
                  Border Countries:
                </h4>
                <BorderCountries countries={country.borders} />
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
