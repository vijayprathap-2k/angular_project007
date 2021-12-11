import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeda'
})
export class PipedaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
