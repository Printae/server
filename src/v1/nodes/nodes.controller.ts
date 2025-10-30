import { Body, Controller, Get, Post } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('/nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Post('')
  async createNode(
    @Body('address') address: string,
    @Body('port') port: string,
    @Body('baudRate') baudRate: number,
  ) {
    return await this.nodesService.createNode(address, port, baudRate);
  }

  @Get('')
  async listNodes() {
    return await this.nodesService.listNodes();
  }
}
