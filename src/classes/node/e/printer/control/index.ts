import { AxiosInstance } from 'axios';
import { ePrinterControlMovement } from './movement';
import { ePrinterControlDisplay } from './display';

export const ePrinterControl = (instance: AxiosInstance) => ({
  movement: ePrinterControlMovement(instance),
  display: ePrinterControlDisplay(instance),
});
