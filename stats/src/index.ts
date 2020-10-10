import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'
import { match } from 'assert'

// 1. Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// 2. Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
// matchReader.matches
let chelseaWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
    chelseaWins++
  } else if (match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
    chelseaWins++
  }
}

console.log(`Chelsea won ${chelseaWins} games`)
