import { Row } from "../../../documents/app/row"

export interface GetRowResponse extends Row {}

export interface DeleteRows {
  rows: (Row | string)[]
}

export interface DeleteAllRows {
  rows: string
}

export interface DeleteRow {
  _id: string
}

export type DeleteRowRequest = DeleteRows | DeleteRow | DeleteAllRows

export interface ValidateResponse {
  valid: boolean
  errors: Record<string, any>
}
