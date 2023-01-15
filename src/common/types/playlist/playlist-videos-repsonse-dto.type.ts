import { PlaylistVideoResponseDto } from './playlist-video-response-dto.type';

type PlaylistVideosResponseDto = {
  kind: string;
  items: PlaylistVideoResponseDto[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
};

export { type PlaylistVideosResponseDto };