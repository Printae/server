import { Module } from '@nestjs/common';
import { NodesNodeController } from './node.controller';
import { NodesNodeService } from './node.service';

@Module({
  imports: [],
  controllers: [NodesNodeController],
  providers: [NodesNodeService],
})
export class NodesNodeModule {}
