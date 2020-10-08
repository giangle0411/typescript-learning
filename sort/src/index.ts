import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([-12, 11, 12, -4, 8, 0])
const sorter = new Sorter(numbersCollection)
const charactersCollection = new CharactersCollection('XaksPdnwos2')
const charactersSorter = new Sorter(charactersCollection)
charactersSorter.sort()
sorter.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)
