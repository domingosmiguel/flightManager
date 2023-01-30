import flightsRepository from '@/repositories/flight.repository';
import { airports, flights } from '@prisma/client';
import { NoFlightError, NoFlightIdError } from './error';

async function allFlights() {
  let airports: (airports & { flights: flights[] })[] | airports[];

  airports = await flightsRepository.findAll();

  if (airports.length === 0) throw NoFlightError();

  return airports;
}

async function flight(id: number) {
  if (!id) throw NoFlightIdError();

  return await flightsRepository.findById(id);
}

async function insertFlight(flightData: NewFlights) {
  return await flightsRepository.create(flightData);
}

const flightsService = {
  allFlights,
  flight,
  insertFlight,
};

export default flightsService;

export type NewFlights = Omit<flights, 'id'>;
