export default class Table {
  xyMax: number;
  xyMin: number;

  constructor() {
    this.xyMax = 4;
    this.xyMin = 0;
  }

  // maybe move to the operator? and use the width and height of the table to validate robot move
  validateMove = (x: number, y: number) => {
    const validX = x >= this.xyMin && x <= this.xyMax;
    const validY = y >= this.xyMin && y <= this.xyMax;
    return validX && validY;
  };
}
