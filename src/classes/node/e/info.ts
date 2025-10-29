import { NodeInfo } from 'src/types/node/info';
import { NodeEndpoints } from '../endpoints';
import { AxiosInstance } from 'axios';
import { apiRequest } from 'src/classes/api/request';

export function eGetInfo(instance: AxiosInstance) {
  return () => apiRequest<NodeInfo>(instance, 'get', NodeEndpoints.info);
}
