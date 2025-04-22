import Link from "next/link"
import type { BorderCountry } from "@/types"

interface Props {
  countries: BorderCountry[]
}

export function BorderCountries({ countries }: Props) {
  
  if(countries.length === 0) return;

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {countries.map(({ id, name }) => (
        <Link href={`/countries/${id}`} key={id} className="shadow-md rounded-sm p-3 flex justify-center items-center gap-2 bg-pure-white">
          {name}
        </Link>
      ))}
    </div>
  )
}