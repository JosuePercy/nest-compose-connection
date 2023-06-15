import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

// los pipes transforman la data, fisicamente cambia el tipo de dato

@Injectable()
export class ParseMongoIdPipe implements PipeTransform { /* implementa el metodo de transformar */
  transform(value: string, metadata: ArgumentMetadata) {

    if ( !isValidObjectId(value)){
      throw new BadRequestException(`${value} is not a valid MongoID`);
    }

    return value;
  }
  
}
