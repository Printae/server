import { AxiosInstance } from 'axios';
import { apiRequest } from 'src/classes/api/request';
import { NodeEndpoints } from 'src/classes/node/endpoints';

export function ePrinterControlMovementPostHome(instance: AxiosInstance) {
  return () =>
    apiRequest<string>(
      instance,
      'post',
      NodeEndpoints.printer.control.movement.home,
    );
}
