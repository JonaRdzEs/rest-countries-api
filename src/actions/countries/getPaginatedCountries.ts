"use server";

import prisma from "@/lib/prisma";

interface QueryParams {
  regionId?: string,
  name?: string,
  take?: number,
  page?: number
}

export async function getPaginatedCountries({ regionId  , name , page = 1, take =  25 }: QueryParams) {
  
  const queryFilters = buildFilters({ regionId, name }) ?? {};
  
  try {
    const [count, countries] = await Promise.all([
      prisma.country.count(queryFilters),
      prisma.country.findMany({
        take,
        skip: (page - 1) * take,
        select: {
          id: true,
          name: true,
          population: true,
          region: true,
          capital: true,
          Flag: {
            select: {
              url: true,
            },
          },
        },
        orderBy: {
          name: "asc"
        },
        ...queryFilters,
      })
    ]);

    const totalPages = Math.ceil(count / take);

    const formattedCountries = countries.map((country) => ({
      id: country.id,
      name: country.name,
      capital: country.capital,
      population: country.population,
      region: country.region,
      flag: country.Flag[0].url,
    }));

    return {
      ok: true,
      totalPages,
      countries: formattedCountries,
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error fetching countries",
    };
  }
}

const buildFilters = ({ regionId = "", name = "" }: { regionId?: string, name?: string }) => {
  const nameFilter = {
    name: {
      contains: name,
      mode: "insensitive"
    }
  };
  const regionFilter = { regionId };

  if(regionId && name) {
    return {
      where: {
        ...regionFilter,
        ...nameFilter
      }
    }
  } else if(regionId) {
    return {
      where: { ...regionFilter }
    }
  } else if (name) {
    return {
      where: { ...nameFilter }
    }
  }
};