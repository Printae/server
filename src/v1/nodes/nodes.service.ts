import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';
import { Repositories } from 'src/database/database';
import { NodeEntity } from 'src/database/entities/Node';

@Injectable()
export class NodesService {
  async createNode(address: string) {
    if (typeof address !== 'string' || address.trim() === '')
      return Response.error('Invalid address');

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

    await Repositories.node.save(node);

    return Response.ok(node);
  }

  async listNodes() {
    const nodes = await Repositories.node.find();
    return Response.ok(nodes);
  }
}
