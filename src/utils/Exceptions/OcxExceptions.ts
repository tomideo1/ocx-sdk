export class OcxExceptions extends Error {
  public message: string;
  public name: string;
  public stack: string;

  constructor(message: string) {
    super(message);
    this.stack = (<any>new Error()).stack;
  }
}
