import { SearchChannelResponseDto } from './search-channel-response-dto.type';
import { SearchVideoResponseDto } from './search-video-response-dto.type';

type SearchResponseDto = {
  kind: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: (SearchChannelResponseDto | SearchVideoResponseDto)[];
};

export { type SearchResponseDto };