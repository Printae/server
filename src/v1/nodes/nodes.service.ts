import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';
import { Repositories } from 'src/database/database';
import { NodeEntity } from 'src/database/entities/Node';

@Injectable()
export class NodesService {
  async createNode(address: string, port: string, baudRate: number) {
    if (typeof address !== 'string' || address.trim() === '')
      return Response.error('Invalid address');
    if (typeof port !== 'string' || port.trim() === '')
      return Response.error('Invalid port');
    if (!Number.isInteger(baudRate) || baudRate <= 0)
      return Response.error('Invalid baud rate');

    const connection = NodeConnection.fromAddress(address.trim());
    if (!(await connection.isConnected()))
      return Response.error('Cannot connect to node');

    const infoRes = await connection.e.info();
    if (infoRes.status !== 'ok')
      return Response.error('Failed to get node info');

    const node = new NodeEntity();
    node.id = randomUUID();
    node.address = address.trim();
    node.nodeId = infoRes.data.id;
    node.port = port;
    node.baudRate = baudRate;

    await Repositories.node.save(node);

    return Response.ok(node);
  }

  async listNodes() {
    const nodes = await Repositories.node.find();
    return Response.ok(nodes);
  }

  async getNode(id: string) {
    if (!id) return Response.error('Node ID is required');

    const node = await Repositories.node.findOne({ where: { id } });
    if (!node) return Response.error('Node not found');

    return Response.ok(node);
  }
}
