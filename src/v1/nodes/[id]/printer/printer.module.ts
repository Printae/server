import { Module } from '@nestjs/common';
import { NodesNodePrinterController } from './printer.controller';
import { NodesNodePrinterService } from './printer.service';
import { NodesNodePrinterControlModule } from './control/control.module';

@Module({
  imports: [NodesNodePrinterControlModule],
  controllers: [NodesNodePrinterController],
  providers: [NodesNodePrinterService],
})
export class NodesNodePrinterModule {}
