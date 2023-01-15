enum AppRoute {
  ROOT = '/',
  CHANNEL_ID = '/channel/:id',
  CHANNEL_ID_VIDEOS = '/channel/:id/videos',
  CHANNEL_ID_SHORTS = '/channel/:id/shorts',
  CHANNEL_ID_LIVE = '/channel/:id/live',
  CHANNEL_ID_PLAYLISTS = '/channel/:id/playlists',
  CHANNEL_ID_COMMUNITY = '/channel/:id/community',
  CHANNEL_ID_CHANNELS = '/channel/:id/channels',
  CHANNEL_ID_ABOUT = '/channel/:id/about',
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
