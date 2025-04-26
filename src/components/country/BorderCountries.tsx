import type { BorderCountry } from "@/types"
import { Link } from "../link/Link";

interface Props {
  countries: BorderCountry[]
}

export function BorderCountries({ countries }: Props) {
  
  if(countries.length === 0) return;

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap sm:justify-start">
      {countries.map(({ id, name }) => (
        <Link path={`/countries/${id}`} key={id} className="p-3">
          {name}
        </Link>
      ))}
    </div>
  )
}