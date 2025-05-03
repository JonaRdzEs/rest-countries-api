"use client";

import { type ChangeEvent } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { debounce } from "@/utils";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const countryName = e.target.value;
    if(countryName) {
      params.set("country", countryName);
      params.delete("page");
    } else {
      params.delete("country");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full h-12 max-w-md relative overflow-hidden shadow-md">
      <svg
        className="w-5 h-5 text-slate-gray absolute left-4 top-3 dark:text-pure-white"
        aria-hidden="true"
        focusable={false}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>

      <input
        className="w-full h-full py-2 pl-11 pr-4 text-slate-gray rounded-md dark:bg-deep-navy dark:text-pure-white"
        defaultValue={searchParams.get("country") ?? ""}
        onChange={debounce((e: ChangeEvent<HTMLInputElement>) => handleSearch(e), 500)}
        placeholder="Search for a country..."
      />
    </div>
  );
}
