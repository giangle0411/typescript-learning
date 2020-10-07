import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const company = new Company()
const user = new User()
// create a map
const customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company)
