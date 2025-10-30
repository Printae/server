import { Body, Controller, Get, Post } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('/nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Post('')
  async createNode(@Body('address') address: string) {
    return await this.nodesService.createNode(address);
  }

  @Get('')
  async listNodes() {
    return await this.nodesService.listNodes();
  }
}
