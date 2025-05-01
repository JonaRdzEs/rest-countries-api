"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import type { Region } from "@/types";

interface Props {
  regions: Region[];
}

export function RegionSelector({ regions }: Props) {
  const [loaded, setLoaded] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setLoaded(true)
  }, []);

  const onSelectChange = (value?: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("regionId", value);
    } else {
      params.delete("regionId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const regionId: string = searchParams.get("regionId") ?? "";
  const options = [...regions.map((region) => ({ value: region.id, label: region.name }))]

  return loaded && (
    <Select 
      unstyled 
      isSearchable={false} 
      isClearable
      className="w-full max-w-52 py-2 px-3 h-12 bg-pure-white shadow-md rounded-md text-charcoal-black" 
      options={options}
      defaultValue={options.find(opt => opt.value === regionId)}
      placeholder="Filter by Region"
      onChange={(value) => onSelectChange(value?.value)}
      classNames={{
        container: (state) => state.isFocused ? "border border-charcoal-black" : "",
        clearIndicator: () => "mr-2",
        menu: () => "bg-pure-white shadow-md rounded-md mt-0.5 -ml-3 p-0",
        option: (state) =>  `${state.isSelected ? "bg-light-active" : "hover:bg-light-hover"} p-1.5 pl-4  hover:cursor-pointer`,
      }}
    />
  );
}
