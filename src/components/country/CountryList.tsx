import type { SimpleCountry } from "@/types";
import { CountryCard } from "./CountryCard";

interface Props {
  countries: SimpleCountry[],
}

export async function CountryList({ countries }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {countries.map((country) => (
        <li key={country.id}>
          <CountryCard {...country } region={country.region.name} />
        </li>
      ))}
    </ul>
  );
}