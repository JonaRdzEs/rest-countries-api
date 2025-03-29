/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "../lib/prisma";
import countries from "./data.json";

const regions: string[] = [
  "Africa",
  "Americas",
  "Antarctic",
  "Antarctic Ocean",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

async function main(): Promise<void> {
  await Promise.all([
    prisma.currency.deleteMany(),
    prisma.flag.deleteMany(),
    prisma.language.deleteMany(),
    prisma.regionalBloc.deleteMany(),
    prisma.translation.deleteMany(),
  ]);

  await prisma.country.deleteMany();
  await prisma.region.deleteMany();

  const addedRegionsIds = await prisma.region.createManyAndReturn({
    data: regions.map((region) => ({ name: region })),
    select: {
      id: true,
    },
  });

  try {
    const countriesPromises = countries.map(async (country) => {
      const {
        flags,
        region,
        currencies,
        languages,
        translations,
        flag,
        regionalBlocs,
        latlng,
        ...rest
      } = country;
      const regionIndex = regions.findIndex((r) => r === region);
      const addedCountry = await prisma.country.create({
        data: {
          ...rest,
          latitude: latlng?.[0],
          longitude: latlng?.[1],
          regionId: addedRegionsIds[regionIndex].id,
        },
      });

      const countryId = addedCountry.id;
      const createFlags = () => {
        return prisma.flag.createMany({
          data: Object.values(flags).map((url) => ({ url, countryId })),
        });
      };

      const createCurrencies = async () => {
        return prisma.currency.createMany({
          data: currencies?.map((c) => ({ ...c, countryId })) ?? [],
        });
      };

      const createLanguages = async () => {
        return prisma.language.createMany({
          data: languages?.map((l) => ({ ...l, countryId })) ?? [],
        });
      };

      const createTranslations = async () => {
        return prisma.translation.create({
          data: {
            ...translations,
            countryId,
          },
        });
      };

      const createRegionalBlocs = async () => {
        return prisma.regionalBloc.createMany({
          data:
            regionalBlocs?.map((rb) => ({
              ...rb,
              countryId,
            })) ?? [],
        });
      };

      await Promise.all([
        createFlags(),
        createCurrencies(),
        createLanguages(),
        createTranslations(),
        createRegionalBlocs(),
      ]);
    });

    await Promise.all(countriesPromises);
    console.log("Seed executed successfully");
  } catch (error) {
    console.log("Error running seed");
    console.log(error);
  }
}

((): void => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
