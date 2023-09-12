import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  const rollMultipleTimes = (rolls: number[], times: number) => {
    for (let i = 0; i < times; i++) {
      rolls.forEach(pins => game.roll(pins));
    }
  }

  it('should be able to roll', () => {
    game.roll(5);
    expect(game).toBeDefined();
  });

  it('should calculate the score of a Gutter Game (score 0)', () => {
    rollMultipleTimes([0], 20);
    const score = game.score();
    expect(score).toBe(0);
  });

  it('should calculate the score of a game with all rolls of 1 (score 20)', () => {
    rollMultipleTimes([1], 20);
    const score = game.score();
    expect(score).toBe(20);
  });

  it('should calculate the score of a game with a spare and the rest as 0', () => {
    rollMultipleTimes([5, 5], 1);
    rollMultipleTimes([0], 18);
    const score = game.score();
    expect(score).toBe(10);
  });

  it('should calculate the score of a game with a strike and the rest as 0', () => {
    rollMultipleTimes([10], 1);
    rollMultipleTimes([0], 18);
    const score = game.score();
    expect(score).toBe(10);
  });

  it('should calculate the score of a perfect game (all strikes) - score 300', () => {
    rollMultipleTimes([10], 12);
    const score = game.score();
    expect(score).toBe(300);
  });
});
