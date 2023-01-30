import airlineCompaniesRepository from '@/repositories/airlineCompanies.repository';
import { airlineCompanies, flights } from '@prisma/client';
import { NoAirlineCompanyError, NoAirlineCompanyIdError } from './error';

async function allAirlineCompanies(withFlights: boolean) {
  let airlineCompanies:
    | (airlineCompanies & { flights: flights[] })[]
    | airlineCompanies[];

  if (withFlights) {
    airlineCompanies = await airlineCompaniesRepository.findAllWithFlights();
  } else {
    airlineCompanies = await airlineCompaniesRepository.findAll();
  }

  if (airlineCompanies.length === 0) throw NoAirlineCompanyError();

  return airlineCompanies;
}

async function airlineCompany(id: number) {
  if (!id) throw NoAirlineCompanyIdError();

  return await airlineCompaniesRepository.findByIdWithFlights(id);
}

async function insertAirlineCompany(airlineCompaniesData: NewAirlineCompanies) {
  return await airlineCompaniesRepository.create(airlineCompaniesData);
}

const airlineCompaniesService = {
  allAirlineCompanies,
  airlineCompany,
  insertAirlineCompany,
};

export default airlineCompaniesService;

export type NewAirlineCompanies = Omit<airlineCompanies, 'id'>;
