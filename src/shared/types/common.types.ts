export interface QueryResult<T> {
  items: Array<T>;
  totalCount: number;
}

export type ObjectKeys<T> = keyof T;

/** Get a type with a specific property as optional */
export type PartialBy<T, K extends ObjectKeys<T>> = Omit<T, K> &
  Partial<Pick<T, K>>;
/** Get a type with a specific property as required */
export type RequiredBy<T, K extends ObjectKeys<T>> = Omit<T, K> & Required<Pick<T, K>>;
/** Get a type with a specific property as required and make the others as partial */
export type RequiredOnly<T, K extends ObjectKeys<T>> = Partial<Omit<T, K>> & Required<Pick<T, K>>;

export type PrimitiveValue = string | number | boolean;

type PrimitiveJsonValue = string | number | boolean | null;
export type JsonValue = PrimitiveJsonValue | JsonValue[] | JsonObject;
export type JsonObject = { [key: string]: JsonValue };