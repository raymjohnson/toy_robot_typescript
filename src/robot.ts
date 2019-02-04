export default class Robot {
  x: number;
  y: number;
  facing: string;

  constructor(x: number, y: number, facing: string) {
    this.x = x;
    this.y = y;
    this.facing = facing;
  }

  report = () => {
    return `Robot is currently at (${this.x}, ${this.y}) and facing ${
      this.facing
    }`;
  };

  move = () => {
    if (this.facing === 'NORTH') {
      this.y++;
    }
    if (this.facing === 'EAST') {
      this.x++;
    }
    if (this.facing === 'SOUTH') {
      this.y--;
    }
    if (this.facing === 'WEST') {
      this.x--;
    }
  };

  nextMove = () => {
    let x = this.x;
    let y = this.y;
  };
}
