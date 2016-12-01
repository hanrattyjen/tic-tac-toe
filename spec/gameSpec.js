'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('shows all possible moves', function() {
    expect(game.board).toEqual([
                      [1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9]]);
  });

  it('shows current moves available', function() {
    expect(game.getCurrentBoard()).toEqual([
                      [1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9]]);
    });

  it('has player 1 starting game with no moves taken', function() {
    expect(game.player1).toEqual([]);
  });

  it('has player 2 starting game with no moves taken', function() {
    expect(game.player2).toEqual([]);
  })

});
