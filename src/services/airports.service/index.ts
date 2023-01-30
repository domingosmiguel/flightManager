import airportsRepository from '@/repositories/airports.repository';
import { airports, flights } from '@prisma/client';
import { NoAirportError, NoAirportIdError } from './error';

async function allAirports(withFlights: boolean) {
  let airports: (airports & { flights: flights[] })[] | airports[];

  if (withFlights) {
    airports = await airportsRepository.findAllWithFlights();
  } else {
    airports = await airportsRepository.findAll();
  }

  if (airports.length === 0) throw NoAirportError();

  return airports;
}

async function airport(id: number) {
  if (!id) throw NoAirportIdError();

  return await airportsRepository.findByIdWithFlights(id);
}

async function insertAirport(airportsData: NewAirports) {
  return await airportsRepository.create(airportsData);
}

const airportsService = {
  allAirports,
  airport,
  insertAirport,
};

export default airportsService;

export type NewAirports = Omit<airports, 'id'>;
