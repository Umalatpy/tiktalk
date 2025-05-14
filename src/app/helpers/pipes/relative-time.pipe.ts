import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({ name: 'relativeTime' })
export class RelativeTimePipe implements PipeTransform {
  transform(value: DateTime | Date | string): string {
    if (!value) return '';

    let dateTime: DateTime;

    if (value instanceof DateTime) {
      dateTime = value;
    } else if (value instanceof Date) {
      dateTime = DateTime.fromJSDate(value);
    } else {
      dateTime = DateTime.fromISO(value);
    }

    return dateTime.toRelative({ locale: 'ru' }) || '';
  }
}
