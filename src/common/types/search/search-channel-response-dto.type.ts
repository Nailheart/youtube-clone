type SearchChannelResponseDto = {
  kind: string;
  id: {
    kind: string;
    channelId: string;
  },
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      },
      medium: {
        url: string;
      },
      high: {
        url: string;
      }
    },
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
};

export { type SearchChannelResponseDto };