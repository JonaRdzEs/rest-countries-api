"use client";

import { type ChangeEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import type { Region } from "@/types";

interface Props {
  regions: Region[];
}

export function RegionSelector({ regions }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const regionId = e.target.value;
    if (regionId) {
      params.set("regionId", regionId);
    } else {
      params.delete("regionId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      className="w-full max-w-48 py-2 px-3 h-12 bg-pure-white shadow-md rounded-sm text-charcoal-black  focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      defaultValue={searchParams.get("regionId") ?? ""}
      onChange={onSelectChange}
    >
      <option value="" selected>Filter by Region</option>
      {regions.map((region) => (
        <option key={region.id} value={region.id}>
          {region.name}
        </option>
      ))}
    </select>
  );
}
