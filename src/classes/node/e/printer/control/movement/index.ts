import { AxiosInstance } from 'axios';
import { ePrinterControlMovementPostHome } from './home';

export const ePrinterControlMovement = (instance: AxiosInstance) => ({
  home: ePrinterControlMovementPostHome(instance),
});
