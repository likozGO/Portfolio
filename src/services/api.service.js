import axios from 'axios';

const API_KEYS = {
  API_NINJAS: 'xVFfTqUXW2o1ko3m/MTMtw==wjSkfdUT3BYcY4k8',
};

// eslint-disable-next-line import/prefer-default-export
export function getRandomFact() {
  return axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {
    headers: {
      'X-Api-Key': API_KEYS.API_NINJAS,
    },
  });
}
