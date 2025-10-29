import { AxiosInstance } from 'axios';
import { apiRequest } from 'src/classes/api/request';
import { NodeEndpoints } from 'src/classes/node/endpoints';

export function ePrinterControlDisplayPostMessage(instance: AxiosInstance) {
  return (message: string) =>
    apiRequest<string>(
      instance,
      'post',
      NodeEndpoints.printer.control.display.message,
      { message },
    );
}
