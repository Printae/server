import { Body, Controller, Post } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('/nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Post('')
  async createNode(@Body('address') address: string) {
    return await this.nodesService.createNode(address);
  }
}
