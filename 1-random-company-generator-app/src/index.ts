import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'
const company = new Company()

const user = new User()
const myMap = new CustomMap('map')
myMap.addMarker(user);
myMap.addMarker(company);


