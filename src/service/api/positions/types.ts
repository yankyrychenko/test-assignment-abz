export interface IPosition {
  id: number;
  name: string;
}

export interface IGetPositionsResponse {
  success: boolean;
  positions: IPosition[];
}
