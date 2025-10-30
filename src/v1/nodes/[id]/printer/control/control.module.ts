import { Module } from '@nestjs/common';
import { NodesNodePrinterControlMovementModule } from './movement/movement.module';

@Module({
  imports: [NodesNodePrinterControlMovementModule],
})
export class NodesNodePrinterControlModule {}
