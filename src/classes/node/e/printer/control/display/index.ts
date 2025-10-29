import { AxiosInstance } from 'axios';
import { ePrinterControlDisplayPostMessage } from './message';

export const ePrinterControlDisplay = (instance: AxiosInstance) => ({
  message: ePrinterControlDisplayPostMessage(instance),
});
