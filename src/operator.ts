import Robot from './robot';
import Table from './table';

export default class Operator {
  table: Table;
  robot: Robot;

  constructor() {
    this.table = new Table();
    this.robot = new Robot(0, 0, 'NORTH');
  }
}
