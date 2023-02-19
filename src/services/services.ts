import { Http } from './http/http.service';
import { ChannelDetailsApi } from './channel-details-api/channel-details-api.service';
import { ChannelVideosApi } from './channel-videos-api/channel-videos-api.service';
import { PlaylistDetailsApi } from './playlist-details-api/playlist-details-api.service';
import { PlaylistVideosApi } from './playlist-videos-api/playlist-videos-api.service';
import { SearchApi } from './search-api/search-api.service';
import { SuggestedVideosApi } from './suggested-videos-api/suggested-videos-api.service';
import { VideoCommentsApi } from './video-comments-api/video-comments-api.service';
import { VideoDetailsApi } from './video-details-api/video-details-api.service';

const http = new Http();

const channelDetailsApi = new ChannelDetailsApi({ http });
const channelVideosApi = new ChannelVideosApi({ http });
const playlistDetailsApi = new PlaylistDetailsApi({ http });
const playlistVideosApi = new PlaylistVideosApi({ http });
const searchApi = new SearchApi({ http });
const suggestedVideosApi = new SuggestedVideosApi({ http });
const videoCommentsApi = new VideoCommentsApi({ http });
const videoDetailsApi = new VideoDetailsApi({ http });

export {
  channelDetailsApi,
  channelVideosApi,
  playlistDetailsApi,
  playlistVideosApi,
  searchApi,
  suggestedVideosApi,
  videoCommentsApi,
  videoDetailsApi,
};