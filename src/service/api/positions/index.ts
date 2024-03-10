import { BASE_URL } from '../../constants';
import { IGetPositionsResponse } from './types';

export const positionsApi = {
  getPositions: async (): Promise<IGetPositionsResponse> => {
    const URL = `${BASE_URL}/positions`;

    const METHOD = 'GET';

    try {
      const response = await fetch(URL, {
        method: METHOD,
      });

      return response.json();
    } catch (e) {
      throw new Error('Get positions failed');
    }
  },
};
