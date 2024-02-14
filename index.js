import express from 'express'
import { Person } from './person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 3000

app.use(
    express.json(),
    router
)

router.get('^/$|/class', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})

router.get('/person1', (req, res)=> {
    let person1 = new Person()
    person1.FirstName = 'Zukisa'
    person1.LastName = 'Maza'
    person1.Age = +98
    person1.display()
    res.end('Please check the console')
    })

router.get('/person2', (req, res)=> {
    let person2 = new Person()
    person2.FirstName = 'Proctor'
    person2.LastName = 'Lowkey'
    person2.Age = +99
    person2.display()
    res.end('Please check the console')
})

// router.get('/person3', (req, res)=> {
//     let person3 = Concat(person1 + '\n' + person2)
//     person3.display()
//     res.send('Mojo!!!')
// })

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})