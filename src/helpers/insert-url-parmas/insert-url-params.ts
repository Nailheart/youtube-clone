import { AppRoute } from 'common/enums/enums';

const insertUrlParams = (route: AppRoute, params: Record<string, string>) => {
  return Object.entries(params).reduce((path, [key, value]) => {
    return path.replace(`:${key}`, value) as AppRoute;
  }, route) ;
};

export { insertUrlParams };