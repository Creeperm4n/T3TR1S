class Board {
  
    // Reset the board when we start a new game.
    reset() {
      this.grid = this.getEmptyBoard();
    }
    
    // Get matrix filled with zeros.
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }
  }
  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
         (this.insideWalls(x) &&
          this.aboveFloor(y)
        );
      });
    });
  }
// Transpose matrix, p is the Piece.
for (let y = 0; y < p.shape.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [p.shape[x][y], p.shape[y][x]] = 
      [p.shape[y][x], p.shape[x][y]];
    }
  }
  
  // Reverse the order of the columns.
  p.shape.forEach(row => row.reverse());
  rotate(p){
    // Clone with JSON for immutability
    let clone = JSON.parse(JSON.stringify(p));
    
    // Do algorithm
    
    return clone;
  }
  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }
  drawBoard() {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

this.grid.forEach((row, y) => {

    // If every value is greater than 0.
    if (row.every(value => value > 0)) {
    
      // Remove the row.
      this.grid.splice(y, 1);
      
      // Add zero filled row at the top. 
      this.grid.unshift(Array(COLS).fill(0));
    } 
  });
  getLineClearPoints(lines) {  
    return lines === 1 ? Points.SINGLE :
           lines === 2 ? Points.DOUBLE :  
           lines === 3 ? Points.TRIPLE :     
           lines === 4 ? Points.TETRIS : 
           0;
  }
  clearLines() {
    let lines = 0;
    this.board.forEach((row, y) => {    
      if (row.every(value => value !== 0)) {      
        lines++; // Increase for cleared line
        this.board.splice(y, 1); 
        this.board.unshift(Array(COLS).fill(0));
      }  
    });  
    if (lines > 0) {    
      // Add points if we cleared some lines
      account.score += this.getLineClearPoints(lines);  
    }
  }
  if (lines > 0) {
    // Calculate points from cleared lines and level.
    
    account.score += this.getLinesClearedPoints(lines, this.level);
    account.lines += lines;
    
    // If we have reached the lines for next level
    if (account.lines >= LINES_PER_LEVEL) {
      
      // Goto next level
      account.level++;
      
      // Remove lines so we start working for the next level
      account.lines -= LINES_PER_LEVEL;
      
      // Increase speed of game.
      time.level = Level[account.level];
    }
  }