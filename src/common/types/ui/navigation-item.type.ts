import { AppRoute } from 'common/enums/enums';
import { IconName } from 'common/types/types';

type Link = {
  title: string;
  icon: IconName;
  path: AppRoute;
}
type NavigationItem = {
  navigationGroup?: string;
  links: Link[];
};

export { type NavigationItem };