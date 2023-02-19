import { ApiPath } from 'common/enums/enums';
import { VideoDetailsRequestDto, VideoDetailsResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class VideoDetailsApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getVideoDetails(queryString: VideoDetailsRequestDto): Promise<VideoDetailsResponseDto> {
    return this.#http.load(ApiPath.VIDEO_DETAILS, {
      ...queryString
    });
  }
}

export { VideoDetailsApi };