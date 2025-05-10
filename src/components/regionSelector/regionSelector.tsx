"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import type { Region } from "@/types";

interface Props {
  regions: Region[];
}

export function RegionSelector({ regions }: Props) {
  const [mounted, setMounted] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setMounted(true);
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

  if(!mounted) {
    return (
      <div className="w-full max-w-52 h-12 rounded-md animate-pulse bg-light-hover dark:bg-dark-hover" />
    )
  }

  return (
    <Select 
      unstyled 
      isSearchable={false} 
      isClearable
      className="w-full max-w-52 py-2 px-3 h-12 bg-pure-white shadow-md rounded-md text-charcoal-black dark:text-pure-white dark:bg-deep-navy" 
      options={options}
      defaultValue={options.find(opt => opt.value === regionId)}
      placeholder="Filter by Region"
      onChange={(value) => onSelectChange(value?.value)}
      classNames={{
        container: (state) => state.isFocused ? "border border-charcoal-black dark:border-pure-white" : "",
        clearIndicator: () => "mr-2",
        menu: () => "bg-pure-white shadow-md rounded-md mt-1 -ml-3 p-0 dark:bg-deep-navy",
        option: (state) =>  `${state.isSelected ? "bg-light-active dark:bg-dark-active" : "hover:bg-light-hover dark:hover:bg-dark-hover"} p-1.5 pl-4  hover:cursor-pointer`,
      }}
    />
  );
}
