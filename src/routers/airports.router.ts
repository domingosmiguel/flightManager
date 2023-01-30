import {
  getAirportAndFlights,
  getAllAirports,
  postAirport,
} from '@/controllers';
import { Router } from 'express';

const airportsRouter = Router();

airportsRouter
  .get('/', getAllAirports)
  .get('byId/:id', getAirportAndFlights)
  .post('/', postAirport);

export { airportsRouter };
