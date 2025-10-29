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
}
