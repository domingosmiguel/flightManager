import { prisma } from '@/config/database';
import { NewAirlineCompanies } from '@/services';

function findAll() {
  return prisma.airlineCompanies.findMany();
}

function findAllWithFlights() {
  return prisma.airlineCompanies.findMany({
    include: {
      flights: true,
    },
  });
}

function findByIdWithFlights(id: number) {
  return prisma.airlineCompanies.findUnique({
    where: {
      id,
    },
    include: {
      flights: true,
    },
  });
}

function create(airlineCompany: NewAirlineCompanies) {
  return prisma.airlineCompanies.create({
    data: airlineCompany,
  });
}

const airlineCompaniesRepository = {
  create,
  findAll,
  findAllWithFlights,
  findByIdWithFlights,
};

export default airlineCompaniesRepository;
