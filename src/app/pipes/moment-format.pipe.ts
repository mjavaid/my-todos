const moment = require('moment');
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'momentFormat' })
export class MomentFormatPipe implements PipeTransform {
  transform(date: number, format?: string) {
    return moment(date).fromNow();
  }
}
