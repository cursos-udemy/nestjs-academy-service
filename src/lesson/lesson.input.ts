import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MaxLength, MinLength } from 'class-validator';

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
}