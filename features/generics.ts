// Deeper dive in generics

// Example of generics

class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c'])

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything([1, 2, 3])
printAnything(['a', 'b', 'c'])
printAnything<boolean>([true, false, false, true])

// Generic constraints

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

// Constrains means promise that there will be a print() function in T
// T extends Printable
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHousesOrCars<House>([new House(), new House()])
