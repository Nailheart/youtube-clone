import { ApiPath } from 'common/enums/enums';
import { ChannelDetailsRequestDto, ChannelDetailResponseDto } from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
};

class ChannelDetailsApi {
  #http: Http;

  public constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getChannelDetails(queryString: ChannelDetailsRequestDto): Promise<ChannelDetailResponseDto> {
    return this.#http.load(ApiPath.CHANNELS_DETAILS, {
      ...queryString
    });
  }
}

export { ChannelDetailsApi };