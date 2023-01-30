import airlineCompaniesService, {
  NewAirlineCompanies,
} from '@/services/airlineCompanies.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllAirlineCompanies(req: Request, res: Response) {
  const { flights } = req.query as Record<string, string>;
  try {
    const airlineCompanies = await airlineCompaniesService.allAirlineCompanies(
      !!flights
    );
    res.send(airlineCompanies);
  } catch (error) {
    if (error.name === 'NoAirlineCompanyError') {
      return res.status(httpStatus.NOT_FOUND).send([]);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAirlineCompanyAndFlights(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const airlineCompany = await airlineCompaniesService.airlineCompany(
      parseInt(id, 10)
    );
    res.send(airlineCompany);
  } catch (error) {
    if (error.name === 'NoAirlineCompanyIdError') {
      return res.status(httpStatus.BAD_REQUEST).send({});
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postAirlineCompany(req: Request, res: Response) {
  const { airlineCompaniesData } = req.body as Record<
    string,
    NewAirlineCompanies
  >;
  try {
    const newAirlineCompany =
      await airlineCompaniesService.insertAirlineCompany(airlineCompaniesData);
    res.status(httpStatus.CREATED).send(newAirlineCompany);
  } catch (error) {
    if (error.name === 'NoAirlineCompanyIdError') {
      return res.status(httpStatus.BAD_REQUEST).send({});
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
