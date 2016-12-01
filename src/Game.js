'use strict';

function Game() {
  this.board = [
                  [0,0,0],
                  [0,0,0],
                  [0,0,0]];
  this.player1 = [];
  this.player2 = [];
  this.win =   [
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
    console.log(this.player1.diff(this.win[i]));
    console.log(this.win[i].diff(this.player1));

    // console.log(this.win[i] - this.player1);
    // console.log(this.win[i]);
      // if (this.win[i] === this.player1) {
      //   console.log('yes');
      // }
  }
}



Game.prototype.player2Win = function() {

}

//
// win object
// player 1 win
// board = ['X', 'X', 'X'], [4, 5, 6], [7, 8, 9]
// board = [1, 2, 3], ['X', 'X', 'X'], [7, 8, 9]
// board = [1, 2, 3], [4, 5, 6], ['X', 'X', 'X']
// board = ['X', 2, 3], ['X', 5, 6], ['X', 8, 9]
// board = [1, 'X', 3], [4, 'X', 6], [7, 'X', 9]
// board = [1, 2, 'X'], [3, 4, 'X'], [7, 8, 'X']
// board = ['X', 2, 3], [4, 'X', 6], [7, 8, 'X']
// board = [1, 2, 'X'], [4, 'X', 6], ['X', 8, 9]
// player 2 win
// board = ['O', 'O', 'O'], [4, 5, 6], [7, 8, 9]
// board = [1, 2, 3], ['O', 'O', 'O'], [7, 8, 9]
// board = [1, 2, 3], [4, 5, 6], ['O', 'O', 'O']
// board = ['O', 2, 3], ['O', 5, 6], ['O', 8, 9]
// board = [1, 'O', 3], [4, 'O', 6], [7, 'O', 9]
// board = [1, 2, 'O'], [3, 4, 'O'], [7, 8, 'O']
// board = ['O', 2, 3], [4, 'O', 6], [7, 8, 'O']
// board = [1, 2, 'O'], [4, 'O', 6], ['O', 8, 9]
