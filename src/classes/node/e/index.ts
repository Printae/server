import { AxiosInstance } from 'axios';
import { eGetHealth } from './health';
import { eGetInfo } from './info';
import { ePrinter } from './printer';

export const e = (instance: AxiosInstance) => ({
  health: eGetHealth(instance),
  info: eGetInfo(instance),
  printer: ePrinter(instance),
});
