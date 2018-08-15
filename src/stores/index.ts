import { IApp } from "../types";

import { App } from "./app";

export const createStores = (initialState: IApp) => {
  return {
    appStore: new App(initialState)
  };
};
