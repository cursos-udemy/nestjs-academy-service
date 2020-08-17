import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './inputs/create-student.input';
import { StudentService } from './student.service';
import { ParseObjectIdPipe } from '../pipes/validation/parse-object-id.pipe';

@Resolver(of => StudentType)
export class StudentResolver {

  constructor(private studentService: StudentService) {
  }

  @Query(returns => [StudentType])
  getStudents() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  getStudent(@Args('id', ParseObjectIdPipe) id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation(returns => StudentType)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
}