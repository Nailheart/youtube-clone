type PlaylistVideosRequestDto = {
  playlistId: string;
  part: 'snippet';
  maxResults?: number;
  pageToken?: string;
}

export { type PlaylistVideosRequestDto };