type Order = 
  | 'searchSortUnspecified'
  | 'date' 
  | 'rating'
  | 'viewCount'
  | 'relevance'
  | 'title'
  | 'videoCount';

type SearchRequestDto = {
  q: string;
  part: ['id', 'snippet'];
  regionCode?: string;
  maxResults?: number;
  order?: Order;
  pageToken?: string;
  type?: 'channel' | 'playlist' | 'video';
}

export { type SearchRequestDto };