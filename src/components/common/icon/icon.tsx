import { FC, SVGProps } from 'react';
import { IconName } from 'common/types/types';
import { ReactComponent as Logo } from 'assets/img/icons/logo.svg';
import { ReactComponent as Home } from 'assets/img/icons/home.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Cross } from 'assets/img/icons/cross.svg';
import { ReactComponent as Burger } from 'assets/img/icons/burger.svg';
import { ReactComponent as Browse } from 'assets/img/icons/browse.svg';
import { ReactComponent as Settings } from 'assets/img/icons/settings.svg';
import { ReactComponent as Play_arrow } from 'assets/img/icons/play_arrow.svg';
import { ReactComponent as Arrow } from 'assets/img/icons/arrow.svg';

const listIcons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  logo: Logo,
  home: Home,
  search: Search,
  cross: Cross,
  burger: Burger,
  browse: Browse,
  setting: Settings,
  play_arrow: Play_arrow,
  arrow: Arrow,
}

type Props = {
  name: IconName;
  color?: string;
  width?: number;
  height?: number;
  size?: number;
}

const Icon: FC<Props> = ({ name, color, width, height, size = 24, }) => {
  const SVG = listIcons[name];

  return (
    <SVG color={color} width={width ?? size} height={height ?? size} />
  );
};

export { Icon };