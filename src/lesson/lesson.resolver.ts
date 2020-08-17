import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { AssignStudentsToLessonInput, CreateLessonInput } from './lesson.input';
import { ParseObjectIdPipe } from '../pipes/validation/parse-object-id.pipe';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';
import { StudentType } from '../student/student.type';

@Resolver(of => LessonType)
export class LessonResolver {

  constructor(
    private lessonService: LessonService,
    private studentService: StudentService) {
  }

  @Query(returns => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Query(returns => LessonType)
  getLesson(@Args('id', ParseObjectIdPipe) id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation(returns => LessonType)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudents(@Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField(returns => [StudentType])
  students(@Parent() lesson: Lesson) {
    return this.studentService.getStudentsByIds(lesson.students);
  }
}