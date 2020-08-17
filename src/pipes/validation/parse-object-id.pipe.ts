import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {

  transform(value: string): string {
    if (!ObjectID.isValid(value)) throw new BadRequestException('Invalid ObjectId');
    return value;
  }

}