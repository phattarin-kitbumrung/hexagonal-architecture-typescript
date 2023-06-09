export type PersonResponse = {
    id: string
    firstName: string
    lastName: string
    age: number
    address: string
}

export type ErrorResponse = {
    status: number
    message: string
}
  
export interface IPersonResponse {
  getAll(): PersonResponse[]|ErrorResponse
  getById(id: string): PersonResponse|ErrorResponse
  create(person: Partial<PersonResponse>): PersonResponse|ErrorResponse
  update(id: string, person: Partial<PersonResponse>): PersonResponse|ErrorResponse
  delete(id: string): boolean|ErrorResponse
}
