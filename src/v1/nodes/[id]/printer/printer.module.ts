import { Module } from '@nestjs/common';
import { NodesNodePrinterController } from './printer.controller';
import { NodesNodePrinterService } from './printer.service';

@Module({
  imports: [],
  controllers: [NodesNodePrinterController],
  providers: [NodesNodePrinterService],
})
export class NodesNodePrinterModule {}
