import { IconName, FC, SVGProps } from 'common/types/types';
import { ReactComponent as Logo } from 'assets/img/icons/logo.svg';
import { ReactComponent as Home } from 'assets/img/icons/home.svg';
import { ReactComponent as Shorts } from 'assets/img/icons/shorts.svg';
import { ReactComponent as Subscriptions } from 'assets/img/icons/subscriptions.svg';
import { ReactComponent as Library } from 'assets/img/icons/library.svg';
import { ReactComponent as History } from 'assets/img/icons/history.svg';
import { ReactComponent as Watch } from 'assets/img/icons/watch.svg';
import { ReactComponent as Like } from 'assets/img/icons/like.svg';
import { ReactComponent as Arrow } from 'assets/img/icons/arrow.svg';
import { ReactComponent as Browse } from 'assets/img/icons/browse.svg';
import { ReactComponent as Trending } from 'assets/img/icons/trending.svg';
import { ReactComponent as Music } from 'assets/img/icons/music.svg';
import { ReactComponent as Movies } from 'assets/img/icons/movies.svg';
import { ReactComponent as Gaming } from 'assets/img/icons/gaming.svg';
import { ReactComponent as News } from 'assets/img/icons/news.svg';
import { ReactComponent as Sports } from 'assets/img/icons/sports.svg';
import { ReactComponent as Learning } from 'assets/img/icons/learning.svg';
import { ReactComponent as Flag } from 'assets/img/icons/flag.svg';
import { ReactComponent as Help } from 'assets/img/icons/help.svg';
import { ReactComponent as Feedback } from 'assets/img/icons/feedback.svg';
import { ReactComponent as Settings } from 'assets/img/icons/settings.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Cross } from 'assets/img/icons/cross.svg';
import { ReactComponent as Burger } from 'assets/img/icons/burger.svg';
import { ReactComponent as Dots } from 'assets/img/icons/dots.svg';

const listIcons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  logo: Logo,
  home: Home,
  shorts: Shorts,
  subscription: Subscriptions,
  library: Library,
  history: History,
  watch: Watch,
  like: Like,
  arrow: Arrow,
  browse: Browse,
  trending: Trending,
  music: Music,
  movies: Movies,
  gaming: Gaming,
  news: News,
  sports: Sports,
  learning: Learning,
  flag: Flag,
  help: Help,
  feedback: Feedback,
  settings: Settings,
  search: Search,
  cross: Cross,
  burger: Burger,
  dots: Dots,
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