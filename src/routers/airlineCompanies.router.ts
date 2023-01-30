import {
  getAirlineCompanyAndFlights,
  getAllAirlineCompanies,
  postAirlineCompany,
} from '@/controllers';
import { Router } from 'express';

const airlineCompaniesRouter = Router();

airlineCompaniesRouter
  .get('/', getAllAirlineCompanies)
  .get('byId/:id', getAirlineCompanyAndFlights)
  .post('/', postAirlineCompany);

export { airlineCompaniesRouter };
