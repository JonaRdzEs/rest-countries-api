"use client";

import { useSearchParams, usePathname, redirect } from "next/navigation";
import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";

interface Props {
  totalPages: number;
}

export function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramsPage = searchParams.get("page") ?? "1";
  const currentPage = Number(paramsPage);

  // validate page param
  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    redirect(pathname);
  }

  const pages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: string | number): string => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 0) {
      return pathname;
    }

    if (Number(pageNumber) > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if(totalPages === 1) return;

  return (
    <>
      <nav aria-label="Countries page navigation" className="my-7 flex justify-center items-center">
        <ul className="flex justify-center items-center flex-wrap gap-1 w-full max-w-md sm:gap-3">
          <li>
            <Link
              href={createPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled={currentPage <= 1}
              className="w-7 h-7 flex justify-center items-center rounded-md text-charcoal-black hover:bg-light-hover"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </Link>
          </li>
          {pages.map((page, index) => (
            <li key={`${page}-${index}`} className={`text-xs sm:text-md md:text-base xl:text-lg`}>
              <Link
                href={createPageUrl(page)}
                className={`w-7 h-7 flex justify-center items-center rounded-md ${
                  currentPage === page ? "bg-light-active hover:bg-light-active" : "hover:bg-light-hover"
                }`}
              >
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={createPageUrl(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className="w-7 h-7 flex justify-center items-center rounded-md hover:bg-light-hover text-charcoal-black"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
