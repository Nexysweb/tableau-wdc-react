export type Value = number | string | boolean;
export type Tabular = Value[][];
export type ServiceResponse = [string[], Tabular]; // 0: headers, 1: content

export interface Report<A = Tabular> {
  id: string;
  alias: string;
  url: string;
  method: string;
  columns: ColumnDef[];
  mapping?: (x: A) => ServiceResponse;
}

export interface ColumnDef {
  name: string;
  type?: tableau.tDataType;
}

export interface Config {
  name: string;
  reports: Report[];
}

export interface Schema {
  id: string;
  alias: string;
  columns: SchemaColumn[];
}

export interface SchemaColumn {
  id: string;
  alias: string;
  dataType: any;
}
