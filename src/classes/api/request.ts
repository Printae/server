import { AxiosInstance } from 'axios';
import { Response } from './response';

type ResponseType<T> =
  | {
      status: 'ok';
      data: T;
    }
  | {
      status: 'error';
      message: string;
    };

export async function apiRequest<T>(
  instance: AxiosInstance,
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: Record<string, any>,
): Promise<ResponseType<T>> {
  const res = await instance
    .request({
      method,
      url,
      data,
    })
    .catch(() => ({
      data: Response.error('API request failed'),
    }));

  return res.data as ResponseType<T>;
}
