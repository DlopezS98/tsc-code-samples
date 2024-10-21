import Guards from "../guards/common.guard";

export default class DateUtils {
  static getDateFrom(value: unknown): Date | null {
    if (Guards.isNullOrUndefined(value)) return null;
    
    if (value instanceof Date) return value;
    if (!(Guards.isOfType('string', value) || Guards.isOfType('number', value))) return null;

    return isNaN(new Date(value).getDate()) ? null : new Date(value)
  }
}
