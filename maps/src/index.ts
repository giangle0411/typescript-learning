import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

// Create User and Company instances
const company = new Company()
const user = new User()

// create a map
const customMap = new CustomMap('map')

// Mark the User and Company on the map
customMap.addMarker(user)
customMap.addMarker(company)
