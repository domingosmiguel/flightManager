import airportsService, { NewAirports } from '@/services/airports.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllAirports(req: Request, res: Response) {
  const { flights } = req.query as Record<string, string>;

  try {
    const airports = await airportsService.allAirports(
      flights.toLowerCase() === 'true' && true
    );
    res.send(airports);
  } catch (error) {
    if (error.name === 'NoAirportError') {
      return res.status(httpStatus.NOT_FOUND).send([]);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAirportAndFlights(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const airport = await airportsService.airport(parseInt(id, 10));
    res.send(airport);
  } catch (error) {
    if (error.name === 'NoAirportIdError') {
      return res.status(httpStatus.BAD_REQUEST).send({});
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postAirport(req: Request, res: Response) {
  const { airportData } = req.body as Record<string, NewAirports>;
  try {
    const newAirport = await airportsService.insertAirport(airportData);
    res.status(httpStatus.CREATED).send(newAirport);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
