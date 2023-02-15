type VideoCommentResponseDto = {
  kind: string;
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: {
      kind: string;
      id: string;
      snippet: {
        videoId: string;
        textDisplay: string;
        textOriginal: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        authorChannelId: {
          value: string;
        },
        canRate: boolean;
        viewerRating: string;
        likeCount: number,
        publishedAt: string;
        updatedAt: string;
      }
    },
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  }
}

export { type VideoCommentResponseDto };