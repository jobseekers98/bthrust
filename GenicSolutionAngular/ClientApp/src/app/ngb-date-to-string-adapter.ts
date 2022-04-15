/** Outer dependencies */
import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

function isInteger(value: any): value is number {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

@Injectable()
export class NgbDateToStringAdapter extends NgbDateAdapter<string> {
  private hour = 0;
  private minute = 0;
  private second = 0;

  /**
   * Converts user-model date into an NgbDateStruct for internal use in the library
   */
  public fromModel(dateString: string): NgbDateStruct {
    const date = new Date(dateString);

    const isValidDate = (!isNaN(date.valueOf()));

    if (!dateString || !isString(dateString) || !isValidDate) {
      return null;
    }

    this.hour = date.getUTCHours();
    this.minute = date.getUTCMinutes();
    this.second = date.getUTCSeconds();

    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
  }

  /**
   * Converts internal date value NgbDateStruct to user-model date
   * The returned type is supposed to be of the same type as fromModel() input-value param
   */
  public toModel(date: NgbDateStruct): string {
    if (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) {
      const year = date.year.toString().padStart(2, '0');
      const month = date.month.toString().padStart(2, '0');
      const day = date.day.toString().padStart(2, '0');

      const hour = this.hour.toString().padStart(2, '0');
      const minute = this.minute.toString().padStart(2, '0');
      const second = this.second.toString().padStart(2, '0');

      return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
    }

    return null;
  }
}
