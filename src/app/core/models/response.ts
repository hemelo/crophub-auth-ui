export type AuthApiResponse<T = undefined> = {
  data?: T;
  message: string;
  success: boolean;
  status: number;
};
