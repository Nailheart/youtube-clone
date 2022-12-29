import { AppRoute } from 'common/enums/enums';
import { NavigationItem } from 'common/types/types';

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    links: [
      {
        title: 'Home',
        icon: 'home',
        path: AppRoute.ROOT,
      },
      {
        title: 'Shorts',
        icon: 'shorts',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Subscription',
        icon: 'subscription',
        path: AppRoute.NO_MATCH,
      },
    ],
  },
  {
    links: [
      {
        title: 'Library',
        icon: 'library',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'History',
        icon: 'history',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Watch later',
        icon: 'watch',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Liked videos',
        icon: 'like',
        path: AppRoute.NO_MATCH,
      },
    ],
  },
  {
    navigationGroup: 'Subscription',
    links: [
      {
        title: 'Browse channels',
        icon: 'browse',
        path: AppRoute.NO_MATCH,
      }
    ],
  },
  {
    navigationGroup: 'Explore',
    links: [
      {
        title: 'Trending',
        icon: 'trending',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Music',
        icon: 'music',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Movies',
        icon: 'movies',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Gaming',
        icon: 'gaming',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'News',
        icon: 'news',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Sports',
        icon: 'sports',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Learning',
        icon: 'learning',
        path: AppRoute.NO_MATCH,
      },
    ],
  },
  {
    links: [
      {
        title: 'Settings',
        icon: 'settings',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Report history',
        icon: 'flag',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Help',
        icon: 'help',
        path: AppRoute.NO_MATCH,
      },
      {
        title: 'Send Feedback',
        icon: 'feedback',
        path: AppRoute.NO_MATCH,
      },
    ],
  },
];

export { NAVIGATION_ITEMS };