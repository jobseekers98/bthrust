/** Outer dependencies */
import { Injectable } from '@angular/core';
import { NgbTimeStruct, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';

function isInteger(value: any): value is number {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

@Injectable()
export class NgbTimeToStringAdapter extends NgbTimeAdapter<string> {
  private year: number = new Date().getUTCFullYear();
  private month: number = new Date().getUTCMonth() + 1;
  private day: number = new Date().getUTCDate();

  /**
   * Converts user-model date into an NgbTimeStruct for internal use in the library
   */
  public fromModel(dateString: string): NgbTimeStruct {
    const date = new Date(dateString);
    const isValidDate = !isNaN(date.valueOf());

    if (!dateString || !isString(dateString) || !isValidDate) {
      return null;
    }

    this.year = date.getUTCFullYear();
    this.month = date.getUTCMonth() + 1;
    this.day = date.getUTCDate();

    return { hour: date.getUTCHours(), minute: date.getUTCMinutes(), second: date.getUTCSeconds() };
  }

  /**
   * Converts internal time value NgbTimeStruct to user-model date
   * The returned type is supposed to be of the same type as fromModel() input-value param
   */
  public toModel(time: NgbTimeStruct): string {
    if (time && isInteger(time.hour) && isInteger(time.minute) && isInteger(time.second)) {
      const year = this.year.toString().padStart(2, '0');
      const month = this.month.toString().padStart(2, '0');
      const day = this.day.toString().padStart(2, '0');

      const hour = time.hour.toString().padStart(2, '0');
      const minute = time.minute.toString().padStart(2, '0');
      const second = time.second.toString().padStart(2, '0');

      return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
    }

    return null;
  }
}
