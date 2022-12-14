const { REACT_APP_API_HOST, REACT_APP_API_KEY } = process.env;

const ENV = {
  API_KEY: REACT_APP_API_KEY ?? '',
  API_HOST: REACT_APP_API_HOST ?? '',
} as const;

export { ENV };