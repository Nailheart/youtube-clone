import { ApiPath } from 'common/enums/enums';
import { VideoCommentsRequestDto, VideoCommentsResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class VideoCommentsApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getVideoComments(queryString: VideoCommentsRequestDto): Promise<VideoCommentsResponseDto> {
    return this.#http.load(ApiPath.VIDEO_COMMENTS, {
      ...queryString
    });
  }
}

export { VideoCommentsApi };