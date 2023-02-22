type VideoCommentsRequestDto = {
  part: 'snippet';
  videoId: string;
  maxResults: number;
  pageToken?: string;
}

export { type VideoCommentsRequestDto };