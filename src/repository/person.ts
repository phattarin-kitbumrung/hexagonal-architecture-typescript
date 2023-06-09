export type Person = {
    id: string
    firstName: string
    lastName: string
    age: number
    address: string
}
  
export interface IPerson {
  getAll(): Person[]
  getById(id: string): Person
  create(person: Person): Person
  update(id: string, person: Person): Person
  delete(id: string): boolean
}
