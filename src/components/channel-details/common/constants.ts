import { AppRoute } from "common/enums/enums";

type TabsNavigationItemsProps = {
  title: string;
  href: AppRoute;
};

const TABS_NAVIGATION_ITEMS: TabsNavigationItemsProps[] = [
  {
    title: 'Home',
    href: AppRoute.CHANNEL_ID_HOME,
  },
  {
    title: 'Videos',
    href: AppRoute.CHANNEL_ID_VIDEOS,
  },
  {
    title: 'Shorts',
    href: AppRoute.CHANNEL_ID_SHORTS,
  },
  {
    title: 'Live',
    href: AppRoute.CHANNEL_ID_LIVE,
  },
  {
    title: 'Playlists',
    href: AppRoute.CHANNEL_ID_PLAYLISTS,
  },
  {
    title: 'Community',
    href: AppRoute.CHANNEL_ID_COMMUNITY,
  },
  {
    title: 'Channels',
    href: AppRoute.CHANNEL_ID_CHANNELS,
  },
  {
    title: 'About',
    href: AppRoute.CHANNEL_ID_ABOUT,
  },
];

export { TABS_NAVIGATION_ITEMS };