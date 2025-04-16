import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string | null;
  flag: string;
}

export function CountryCard({ id, name, flag, population, region, capital }: Props) {
  return (
    <Link
      href={`/countries/${id}`}
      className="block shadow-md rounded-md max-w-96 h-full hover:scale-105 transition-all"
    >
      <Image
        width={384}
        height={192}
        src={flag}
        alt={name}
        className="rounded-tl-md rounded-tr-md object-cover shadow-sm"
        style={{ width: "384px", height: "192px" }}
      />
      <div className="py-3 px-6 flex justify-stretch items-start gap-1 flex-col">
        <h4 className="font-bold text-charcoal-black text-center text-xl mb-3">
          {name}
        </h4>
        <div className="flex justify-start items-center gap-1">
          <span className="font-semibold text-charcoal-black text-sm">
            Population:
          </span>
          <span className="text-sm">{population}</span>
        </div>
        <div className="flex justify-start items-center gap-1">
          <span className="font-semibold text-charcoal-black text-sm">
            Region:
          </span>
          <span className="text-sm">{region}</span>
        </div>
        {capital && (
          <div className="flex justify-start items-center gap-1">
            <span className="font-semibold text-charcoal-black text-sm">
              Capital:
            </span>
            <span className="text-sm">{capital}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
