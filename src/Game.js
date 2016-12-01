'use strict';

function Game() {
  this.board = [
                  [0,0,0],
                  [0,0,0],
                  [0,0,0]];
  this.player1 = [];
  this.player2 = [];
  this.win = [
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
  ];
}

Game.prototype.getCurrentBoard = function() {
  return this.board;
}

Game.prototype.player1Turn = function(row, column) {
  var value = this.board[row][column];
  if (this.player1.length === 3) {
    this.player1.unshift();
    return player1;
  }
  if (value === 'X') {
    return ("This is already taken!");
  } else {
    this.player1.push([row, column]);
    this.updateBoard(row, column, 'X');
    return value;
  }
}

Game.prototype.player2Turn = function(row, column) {
  var value = this.board[row][column];
  if (this.player1.length === 3) {
    this.player1.unshift();
    return player1;
  }
  if (value === 'X') {
    return ("This is already taken!");
  } else {
    this.player2.push([row, column]);
    this.updateBoard(row, column, 'O');
    return value;
  }
}

Game.prototype.updateBoard = function(row, column, turn) {
  this.board[row][column] = turn;
  return this.board;
}

Game.prototype.player1Win = function() {
  var arrayLength = this.win.length;
  for (var i = 0; i < arrayLength; i++) {
    if ((this.win[i].toString()).includes(this.player1.toString())) {
      return ('Win!');
    }
  }
}

Game.prototype.player2Win = function() {

}
