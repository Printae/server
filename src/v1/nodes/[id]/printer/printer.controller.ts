import { Body, Controller, Param, Post } from '@nestjs/common';
import { NodesNodePrinterService } from './printer.service';

@Controller('/nodes/:id/printer')
export class NodesNodePrinterController {
  constructor(private readonly printerService: NodesNodePrinterService) {}

  @Post('initialize')
  async initialize(
    @Param('id') nodeId: string,
    @Body('port') port: string,
    @Body('baudRate') baudRate: number,
  ) {
    return await this.printerService.initialize(nodeId, port, baudRate);
  }
}
