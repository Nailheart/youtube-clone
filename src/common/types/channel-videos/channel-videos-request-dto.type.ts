type Order = 
  | 'searchSortUnspecified'
  | 'date' 
  | 'rating'
  | 'viewCount'
  | 'relevance'
  | 'title'
  | 'videoCount';

type ChannelVideosRequestDto = {
  channelId: string;
  part: ['id', 'snippet'];
  oreder?: Order;
  maxResults?: number;
  pageToken?: string;
}

export { type ChannelVideosRequestDto };