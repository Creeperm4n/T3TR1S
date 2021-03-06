const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
  }
  Object.freeze(KEY);
  const COLORS = [  
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
  ];
  
  const SHAPES = [  
    [
      [0, 0, 0, 0], 
      [1, 1, 1, 1],
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ], 
    [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ],
    // And so on
  ];
  const POINTS = {
    SINGLE: 100,
    DOUBLE: 300,
    TRIPLE: 500,
    TETRIS: 800,
    SOFT_DROP: 1,
    HARD_DROP: 2
  }
  Object.freeze(POINTS);

const LINES_PER_LEVEL = 10;

const LEVEL = {
  0: 800,
  1: 720,
  2: 630,
  3: 550,
  // ...
}

Object.freeze(LEVEL);