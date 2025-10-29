import { AxiosInstance } from 'axios';
import { ePrinterPostConnect } from './connect';
import { ePrinterControl } from './control';

export const ePrinter = (instance: AxiosInstance) => ({
  connect: ePrinterPostConnect(instance),
  control: ePrinterControl(instance),
});
