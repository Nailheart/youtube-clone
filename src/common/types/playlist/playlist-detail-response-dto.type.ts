type PlaylistDetailResponseDto = {
  kind: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      },
      medium: {
        url: string;
        width: number;
        height: number;
      },
      high: {
        url: string;
        width: number;
        height: number;
      },
      standard: {
        url: string;
        width: number;
        height: number;
      },
      maxres: {
        url: string;
        width: number;
        height: number;
      }
    },
    channelTitle: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    }
  }
}

export { type PlaylistDetailResponseDto };