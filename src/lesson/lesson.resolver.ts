import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {

  constructor(private lessonService: LessonService) {
  }

  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'jjjjasdasdasdgg',
      name: 'nestjs graphql',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    };
  }

  @Query(returns => LessonType)
  getLesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation(returns => LessonType)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonService.createLesson(createLessonInput);
  }
}