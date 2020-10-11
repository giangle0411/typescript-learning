// Type annotation
let apples: number = 5
let speed: string = 'fast'

// Type inference (let ts figure out the type)
let hasName = true
let color = 'red'

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Fuction
// (i: number) => {} is the function
// const logNumber: (i: number) => void is the annotation. Void indicate what the
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json) // JSON.parse function returns type 'any'
// Typescipt has no idea what type coordinates is (before { x: number; y: number } annotation)
// 'any' is a type, but ts doesn't know what it is -> can't do error checking around the value with type 'any'
// type: any NEEDS TO be avoided
console.log(coordinates) // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialise it later
let words = ['red', 'green', 'blue']
let foundWord: boolean // or let foundWord = false (type inference)

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false // numberAboveZero can either be false or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
