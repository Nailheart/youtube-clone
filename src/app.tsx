import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import {
  ChannelDetail,
  Feed,
  Layout,
  SearchFeed,
  VideoDetail
} from 'components/components';
import { feedLoader } from 'components/feed/feed';
import { searchFeedLoader } from './components/search-feed/search-feed';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={AppRoute.ROOT} element={<Layout />}>
    <Route index element={<Feed />} loader={feedLoader} />
    <Route path={AppRoute.VIDEO_ID} element={<VideoDetail />} />
    <Route path={AppRoute.CHANNEL_ID} element={<ChannelDetail />} />
    <Route path={AppRoute.SEARCH_TERM} element={<SearchFeed />} loader={searchFeedLoader} />
  </Route>  
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export { App };
