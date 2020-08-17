import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm/index';

@Entity()
export class Student {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}