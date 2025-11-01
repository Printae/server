import { Injectable } from '@nestjs/common';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';
import { VERSION } from 'src/config';
import { Repositories } from 'src/database/database';

@Injectable()
export class NodesNodePrinterService {
  async initialize(nodeId: string) {
    if (!nodeId) return Response.error('Node ID is required');

    const node = await Repositories.node.findOne({
      where: { id: nodeId },
    });
    if (!node) return Response.error('Node not found');

    const connection = NodeConnection.create(nodeId);
    if (!(await connection.isConnected()))
      return Response.error('Cannot connect to node');

    const connectRes = await connection.e.printer.connect(
      node.port,
      node.baudRate,
    );
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
