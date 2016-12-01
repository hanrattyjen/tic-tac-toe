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

Game.prototype.player1Turn = function(row, column) {
  var value = this.board[row][column];
  if (value === "X") {
    alert("This is already taken!");
  } else {
    this.player1.push(value);
    this.updateBoard(row, column);
    return value;
  }
}

Game.prototype.player2Turn = function(row, column) {
  var value = this.board[row][column];
  if (value === "X") {
    return ("This is already taken!");
  } else {
    this.player2.push(value);
    this.updateBoard(row, column);
    return value;
  }
}

Game.prototype.updateBoard = function(row, column) {
  this.board[row][column] = 'X';
  return this.board;
}
