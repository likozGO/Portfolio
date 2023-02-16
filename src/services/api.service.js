import axios from 'axios';

const PUBLIC_KEYS = {
  API_KEY_NINJAS: 'xVFfTqUXW2o1ko3m/MTMtw==wjSkfdUT3BYcY4k8',
};

// eslint-disable-next-line import/prefer-default-export
export function getRandomFact() {
  console.log(process.env.API_KEY_NINJAS);
  return axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {
    headers: {
      'X-Api-Key':
        process.env.REACT_APP_API_KEY_NINJAS || PUBLIC_KEYS.API_KEY_NINJAS,
    },
  });
}
