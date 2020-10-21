import 'reflect-metadata'

const plane = {
  color: 'blue',
}

// adding invisible property of 'note: hi there' to plane
Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('height', 10, plane)

console.log(plane) // { color: 'blue' }

const note = Reflect.getMetadata('note', plane)
const height = Reflect.getMetadata('height', plane)

console.log(note) // hi there
console.log(height) // 10

@printMetadata
class Plane {
  color: string = 'blue'

  @markFunction('HI THERE!')
  fly(): void {
    console.log('vrrrrrr')
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret) // HI THERE!
