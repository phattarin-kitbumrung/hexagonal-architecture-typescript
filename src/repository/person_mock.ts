import { IPerson, Person } from "./person"

export class PersonMock implements IPerson {
    private person: Person[]

    constructor() {
        this.person = []
    }

    public create(person: Person): Person {
        this.person.push(person)

        return person
    }

    public getAll(): Person[] {
        return this.person
    }

    public getById(id: string): Person {
        return this.person.find(person => person.id === id)
    }

    public update(id: string, person: Person): Person {
        let data = this.getById(id) 
        data = {
            ...data,
            ...person
        }  
        this.person[this.person.findIndex(person => person.id === id)] = data

        return this.person.find(person => person.id === id)
    }

    public delete(id: string): boolean {
        this.person.splice(this.person.findIndex(person => person.id === id), 1)

        return true
    }
}
