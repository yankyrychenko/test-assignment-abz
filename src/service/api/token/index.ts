import { BASE_URL } from '../../constants';
import { IGetTokenResponse } from './types';

export const tokenApi = {
  getToken: async (): Promise<IGetTokenResponse> => {
    const URL = `${BASE_URL}/token`;

    const METHOD = 'GET';

    try {
      const response = await fetch(URL, {
        method: METHOD,
      });

      return response.json();
    } catch (e) {
      throw new Error('Get token failed');
    }
  },
};
