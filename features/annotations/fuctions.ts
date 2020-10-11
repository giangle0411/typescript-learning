// annotations:
//              type of parameters
//                      |
//                      |     type of returned value
//                      |             |
const add = (a: number, b: number): number => {
  return a + b
}

// Fuction inference
// subtract fuction also returns value with the type of number
// Typescript looks at the return statement and figure out the returned value type
const subtract = (a: number, b: number) => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

// The above syntax also works with anonymous function that's assigned to a variable
const multiply = function (a: number, b: number): number {
  return a * b
}

// type: void means the function won't return anything
const logger = (message: string): void => {
  console.log(message)
}

// type: never when function never reach its end point
// Never execute the function completely - Extremely rare
const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date)
//   console.log(forecast.weather)
// }

//ES6 destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
