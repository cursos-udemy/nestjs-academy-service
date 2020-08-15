import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm/index';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {

  constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>) {
  }

  public async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }


  public async getLessonById(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne(id);
    if (!lesson) throw new NotFoundException();
    return lesson;
  }

  public async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({ name, startDate, endDate });
    return this.lessonRepository.save(lesson);
  }
}
