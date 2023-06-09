import express from 'express'
import { 
    createPerson,
    getPersons,
    getPerson,
    updatePerson,
    deletePerson 
} from './controller/person'
import { PersonService } from './service/person_service'

const app = express()
const port = 3000

app.listen(port, async () => {       
    console.log( `server started at http://localhost:${port}`)
    
    const personService = new PersonService()
    createPerson(personService, {
        firstName: 'minizy',
        lastName: 'mint',
        age: 30,
        address: 'sao paulo'
    })
    createPerson(personService, {
        firstName: 'minizy2',
        lastName: 'mint2',
        age: 19,
        address: 'japa'
    })
    createPerson(personService, {
        firstName: 'minizy3',
        lastName: 'mint3',
        age: 20,
        address: 'franca'
    })
    updatePerson(personService, '3', {
        id: '3',
        firstName: 'firstName3',
        lastName: 'lastName3',
        age: 20,
        address: 'franca'
    })
    deletePerson(personService, '3')
    console.log(getPerson(personService, '1'))
    console.log(getPersons(personService))
})
