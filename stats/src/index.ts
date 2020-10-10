import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// 1. Read the csv files
const reader = new CsvFileReader('football.csv')
reader.read()

let chelseaWins = 0

for (let match of reader.data) {
  if (match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
    chelseaWins++
  } else if (match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
    chelseaWins++
  }
}

console.log(`Chelsea won ${chelseaWins} games`)
