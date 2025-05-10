"use server";

import prisma from "@/lib/prisma";

export async function getCountryById(id: string) {
  try {
    const country = await prisma.country.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        nativeName: true,
        population: true,
        subregion: true,
        capital: true,
        topLevelDomain: true,
        borders: true,
        region: true,
        Flag: {
          select: {
            url: true,
          },
        },
        Currency: {
          select: {
            id: true,
            name: true,
            symbol: true,
          },
        },
        Language: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!country) {
      return {
        ok: true,
        country: null,
      };
    }

    let borderCountries: { id: string; name: string }[] = [];
    if (country.borders.length > 0) {
      borderCountries = await prisma.country.findMany({
        where: {
          alpha3Code: {
            in: country.borders,
          },
        },
        select: {
          id: true,
          name: true,
        },
      });
    }
    const { Flag, Currency, Language, region, ...rest } = country;

    const formattedCountry = {
      ...rest,
      region: region.name,
      flag: Flag[0].url,
      currencies: Currency,
      languages: Language,
      borders: borderCountries,
    };

    return {
      ok: true,
      country: formattedCountry,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error fetching country",
    };
  }
}
