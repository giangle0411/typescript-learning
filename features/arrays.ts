// Typed arrays
const carMakers = ['ford', 'toyota', 'mazda']

const carsByMake = [['f150'], ['Corolla'], ['CX9']]

// Help with inference when extracting values
const vehicle = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(true)

// Help with 'map'
// Provide auto complete on variable being parsed to car
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '08-12-2020']
importantDates.push('17-11-2020')
importantDates.push(new Date())
