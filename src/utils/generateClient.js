const generateClient = (baseUrl = '') => {
  const config = {};
  config.get = async (pathname = '') => {
    return fetch(`${baseUrl}${pathname}`);
  };
  return config;
};

export default generateClient;
