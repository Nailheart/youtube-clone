import { ChannelDetailResponseDto } from './channel-detail-response-dto.type';

type ChannelDetailsResponseDto = {
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  },
  items: ChannelDetailResponseDto[];
};

export { type ChannelDetailsResponseDto };