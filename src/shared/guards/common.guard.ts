import { ObjectKeys, PrimitiveValue } from '../types/common.types';

interface TypeOfMap {
  string: string;
  number: number;
  boolean: boolean;
  object: object;
  bigint: bigint;
  symbol: symbol;
  undefined: undefined;
  function: Function;
}
type Sentinel = ObjectKeys<TypeOfMap>;
type TypeGuard<TKey extends Sentinel> = TypeOfMap[TKey];

export default class Guards {
  static isNullOrUndefined(value: unknown): value is undefined | null {
    return value === null || value === undefined;
  }

  static isNullOrEmpty(value: string | null): value is null | '' {
    return Guards.isNullOrUndefined(value) || value === '';
  }

  static isOfType<TKey extends Sentinel>(type: TKey, value: unknown): value is TypeGuard<TKey> {
    return typeof value === type;
  }

  static isPrimitive(value: unknown): value is PrimitiveValue {
    return Guards.isOfType('string', value) || Guards.isOfType('number', value) || Guards.isOfType('boolean', value);
  }
}
