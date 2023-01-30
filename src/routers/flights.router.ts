import { getAllFlights, getFlight, postFlight } from '@/controllers';
import { Router } from 'express';

const flightsRouter = Router();

flightsRouter
  .get('/', getAllFlights)
  .get('byId/:id', getFlight)
  .post('/', postFlight);

export { flightsRouter };
