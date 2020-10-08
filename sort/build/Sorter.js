"use strict";
// Instruction on how to be eligible for sorting
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
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
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
