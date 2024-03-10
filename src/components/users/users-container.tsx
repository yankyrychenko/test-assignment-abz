import { useEffect } from 'react';
import { UsersComponent } from './users-component';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  getCurrentPageSelector,
  getIsLastPageSelector,
  getIsLoadingSelector,
  getUsersItemsSelector,
  getUsersThunk,
} from 'src/store/users';

export const UsersContainer = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsersItemsSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);
  const currentPage = useAppSelector(getCurrentPageSelector);
  const isLastPage = useAppSelector(getIsLastPageSelector);

  const handleShowMore = () => {
    dispatch(getUsersThunk(currentPage + 1));
  };

  useEffect(() => {
    dispatch(getUsersThunk(1));
  }, [dispatch]);

  return (
    <UsersComponent
      isLoading={isLoading}
      isLastPage={isLastPage}
      users={users}
      onShowMore={handleShowMore}
    />
  );
};
