import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  // run() is required from Analyzer
  run(matches: MatchData[]): string {
    // matchReader.matches
    let wins = 0

    for (let match of matches) {
      if (match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }
    return `Team ${this.team} won ${wins} games`
  }
}
