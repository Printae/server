import { Injectable } from '@nestjs/common';
import { Response } from 'src/classes/api/response';
import { NodeConnection } from 'src/classes/node/connection';

@Injectable()
export class NodesNodeService {
  async getNodeInfo(nodeId: string) {
    const connection = NodeConnection.create(nodeId);

    if (!(await connection.isConnected()))
      return Response.error('Cannot connect to node');

    const res = await connection.e.info();
    if (res.status != 'ok') return Response.error('Failed to get node info');

    return Response.ok(res.data);
  }
}
