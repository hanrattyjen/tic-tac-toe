'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('shows all possible moves', function() {
    expect(game.board).toEqual([
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]]);
  });

  it('shows current moves available', function() {
    expect(game.getCurrentBoard()).toEqual([
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]]);
    });

  it('has player 1 starting game with no moves taken', function() {
    expect(game.player1).toEqual([]);
  });

  it('has player 2 starting game with no moves taken', function() {
    expect(game.player2).toEqual([]);
  })


  describe('First turn', function() {
    it('allows a player to take an initial turn', function() {
      expect(game.player1Turn(0, 0)).toEqual(0);
    });

    it('allows player 2 to take a turn', function() {
      expect(game.player2Turn(0, 1)).toEqual(0);
    })

    it('stores player 1\s turn', function() {
      game.player1Turn(0, 0);
      expect(game.player1).toEqual([[0, 0]]);
    });

    it('stores player 2\'s turn', function() {
      game.player2Turn(0, 1);
      expect(game.player2).toEqual([[0, 1]]);
    })

    it('does not allow a player to select a spot that has an X', function() {
      game.player1Turn(0, 0);
      expect(game.player2Turn(0, 0)).toEqual("This is already taken!");
    });

    it('removes player 1\s spot from from the board', function() {
      game.updateBoard(0, 0, 'X');
      expect(game.board).toEqual([
                        ['X', 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]]);
    });

    it('removes player 1 and player\'s taken turns from the board', function() {
      game.updateBoard(0, 0, 'X');
      game.updateBoard(0, 1, 'O');
      expect(game.board).toEqual([
                        ['X', 'O', 0],
                        [0, 0, 0],
                        [0, 0, 0]]);
    })
  });

  describe('First 3 rounds of turns will give player 1 a win', function() {

    beforeEach(function() {
      game.player1Turn(0, 0);
      game.player2Turn(1, 1);
      game.player1Turn(1, 0);
      game.player2Turn(0, 1);
      game.player1Turn(2, 0);
    });

    it('allows player 1 to win', function() {
      expect(game.player1Win()).toEqual('Win!');
    });
  });

});
