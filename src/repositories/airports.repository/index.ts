import { prisma } from '@/config/database';
import { NewAirports } from '@/services';

function findAll() {
  return prisma.airports.findMany();
}

function findAllWithFlights() {
  return prisma.airports.findMany({
    include: {
      flights_flights_arrivalAirportIdToairports: true,
      flights_flights_departureAirportIdToairports: true,
    },
  });
}

function findByIdWithFlights(id: number) {
  return prisma.airports.findUnique({
    where: {
      id,
    },
    include: {
      flights_flights_arrivalAirportIdToairports: true,
      flights_flights_departureAirportIdToairports: true,
    },
  });
}

function create(airport: NewAirports) {
  return prisma.airports.create({
    data: airport,
  });
}

const airportsRepository = {
  create,
  findAll,
  findAllWithFlights,
  findByIdWithFlights,
};

export default airportsRepository;
