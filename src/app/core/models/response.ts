export type AuthApiResponse<T = undefined> = {
  data?: T;
  message: string;
  success: boolean;
  status: number;
};

export type Captcha = {
  captchaId: string;
  code: string;
  imageData: string;
};
