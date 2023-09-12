export class BowlingGame {
  private rolls: number[] = [];

  constructor() {}

  private calculateStrikeScore(rollIndex: number): number {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }

  private calculateFrameScore(rollIndex: number): number {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  private calculateSpareScore(rollIndex: number): number {
    return 10 + this.rolls[rollIndex + 2];
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  roll(pins: number): void {
    this.rolls.push(pins);
  }

  score(): number {
    const FRAMES = 10;
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < FRAMES; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += this.calculateStrikeScore(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += this.calculateSpareScore(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.calculateFrameScore(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }
}