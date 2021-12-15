import { Injectable } from './di';

@Injectable
export class Address {
  constructor() {}
  getValue() {
    return +new Date();
  }
}
