import { ApiPath } from 'common/enums/enums';
import { SuggestedVideosRequestDto, SuggestedVideosResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class SuggestedVideosApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getSuggestedVideos(queryString: SuggestedVideosRequestDto): Promise<SuggestedVideosResponseDto> {
    return this.#http.load(ApiPath.SUGGESTED_VIDEOS, {
      ...queryString
    });
  }
}

export { SuggestedVideosApi };