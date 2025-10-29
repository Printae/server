import { AxiosInstance } from 'axios';
import { eGetHealth } from './health';
import { eGetInfo } from './info';

export const e = (instance: AxiosInstance) => ({
  health: eGetHealth(instance),
  info: eGetInfo(instance),
});
