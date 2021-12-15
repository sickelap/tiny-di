import "reflect-metadata";

export function Injectable(_target: any) {}

class Container {
  private _things = {};

  get_all() {
    return this._things;
  }

  get<T = unknown>(thing: any): T {
    if (!this._things[thing.name]) {
      throw Error();
    }
    return this._things[thing.name] as T;
  }

  register(thing: any): any {
    if (this._things[thing.name]) {
      return this._things[thing.name];
    }
    const params = Reflect.getMetadata("design:paramtypes", thing);
    const args = params ? params.map((arg: any) => this.register(arg)) : [];
    return this._things[thing.name] = new thing(...args);
  }
}

export default new Container();
