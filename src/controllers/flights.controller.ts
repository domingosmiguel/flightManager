import flightsService, { NewFlights } from '@/services/flights.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllFlights(req: Request, res: Response) {
  try {
    const flights = await flightsService.allFlights();
    res.send(flights);
  } catch (error) {
    if (error.name === 'NoFlightError') {
      return res.status(httpStatus.NOT_FOUND).send([]);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getFlight(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const flight = await flightsService.flight(parseInt(id, 10));
    res.send(flight);
  } catch (error) {
    if (error.name === 'NoFlightIdError') {
      return res.status(httpStatus.BAD_REQUEST).send({});
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postFlight(req: Request, res: Response) {
  const { flightData } = req.body as Record<string, NewFlights>;
  try {
    const newFlight = await flightsService.insertFlight(flightData);
    res.status(httpStatus.CREATED).send(newFlight);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
