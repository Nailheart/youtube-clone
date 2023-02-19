import { ApiPath } from 'common/enums/enums';
import { PlaylistVideosRequestDto, PlaylistVideoResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class PlaylistVideosApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getPlaylistVideos(queryString: PlaylistVideosRequestDto): Promise<PlaylistVideoResponseDto> {
    return this.#http.load(ApiPath.PLAYLIST_VIDEOS, {
      ...queryString
    });
  }
}

export { PlaylistVideosApi };