import { Spec } from "swagger-schema-official";

export type ISpec = Spec;

export interface IApp {
  spec: ISpec;
}

export interface IAppProps {
  appStore: IApp;
}

export interface IAppState {}
