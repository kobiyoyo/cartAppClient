/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export const toCamelCase = (data: any) => _.mapKeys(data, (value, key) => _.camelCase(key));
export const toSnakeCase = (data: any) => _.mapKeys(data, (value, key) => _.snakeCase(key));
