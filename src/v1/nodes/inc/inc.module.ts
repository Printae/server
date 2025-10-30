import { Module } from '@nestjs/common';
import { NodesIncController } from './inc.controller';
import { NodesIncService } from './inc.service';
import { NodesNodePrinterService } from '../[id]/printer/printer.service';

@Module({
  imports: [],
  controllers: [NodesIncController],
  providers: [NodesIncService, NodesNodePrinterService],
})
export class NodesIncModule {}
