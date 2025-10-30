import { Controller, Param, Post } from '@nestjs/common';
import { NodesNodePrinterControlMovementService } from './movement.service';

@Controller('/nodes/:id/printer/control/movement')
export class NodesNodePrinterControlMovementController {
  constructor(
    private readonly movementService: NodesNodePrinterControlMovementService,
  ) {}

  @Post('/home')
  async home(@Param('id') nodeId: string) {
    return this.movementService.home(nodeId);
  }
}
