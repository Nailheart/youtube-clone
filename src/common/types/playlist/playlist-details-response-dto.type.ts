import { PlaylistDetailResponseDto } from "./playlist-detail-response-dto.type";

type PlaylistDetailsResponseDto = {
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  },
  items: PlaylistDetailResponseDto[];
}

export { type PlaylistDetailsResponseDto };