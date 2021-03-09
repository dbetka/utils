import { check } from './check';

let requestHost = '';

function makeFetch ({ url, config }) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resolve)
      .catch(reject);
  });
}

function addBodyToConfig (config, data) {
  if (check.isDefined(data)) {
    config.body = JSON.stringify(data);
  }
}

export const request = {
  setHost(newHost) {
    requestHost = newHost;
  },
  getHost() {
    return requestHost;
  },
  dataToPathVariables (data) {
    let pathData = '';

    if (Object.keys(data).length > 0) {
      pathData += '?';
      pathData += Object
        .entries(data)
        .map(([key, val]) => key + '=' + val)
        .join('&');
    }
    return pathData;
  },
  get ({ url = '/', data = {}, config = {} }) {
    const pathVariables = request.dataToPathVariables(data);
    const fullUrl = requestHost + url + pathVariables;

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'GET',
        ...config,
      },
    });
  },
  post ({ url = '/', data, config = {} }) {
    const fullUrl = requestHost + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'POST',
        ...config,
      },
    });
  },
  put ({ url = '/', data = {}, config = {} }) {
    const fullUrl = requestHost + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'PUT',
        ...config,
      },
    });
  },
  delete ({ url = '/', data = {}, config = {} }) {
    const fullUrl = requestHost + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'DELETE',
        ...config,
      },
    });
  },
};
