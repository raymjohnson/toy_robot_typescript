import Operator from './operator';

describe('creates', () => {
  const operator = new Operator();

  test('creates a table', () => {
    expect(operator.table.xyMax).toBe(4);
  });

  test('creates a robot', () => {
    expect(operator.robot.facing).toBe('NORTH');
  });
});
