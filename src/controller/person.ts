import { PersonResponse, ErrorResponse } from '../service/person'
import { PersonService } from '../service/person_service'
import { Person } from '../repository/person'

export const createPerson = function(service: PersonService, person: Partial<Person>): PersonResponse | ErrorResponse {
   return service.create(person)
}

export const getPersons = function(service: PersonService): PersonResponse[] | ErrorResponse {
   return service.getAll()
}

export const getPerson = function(service: PersonService, id: string): PersonResponse | ErrorResponse {
    return service.getById(id)
}

export const updatePerson = function (service: PersonService, id: string, person: Partial<Person>): PersonResponse | ErrorResponse {
   return service.update(id, person)
}

export const deletePerson = function (service: PersonService, id: string): boolean | ErrorResponse {   
   return service.delete(id)
}