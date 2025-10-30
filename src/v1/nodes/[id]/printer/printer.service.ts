import { Injectable } from '@nestjs/common';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';
import { VERSION } from 'src/config';

@Injectable()
export class NodesNodePrinterService {
  async initialize(nodeId: string, port: string, baudRate: number) {
    if (!Number.isInteger(baudRate) || baudRate <= 0)
      return Response.error('Invalid baud rate');
    if (typeof port !== 'string' || port.trim() === '')
      return Response.error('Invalid port');

    const connection = NodeConnection.create(nodeId);
    if (!(await connection.isConnected()))
      return Response.error('Cannot connect to node');

    const connectRes = await connection.e.printer.connect(port, baudRate);
    if (connectRes.status !== 'ok') return connectRes;

    const messageRes = await connection.e.printer.control.display.message(
      `Printae v${VERSION}`,
    );
    if (messageRes.status !== 'ok') return messageRes;

    const homeRes = await connection.e.printer.control.movement.home();
    if (homeRes.status !== 'ok') return homeRes;

    return Response.ok('Initialized');
  }
}
