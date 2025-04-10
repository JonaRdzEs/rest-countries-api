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

  return (
    <>
      <nav aria-label="Countries page navigation">
        <ul>
          <li>
            <Link
              href={createPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled={currentPage <= 1}
            >
              {"<"}
            </Link>
          </li>
          {pages.map((page, index) => (
            <li key={`${page}-${index}`}>
              <Link href={createPageUrl(page)}>{page}</Link>
            </li>
          ))}
          <li>
            <Link
              href={createPageUrl(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            >
              {">"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
