'use strict';

function Game() {
  this.board = [
                  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]];
  this.player1 = [];
  this.player2 = [];
}

Game.prototype.getCurrentBoard = function() {
  return this.board;
}
