import type { SimpleCountry } from "@/types";
import { CountryCard } from "./CountryCard";

interface Props {
  countries: SimpleCountry[],
}

export async function CountryList({ countries }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-5 place-items-center place-content-stretch mt-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <li key={country.id} className="h-full">
          <CountryCard {...country } region={country.region.name} />
        </li>
      ))}
    </ul>
  );
}