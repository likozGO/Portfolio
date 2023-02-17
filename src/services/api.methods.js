import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

const client = axios.create();

client.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
client.defaults.timeout = 2000;

function deleteRequest(url = '', headers = {}, body = {}, signal = {}) {
  const config = {
    headers: { ...headers },
    body: { ...body },
  };

  if (!isEmpty(signal)) {
    config.signal = { ...signal };
  }

  return client.delete(url, config).then((response) => response);
}
function getRequest(url = '', headers = {}, parameters = {}, signal = {}) {
  const config = {
    headers: { ...headers },
    params: { ...parameters },
  };

  if (!isEmpty(signal)) {
    config.signal = { ...signal };
  }

  return client.get(url, config).then((response) => response);
}

function patchRequest(url = '', headers = {}, body = {}, signal = {}) {
  const config = {
    headers: { ...headers },
  };

  if (!isEmpty(signal)) {
    config.signal = { ...signal };
  }

  return client.patch(url, { ...body }, config).then((response) => response);
}

function postRequest(url = '', headers = {}, body = {}, signal = {}) {
  const config = {
    headers: { ...headers },
  };

  if (!isEmpty(signal)) {
    config.signal = { ...signal };
  }

  return client.post(url, { ...body }, config).then((response) => response);
}

export {
  deleteRequest, getRequest, patchRequest, postRequest,
};
