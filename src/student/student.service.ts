import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Student } from './student.entity';
import { CreateStudentInput } from './inputs/create-student.input';
import { ObjectID } from 'mongodb';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRespository: Repository<Student>) {
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRespository.find();
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRespository.findOne(id);
  }

  async createStudent(createStudent: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudent;
    const student = this.studentRespository.create({ firstName, lastName });
    return this.studentRespository.save(student);
  }

  async getStudentsByIds(ids: string[]): Promise<Student[]> {
    if (ids && ids.length > 0) {
      return this.studentRespository.find({ where: { _id: { $in: ids.map(ObjectID.createFromHexString) } } });
    }
    return []
  }
}
