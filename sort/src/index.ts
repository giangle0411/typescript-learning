import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// Sorting numbers
const numbersCollection = new NumbersCollection([-12, 11, 12, -4, 8, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

// Sorting string characters
const charactersCollection = new CharactersCollection('XaksPdnwos2')
charactersCollection.sort()
console.log(charactersCollection.data)

// Sorting a linked list
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-5)
linkedList.add(-10)
linkedList.add(18)

linkedList.sort()
linkedList.print()
