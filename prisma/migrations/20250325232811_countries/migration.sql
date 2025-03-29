-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topLevelDomain" TEXT[],
    "alpha2Code" TEXT NOT NULL,
    "alpha3Code" TEXT NOT NULL,
    "callingCodes" TEXT[],
    "capital" TEXT,
    "altSpellings" TEXT[],
    "subregion" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "demonym" TEXT NOT NULL,
    "area" INTEGER,
    "timezones" TEXT[],
    "borders" TEXT[],
    "nativeName" TEXT NOT NULL,
    "numericCode" TEXT NOT NULL,
    "cioc" TEXT,
    "independent" BOOLEAN NOT NULL,
    "gini" INTEGER,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "iso639_1" TEXT,
    "iso639_2" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" SERIAL NOT NULL,
    "br" TEXT NOT NULL,
    "pt" TEXT NOT NULL,
    "nl" TEXT NOT NULL,
    "hr" TEXT NOT NULL,
    "fa" TEXT,
    "de" TEXT NOT NULL,
    "es" TEXT NOT NULL,
    "fr" TEXT NOT NULL,
    "ja" TEXT NOT NULL,
    "it" TEXT NOT NULL,
    "hu" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegionalBloc" (
    "id" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "otherNames" TEXT[],
    "otherAcronyms" TEXT[],
    "countryId" TEXT NOT NULL,

    CONSTRAINT "RegionalBloc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_countryId_key" ON "Region"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_countryId_key" ON "Translation"("countryId");

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Currency" ADD CONSTRAINT "Currency_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionalBloc" ADD CONSTRAINT "RegionalBloc_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
