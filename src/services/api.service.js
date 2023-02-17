import { getRequest } from './api.methods';

const PUBLIC_KEYS = {
  API_KEY_NINJAS: 'xVFfTqUXW2o1ko3m/MTMtw==wjSkfdUT3BYcY4k8',
};

// eslint-disable-next-line import/prefer-default-export
export function getRandomFact() {
  const headers = {
    'X-Api-Key':
      process.env.REACT_APP_API_KEY_NINJAS || PUBLIC_KEYS.API_KEY_NINJAS,
  };
  const parameters = {
    limit: 1,
  };
  return getRequest('https://api.api-ninjas.com/v1/facts', headers, parameters);
}
