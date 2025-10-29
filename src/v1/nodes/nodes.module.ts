import { Module } from '@nestjs/common';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service';
import { NodesNodeModule } from './[id]/node.module';

@Module({
  imports: [NodesNodeModule],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule {}
