import { Routes, Route } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { Header, Sidebar } from 'components/common/common';
import {
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail
} from 'components/components';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Sidebar />

        <Routes>
          <Route path={AppRoute.ROOT} element={<Feed />} />
          <Route path={AppRoute.VIDEO_ID} element={<VideoDetail />} />
          <Route path={AppRoute.CHANNEL_ID} element={<ChannelDetail />} />
          <Route path={AppRoute.SEARCH_TERM} element={<SearchFeed />} />
        </Routes>
      </div>
    </div>
  );
};

export { App };
