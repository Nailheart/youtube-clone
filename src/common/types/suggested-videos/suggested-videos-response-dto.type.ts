import { SuggestedVideoResponseDto } from './suggested-video-response-dto.type';

type SuggestedVideosResponseDto = {
  kind: string;
  items: SuggestedVideoResponseDto[];
};

export { type SuggestedVideosResponseDto };