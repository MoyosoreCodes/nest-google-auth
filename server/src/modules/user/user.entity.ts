import { Column, Entity } from 'typeorm';
import { AbstractEntity } from 'src/shared/abstract.entity';

export class User extends AbstractEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
