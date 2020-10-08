// Instruction on how to be eligible for sorting

// length, compare method and swap methods need to be defined
// in order to be used in Sorter

// With the use of abstract class, interface is no longer needed
// Interface use when we have very different objects that want to work together
// Promotes loose coupling

// interface Sortable {
//   length: number
//   compare(leftIndex: number, rightIndex: number): boolean
//   swap(leftIndex: number, rightIndex: number): void
// }

// Abstract classes are used when we are trying to build up a definition of an object
// Strongly couples classes together

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number

  sort(): void {
    const { length } = this
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}
