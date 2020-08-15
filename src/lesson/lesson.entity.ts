import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm/index';

@Entity()
export class Lesson {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}