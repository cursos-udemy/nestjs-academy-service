import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsMongoId, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(3)
  @MaxLength(100)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsMongoId({ each: true })
  @Field(type => [ID], {defaultValue: []})
  students: string[];
}

@InputType()
export class AssignStudentsToLessonInput {
  @IsMongoId()
  @Field(type => ID)
  lessonId: string;

  @IsMongoId({ each: true })
  @Field(type => [ID])
  studentIds: string[];
}