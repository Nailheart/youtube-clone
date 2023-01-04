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
        path: AppRoute.EXPLORE_TRENDING,
      },
      {
        title: 'Music',
        icon: 'music',
        path: AppRoute.EXPLORE_MUSIC,
      },
      {
        title: 'Movies',
        icon: 'movies',
        path: AppRoute.EXPLORE_MOVIES,
      },
      {
        title: 'Gaming',
        icon: 'gaming',
        path: AppRoute.EXPLORE_GAMING,
      },
      {
        title: 'News',
        icon: 'news',
        path: AppRoute.EXPLORE_NEWS,
      },
      {
        title: 'Sports',
        icon: 'sports',
        path: AppRoute.EXPLORE_SPORTS,
      },
      {
        title: 'Learning',
        icon: 'learning',
        path: AppRoute.EXPLORE_LEARNING,
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