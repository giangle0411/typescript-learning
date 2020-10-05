// Tuples: rarely used

// Regular object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// Declare type for tuple
type Drink = [string, boolean, number]

// following are tuples
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]
