export interface Report {
  id: string,
  alias: string,
  url: string,
  method: string,
  columns: string[]
};

export interface Config {
  name: string,
  reports: Report[]
}

export interface Schema { 
  id: string,
  alias: string,
  columns: SchemaColumn[]
}

export interface SchemaColumn {
  id: string,
  alias: string,
  dataType: any
}

export type Value = number | string | boolean;

export type ServiceResponse = [string[], Value[][]] // 0: headers, 1: content