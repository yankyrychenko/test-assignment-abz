import { RootState } from '../types';

const getPositionsSelector = (state: RootState) => state.positions;

export const getPositionsItemsSelector = (state: RootState) =>
  getPositionsSelector(state).items;
