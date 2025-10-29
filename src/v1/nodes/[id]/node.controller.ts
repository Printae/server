import { Controller, Get, Param } from '@nestjs/common';
import { NodesNodeService } from './node.service';

@Controller('/nodes/:id')
export class NodesNodeController {
  constructor(private readonly nodesNodeService: NodesNodeService) {}

  @Get('info')
  async getNodeInfo(@Param('id') nodeId: string) {
    return await this.nodesNodeService.getNodeInfo(nodeId);
  }
}
