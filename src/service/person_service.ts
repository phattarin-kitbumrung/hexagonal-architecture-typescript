import { Person } from "../repository/person"
import { PersonMock } from "../repository/person_mock"
import { IPersonResponse, PersonResponse, ErrorResponse } from "./person"

export class PersonService implements IPersonResponse {
    private personRepository: PersonMock
    private personId: string 
    constructor() {
        this.personRepository = new PersonMock()
        this.personId = '0'
    }

    public create(person: Partial<PersonResponse>): PersonResponse | ErrorResponse {
        this.personId = (parseInt(this.personId) + 1).toString()
        person.id = this.personId
        this.personRepository.create(person as Person)

        return this.personRepository.getById(person.id)
    }

    public getAll(): PersonResponse[] | ErrorResponse {
        if((this.personRepository.getAll()).length === 0){
            return {
                status: 404,
                message: "Person not found"
            }
        }

        return this.personRepository.getAll()
    }

    public getById(id: string): PersonResponse | ErrorResponse {
        const person = this.personRepository.getById(id)
        if(!person){
            return {
                status: 404,
                message: "Person not found"
            }
        }
      
        return person
    }
    
    public update(id: string, person: Partial<PersonResponse>): PersonResponse | ErrorResponse {
        if(this.personRepository.getById(id).id !== id){
            return {
                status: 404,
                message: "Person not found"
            }
        }

        if(person.id !== id){
            return {
                status: 400,
                message: "personId does not match"
            }
        }

        return this.personRepository.update(id, person as PersonResponse)
    }

    public delete(id: string): boolean | ErrorResponse {
        if(!this.personRepository.getById(id)){
            return {
                status: 404,
                message: "Person not found"
            }
        }

        return this.personRepository.delete(id)? true: {
            status: 500,
            message: "Internal server error"
        }
    }
}