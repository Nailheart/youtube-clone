import { ApiPath } from 'common/enums/enums';
import { SearchRequestDto, SearchResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class SearchApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getSearchVideos(queryString: SearchRequestDto): Promise<SearchResponseDto> {
    return this.#http.load(ApiPath.SEARCH, {
      ...queryString
    });
  }
}

export { SearchApi };