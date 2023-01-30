-- CreateTable
CREATE TABLE "airlineCompanies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "acronym" VARCHAR(3) NOT NULL,

    CONSTRAINT "airlineCompanies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "airports" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "acronym" VARCHAR(3) NOT NULL,

    CONSTRAINT "airports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "acronym" VARCHAR(3) NOT NULL,
    "airlineCompanyId" INTEGER NOT NULL,
    "departureAirportId" INTEGER NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "arrivalAirportId" INTEGER NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "airlineCompanies_acronym_key" ON "airlineCompanies"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "airports_acronym_key" ON "airports"("acronym");

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_airlineCompanyId_fkey" FOREIGN KEY ("airlineCompanyId") REFERENCES "airlineCompanies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_arrivalAirportId_fkey" FOREIGN KEY ("arrivalAirportId") REFERENCES "airports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_departureAirportId_fkey" FOREIGN KEY ("departureAirportId") REFERENCES "airports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
