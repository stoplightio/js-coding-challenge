import { IApp, ISpec } from "../types";

export class App implements IApp {
  public spec: ISpec;

  constructor(props: IApp) {
    this.spec = props.spec;
  }
}
