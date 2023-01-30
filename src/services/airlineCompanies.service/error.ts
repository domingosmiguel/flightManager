import { ApplicationError } from '@/protocols';

export function NoAirlineCompanyError(): ApplicationError {
  return {
    name: 'NoAirlineCompanyError',
  };
}

export function NoAirlineCompanyIdError(): ApplicationError {
  return {
    name: 'NoAirlineCompanyIdError',
  };
}
