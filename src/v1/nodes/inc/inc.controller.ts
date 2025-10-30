import { Body, Controller, Post } from '@nestjs/common';
import { NodesIncService } from './inc.service';

@Controller('/nodes/inc')
export class NodesIncController {
  constructor(private readonly incService: NodesIncService) {}

  @Post('/alive')
  async alive(@Body('id') nodeId: string) {
    return this.incService.alive(nodeId);
  }
}
