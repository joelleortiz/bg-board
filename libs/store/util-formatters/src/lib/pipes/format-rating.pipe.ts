import { Pipe, PipeTransform } from '@angular/core';
import { formatRating } from '../store-util-formatters';

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe implements PipeTransform {
  transform(value: number): string {
    return formatRating(value);
  }
}
