import { ApiPath } from 'common/enums/enums';
import { ChannelVideosRequestDto, ChannelVideosResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class ChannelVideosApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getChannelVideos(queryString: ChannelVideosRequestDto): Promise<ChannelVideosResponseDto> {
    return this.#http.load(ApiPath.CHANNELS_VIDEOS, {
      ...queryString
    });
  }
}

export { ChannelVideosApi };