import { VideoCommentResponseDto } from './video-comment-response-dto.type';

type VideoCommentsResponseDto = {
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  },
  items: VideoCommentResponseDto[];
}

export { type VideoCommentsResponseDto };