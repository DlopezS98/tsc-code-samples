import Guards from './shared/guards/common.guard';
import { PartialBy, RequiredBy, RequiredOnly } from './shared/types/common.types';
import Prompt from 'prompt-sync';
const prompt = Prompt();

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  optional1?: boolean;
  optional2?: boolean;
}

class Startup {
  private static _instance: Startup;
  private constructor() {}

  static get Instance(): Startup {
    return this._instance || (this._instance = new this());
  }

  async initialize(): Promise<void> {
    const value = prompt('Enter a value:') || null;
    this.typeGuards(value);
  }

  typeGuards(value: unknown): void {
    if (Guards.isNullOrUndefined(value)) return console.log('The value is null or undefined.');

    if (Guards.isPrimitive(value)) {
      console.log('The provided values is a primitive data type.');
    }

    if (Guards.isOfType('number', value)) {
      console.log('Value is a number');
      console.log('Value: ' + value.toFixed(2));
    }

    if (Guards.isOfType('boolean', value)) {
      console.log('Value is a boolean');
      console.log('Value: ' + value);
    }

    if (Guards.isOfType('string', value)) {
      console.log('Value is a string');
      console.log('Upper case: ' + value.toLocaleUpperCase());
      console.log('Lower case: ' + value.toLowerCase());
      console.log('Chars: ' + value.length);
    }
    if (Guards.isOfType('bigint', value)) {
      console.log('Value is a bigint');
      console.log('Value: ' + value);
    }
  }

  requiredOnlyOneProperty(user: RequiredOnly<User, 'id'>): void {
    // Only the id property is required...
    const id: string = user.id;
    const firstName: string | undefined = user.firstName;
    console.log(`id: ${id} + name: ${firstName}`);
  }

  partialOnlyByProperty(user: PartialBy<User, 'email'>): void {
    // Only the email property is not required...
    const id: string = user.id;
    const email: string | undefined = user.email;
    console.log(`id: ${id} + email: ${email}`);
  }

  requiredByProperty(user: RequiredBy<User, 'optional1'>) {
    // property "optional1" now is required.
    const optional1: boolean = user.optional1;
    const optional2: boolean | undefined = user.optional2;
    console.log({ optional1, optional2 });
  }
}

Startup.Instance.initialize();
