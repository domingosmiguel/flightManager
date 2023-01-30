import {
  airlineCompaniesRouter,
  airportsRouter,
  flightsRouter,
} from '@/routers';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { connectDb, disconnectDB } from './config/database';

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/airlineCompanies', airlineCompaniesRouter)
  .use('/airports', airportsRouter)
  .use('/flights', flightsRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
