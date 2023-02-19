import { ApiPath } from 'common/enums/enums';
import { PlaylistDetailsRequestDto, PlaylistDetailsResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class PlaylistDetailsApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getPlaylistDetails(queryString: PlaylistDetailsRequestDto): Promise<PlaylistDetailsResponseDto> {
    return this.#http.load(ApiPath.PLAYLIST_DETAILS, {
      ...queryString
    });
  }
}

export { PlaylistDetailsApi };