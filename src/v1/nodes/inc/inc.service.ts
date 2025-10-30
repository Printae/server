import { Injectable } from '@nestjs/common';
import { Response } from 'src/classes/api/response';
import { Repositories } from 'src/database/database';
import { NodesNodePrinterService } from '../[id]/printer/printer.service';

@Injectable()
export class NodesIncService {
  constructor(private readonly printerService: NodesNodePrinterService) {}

  async alive(nodeId: string) {
    if (!nodeId) return Response.error('Node ID is required');

    const node = await Repositories.node.findOne({
      where: { nodeId },
    });
    if (!node) return Response.error('Node not found');

    const res = await this.printerService.initialize(
      node.id,
      node.port,
      node.baudRate,
    );
    if (res.status !== 'ok') return res;

    return Response.ok("Thank god, you're alive!");
  }
}
