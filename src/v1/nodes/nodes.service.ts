import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Response } from 'src/classes/api/response';
import { Repositories } from 'src/database/database';
import { NodeEntity } from 'src/database/entities/Node';

@Injectable()
export class NodesService {
  async createNode(address: string) {
    if (typeof address !== 'string' || address.trim() === '')
      return Response.error('Invalid address');

    const node = new NodeEntity();
    node.id = randomUUID();
    node.address = address.trim();

    await Repositories.node.save(node);

    return Response.ok(node);
  }
}
