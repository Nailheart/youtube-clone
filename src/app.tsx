import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import {
  ChannelDetail,
  Feed,
  feedLoader,
  Layout,
  NoMatch,
  SearchFeed,
  searchFeedLoader,
  VideoDetails,
  videoDetailsLoader,
} from 'components/components';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={AppRoute.ROOT} element={<Layout />}>
    <Route index element={<Feed />} loader={feedLoader} />
    <Route path={AppRoute.VIDEO_ID} element={<VideoDetails />} loader={videoDetailsLoader} />
    <Route path={AppRoute.CHANNEL_ID} element={<ChannelDetail />} />
    <Route path={AppRoute.SEARCH_TERM} element={<SearchFeed />} loader={searchFeedLoader} />
    <Route path={AppRoute.NO_MATCH} element={<NoMatch />} />
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export { App };
