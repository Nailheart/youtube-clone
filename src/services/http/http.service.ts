import { ENV } from 'common/enums/enums';
import { HttpError } from 'exceptions/exceptions';

class Http {
  public load<T = unknown>(
    url: string,
    queryString?: Record<string, unknown>,
  ): Promise<T> {
    return fetch(this.getUrl(url, queryString), {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': ENV.API_KEY,
        'X-RapidAPI-Host': ENV.API_HOST,
      },
    })
    .then(this.checkStatus)
    .then((res) => res.json())
    .catch((err: Error) => { throw err });
  }

  private getUrl( url: string, queryString?: Record<string, unknown>) {
    if (!queryString) return url;

    const query = new URLSearchParams(queryString as Record<string, string>).toString();

    return `https://youtube-v31.p.rapidapi.com${url}?${query}`;
  }

  private async checkStatus(response: Response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: response.statusText,
        status: response.status,
      }));

      throw new HttpError({ 
        message: error.message,
        status: error.status,
      });
    }

    return response;
  }
}

export { Http };
