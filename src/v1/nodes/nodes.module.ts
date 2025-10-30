import { Module } from '@nestjs/common';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service';
import { NodesNodeModule } from './[id]/node.module';
import { NodesIncModule } from './inc/inc.module';

@Module({
  imports: [NodesNodeModule, NodesIncModule],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule {}
