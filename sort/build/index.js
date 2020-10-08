"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Sorting numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([-12, 11, 12, -4, 8, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sorting string characters
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaksPdnwos2');
charactersCollection.sort();
console.log(charactersCollection.data);
// Sorting a linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-5);
linkedList.add(-10);
linkedList.add(18);
linkedList.sort();
linkedList.print();
