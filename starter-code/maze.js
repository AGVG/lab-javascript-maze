var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft      = function(){
if (this._miner.dir === 0) {
  this._miner.dir = 3;
} else {
  this._miner.dir--;
}
};

Maze.prototype.turnRight     = function(){
  if (this._miner.dir === 3) {
    this._miner.dir = 0;
  } else {
    this._miner.dir++;
  }
  };

Maze.prototype.isPathForward = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row--][col] === false ||  row-- < 0){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row][col++] === false ||  col++ > 5){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (this._maze[row++][col] === false ||  row++ > 6){
    return false;
  } return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (this._maze[row][col--] === false ||  col-- < 0){
    return false;
  } return true;
}
};

Maze.prototype.isPathLeft    = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row][col--] === false ||  col-- < 0){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row--][col] === false ||  row-- < 0){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (this._maze[row][col++] === false ||  col++ > 5){
    return false;
  } return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (this._maze[row++][col] === false ||  row++ > 6){
    return false;
  } return true;
}
};

Maze.prototype.isPathRight   = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (this._maze[row][col++] === false ||  col++ > 5){
    return false;
  } return true;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (this._maze[row++][col] === false ||  row++ > 6){
    return false;
  } return true;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (this._maze[row][col--] === false ||  col-- < 0){
    return false;
  } return true;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (this._maze[row--][col] === false ||  row-- < 0){
    return false;
  } return true;
}
};

Maze.prototype.moveForward   = function(){
  var row = this._miner.row;
  var col = this._miner.col;
//----------------------------Direction Up-----------------------//
if (this._miner.dir === 0){
  if (isPathForward() === true){
    row--;
    return true;
  } return false;
//---------------------------Direction Right---------------------//
} else if (this._miner.dir === 1){
  if (isPathForward() === true){
    col++;
    return true;
  } return false;
//---------------------------Direction Down----------------------//
} else if (this._miner.dir === 2){
  if (isPathForward() === true){
    row++;
    return true;
  } return false;
//---------------------------Direction Left----------------------//
} else if (this._miner.dir === 3){
  if (isPathForward() === true){
    col--;
    return true;
  } return false;
}
};

Maze.prototype.notDone       = function(){
  var row = this._miner.row;
  var col = this._miner.col;
  if (row === this._exit.row && col === this._exit.col){
    return true;
  } return false;
};

module.exports = Maze;
