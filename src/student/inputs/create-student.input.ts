import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @MaxLength(100)
  @Field()
  firstName: string;

  @MinLength(3)
  @MaxLength(100)
  @Field()
  lastName: string;

}