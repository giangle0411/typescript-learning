// Import Type definition file
import faker from 'faker'
// Import interface for User
import { Mappable } from './CustomMap'
// Typescript doesn't usually use export default
//  Avoid export default while we can (community convention)
export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }

  color: string = 'cyan'
}
