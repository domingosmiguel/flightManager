import { ApplicationError } from '@/protocols';

export function NoAirportError(): ApplicationError {
  return {
    name: 'NoAirportError',
  };
}

export function NoAirportIdError(): ApplicationError {
  return {
    name: 'NoAirportIdError',
  };
}
