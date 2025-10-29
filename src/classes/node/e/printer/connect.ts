import { AxiosInstance } from 'axios';
import { apiRequest } from 'src/classes/api/request';
import { NodeEndpoints } from '../../endpoints';

export function ePrinterPostConnect(instance: AxiosInstance) {
  return (port: string, baudRate: number) =>
    apiRequest<string>(instance, 'post', NodeEndpoints.printer.connect, {
      port,
      baudRate,
    });
}
