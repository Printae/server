import { Module } from '@nestjs/common';
import { NodesNodeController } from './node.controller';
import { NodesNodeService } from './node.service';
import { NodesNodePrinterModule } from './printer/printer.module';

@Module({
  imports: [NodesNodePrinterModule],
  controllers: [NodesNodeController],
  providers: [NodesNodeService],
})
export class NodesNodeModule {}
