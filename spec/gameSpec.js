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


  describe('First turn', function() {
    it('allows a player to take an initial turn', function() {
      expect(game.player1Turn(0, 0)).toEqual(1);
    });

    it('allows player 2 to take a turn', function() {
      expect(game.player2Turn(0, 1)).toEqual(2);
    })

    it('stores player 1\s turn', function() {
      game.player1Turn(0, 0);
      expect(game.player1).toEqual([1]);
    });

    it('stores player 2\'s turn', function() {
      game.player2Turn(0, 1);
      expect(game.player2).toEqual([2]);
    })


    it('does not allow a player to select a spot that has an X', function() {
      game.player1Turn(0, 0);
      expect(game.player2Turn(0, 0)).toEqual("This is already taken!");
    });

    it('removes that available place from the board', function() {
      game.updateBoard(0, 0);
      expect(game.board).toEqual([
                        ['X', 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]]);
    });

  });

});
