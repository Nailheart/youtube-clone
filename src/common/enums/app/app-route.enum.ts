enum AppRoute {
  ROOT = '/',
  CHANNEL_ID = '/channel/:id',
  VIDEO_ID = '/video/:id',
  SEARCH_TERM = '/search/:searchTerm',
  EXPLORE_CATEGORY = '/explore/:category',
  EXPLORE_TRENDING = '/explore/trending',
  EXPLORE_MUSIC = '/explore/music',
  EXPLORE_MOVIES = '/explore/movies',
  EXPLORE_GAMING = '/explore/gaming',
  EXPLORE_NEWS = '/explore/news',
  EXPLORE_SPORTS = '/explore/sports',
  EXPLORE_LEARNING = '/explore/learning',
  NO_MATCH  = '*',
}

export { AppRoute };
