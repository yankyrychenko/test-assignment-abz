import { BASE_URL } from '../../constants';
import { IGetUsersResponse, IPostUserResponse } from './types';

export const usersApi = {
  getUsers: async (page = 1): Promise<IGetUsersResponse> => {
    const URL = `${BASE_URL}/users?page=${page}&count=6`;

    const METHOD = 'GET';

    try {
      const response = await fetch(URL, {
        method: METHOD,
      });

      return response.json();
    } catch (e) {
      throw new Error('Get users failed');
    }
  },

  postUser: async (
    token: string,
    data: FormData
  ): Promise<IPostUserResponse> => {
    const URL = `${BASE_URL}/users`;

    const METHOD = 'POST';

    try {
      const response = await fetch(URL, {
        method: METHOD,
        body: data,
        headers: { Token: token },
      });

      return response.json();
    } catch (e) {
      throw new Error('Post user failed');
    }
  },
};
