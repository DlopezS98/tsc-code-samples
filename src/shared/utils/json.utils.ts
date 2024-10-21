import Guards from '../guards/common.guard';

export default class JsonUtils {
  static isValidJsonString(jsonString: string): boolean {
    if (Guards.isNullOrEmpty(jsonString)) return false;

    try {
      const value = JSON.parse(jsonString);
      // Check if the parsed value is null or a primitive
      if (Guards.isNullOrUndefined(value)) return false;

      return Guards.isOfType('object', value);
    } catch (error) {
      return false;
    }
  }
}
