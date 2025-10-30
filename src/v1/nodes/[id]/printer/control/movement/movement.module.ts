import { Module } from '@nestjs/common';
import { NodesNodePrinterControlMovementController } from './movement.controller';
import { NodesNodePrinterControlMovementService } from './movement.service';

@Module({
  imports: [],
  controllers: [NodesNodePrinterControlMovementController],
  providers: [NodesNodePrinterControlMovementService],
})
export class NodesNodePrinterControlMovementModule {}
