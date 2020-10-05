// We can express function in an interface (summary())
interface Vehicle {
  name: string
  year: Date
  broken: boolean
  summary(): string
}

interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
  console.log(`Year: ${vehicle.year}`)
  console.log(`Is it broken?: ${vehicle.broken}`)
}
printVehicle(oldCivic)

// Typescript checks if the object type is Reportable
// Both oldCivic and drink object have summary() function property
// So oldCivic and drink are objects that's type satisfied Reportable
// oldCivic and drink then can be called from printSummary() function
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}
printSummary(oldCivic)
printSummary(drink)
