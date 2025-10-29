import { Module } from '@nestjs/common';
import { NodesModule } from './v1/nodes/nodes.module';

@Module({
  imports: [NodesModule],
})
export class AppModule {}
