import Guards from '../guards/common.guard';

export default class Result<TValue> {
  constructor(public readonly success: boolean, public readonly message: string, public readonly value: TValue | null) {}

  static success<TValue>(value: TValue): Result<TValue> {
    return new Result<TValue>(true, '', value);
  }

  static fail<TValue>(message: string): Result<TValue> {
    return new Result<TValue>(false, message, null);
  }

  /** Safe return the value, throws an error when value has null or undefined value */
  getValue(): TValue {
    if (Guards.isNullOrUndefined(this.value) || !this.success) throw new Error('Value null exception.');

    return this.value;
  }
}
