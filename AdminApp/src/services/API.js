/*

This is a wrapper around the axios library.  It creates
a CRUD RESTful interface for a resource.  In order to use
it, you first instantiate it with the baseURL that you
are using.  In our case, it will just be http://localhost:8080.
When you want to use it to perform CRUD on an operation,
you call userApi = api.creteEntity("user") to access calls on 
http://localhost:8080/user.  It can be reused by just  calling
createEntity on another resource, such as 
carApi = api.createEntity("car") to get the car resource
at http://localhost:8080/car.
*/

import axios from 'axios';

export class API {

    constructor(url) {
        this.url = url;
        this.endpoints = {};
        this.headers= {
            "Content-type": "application/json"
          }
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach(this.createEntity.bind(this))
    }

    createBasicCRUDEndpoints( {name}) {
        var endpoints = {}

        const resourceURL = this.url + '/' + name;

        endpoints.getAll = () => axios.get(resourceURL, this.headers)

        endpoints.getOne = ( {id}) => axios.get(`${resourceURL}/${id}`,this.headers)
   
        endpoints.create = (toCreate) => axios.post(resourceURL, toCreate, this.headers)

        endpoints.update = (toUpdate) => axios.put(`${resourceURL}/${toUpdate.id}`,toUpdate)

        endpoints.delete = (id) => axios.delete(`${resourceURL}/${id}`, this.headers)

        return endpoints
    }
}