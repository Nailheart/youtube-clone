import { ChannelVideoResponseDto } from './channel-video-response-dto.type';

type ChannelVideosResponseDto = {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  },
  items: ChannelVideoResponseDto[];
};

export { type ChannelVideosResponseDto };