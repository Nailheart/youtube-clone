type SuggestedVideosRequestDto = {
  relatedToVideoId: string;
  part: ['id', 'snippet'];
  type: string;
  maxResults?: number;
}

export { type SuggestedVideosRequestDto };