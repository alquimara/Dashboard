import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker'


type UserType ={
  name:string,
  emai:string,
  create_at:string

}
export function makeServer(){
  const server = createServer({
    models:{
      user:Model.extend<Partial<UserType>>({})
    },
  
    factories:{
      user:Factory.extend({
        name(){
          return faker.name.firstName()

        },
        email(){
          return faker.internet.email().toLowerCase()
        },
        createAt(){
          return faker.date.recent(10)

        }
      })
    },
    seeds(server){
      server.createList('user', 10)

    },
    routes(){
      this.namespace = 'api'
      this.timing= 750
      this.get('/users')
      this.post('/users')

      this.namespace = ''
      this.passthrough() //serve para passar para a próxima rota dentro de pages

    },

  })
  return server
}