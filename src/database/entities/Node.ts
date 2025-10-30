import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('node')
export class NodeEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 36,
  })
  nodeId: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  port: string;

  @Column({
    type: 'int',
  })
  baudRate: number;
}
