import { IUser } from 'src/service/api/users/types';

export interface IUsersComponentProps {
  isLoading: boolean;
  isLastPage: boolean;
  users: IUser[];
  onShowMore: () => void;
}
