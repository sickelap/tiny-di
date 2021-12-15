import { Address } from "./address";
import { Injectable } from "./di";

@Injectable
export class Company {
  constructor(private address: Address) {}

  getMeSomething() {
    return this.address.getValue();
  }
}
