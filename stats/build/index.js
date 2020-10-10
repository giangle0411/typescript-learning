"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
// 1. Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// 2. Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
var chelseaWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match_1 = _a[_i];
    if (match_1[1] === 'Chelsea' && match_1[5] === MatchResult_1.MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match_1[2] === 'Chelsea' && match_1[5] === MatchResult_1.MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log("Chelsea won " + chelseaWins + " games");
