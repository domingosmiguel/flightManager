import { ApplicationError } from '@/protocols';

export function NoFlightError(): ApplicationError {
  return {
    name: 'NoFlightError',
  };
}

export function NoFlightIdError(): ApplicationError {
  return {
    name: 'NoFlightIdError',
  };
}
