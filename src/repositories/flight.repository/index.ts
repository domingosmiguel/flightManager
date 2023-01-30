import { prisma } from '@/config/database';
import { NewFlights } from '@/services';

function findAll() {
  return prisma.flights.findMany();
}

function findById(id: number) {
  return prisma.flights.findUnique({
    where: {
      id,
    },
  });
}

function create(airport: NewFlights) {
  return prisma.flights.create({
    data: airport,
  });
}

const flightsRepository = {
  create,
  findAll,
  findById,
};

export default flightsRepository;
