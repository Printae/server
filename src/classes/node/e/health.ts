import { AxiosInstance } from 'axios';
import { apiRequest } from 'src/classes/api/request';

export function eGetHealth(instance: AxiosInstance) {
  return () => apiRequest<string>(instance, 'get', '/v1/health');
}
