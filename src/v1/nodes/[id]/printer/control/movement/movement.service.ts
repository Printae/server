import { Injectable } from '@nestjs/common';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';

@Injectable()
export class NodesNodePrinterControlMovementService {
  async home(nodeId: string) {
    if (!nodeId) return Response.error('Node ID is required');

    const connection = NodeConnection.create(nodeId);
    if (!(await connection.isConnected()))
      return Response.error('Cannot connect to node');

    const res = await connection.e.printer.control.movement.home();
    if (res.status !== 'ok') return res;

    return Response.ok('Homed successfully');
  }
}
