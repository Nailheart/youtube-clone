import { Routes, Route } from "react-router-dom";
import { 
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail
} from "components/components";
import { AppRoute } from 'common/enums/enums';

const App = () => {
  return (
    <div className="App">
      <h1>Hello YouTube</h1>
      <Navbar />

      <Routes>
        <Route path={AppRoute.ROOT} element={<Feed />} />
        <Route path={AppRoute.VIDEO_ID} element={<VideoDetail />} />
        <Route path={AppRoute.CHANNEL_ID} element={<ChannelDetail />} />
        <Route path={AppRoute.SEARCH_TERM} element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export { App };
