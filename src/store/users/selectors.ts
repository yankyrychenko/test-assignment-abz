import { RootState } from '../types';

export const getUsersSelector = (state: RootState) => state.users;

export const getUsersItemsSelector = (state: RootState) =>
  getUsersSelector(state)?.items;

export const getCurrentPageSelector = (state: RootState) =>
  getUsersSelector(state)?.currentPage;

export const getIsLastPageSelector = (state: RootState) =>
  getUsersSelector(state)?.isLastPage;

export const getIsSuccessfullyRegisteredSelector = (state: RootState) =>
  getUsersSelector(state)?.isSuccessfullyRegistered;

export const getIsLoadingSelector = (state: RootState) =>
  getUsersSelector(state)?.isLoading;
