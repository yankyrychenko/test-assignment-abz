import { IUser } from 'src/service/api/users/types';

export interface IUsersState {
  items: IUser[];
  isLoading: boolean;
  currentPage: number;
  isLastPage: boolean;
  isSuccessfullyRegistered: boolean;
}
