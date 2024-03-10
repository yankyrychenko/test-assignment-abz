interface ILinks {
  next_url: string;
  prev_url: string;
}

export interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface IGetUsersResponse {
  count: number;
  links: ILinks;
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: IUser[];
}

export interface IPostUserResponse {
  message: string;
  success: boolean;
  user_id: number;
}
