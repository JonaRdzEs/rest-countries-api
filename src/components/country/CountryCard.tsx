import Image from "next/image";
import Link from "next/link";
import { TextInfo } from "./TextInfo";

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
      className="block shadow-md rounded-md max-w-96 h-full hover:scale-105 transition-all bg-pure-white dark:bg-deep-navy"
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
        <h4 className="font-bold text-charcoal-black text-center text-xl mb-3 dark:text-pure-white">
          {name}
        </h4>
        <TextInfo title="Population:" textClassName="text-sm sm:text-base">
          {population}
        </TextInfo>
        <TextInfo title="Region:" textClassName="text-sm sm:text-base">
          {region}
        </TextInfo>
        {capital && (
          <TextInfo title="Capital:" textClassName="text-sm sm:text-base">
            {capital}
          </TextInfo>
        )}
      </div>
    </Link>
  );
}
