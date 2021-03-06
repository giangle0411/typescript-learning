// Child class, inherit from the parent - CsvFileReader.ts

import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from '../utils'
import { MatchResult } from '../MatchResult'
type MatchData = [Date, string, string, number, number, MatchResult, string]

// Generic class
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type assertion (overide typescript default behavior),
      row[6],
    ]
  }
}
