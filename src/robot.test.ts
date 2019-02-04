import Robot from './robot';

test('reports its current position', () => {
  const robot = new Robot(0, 0, 'NORTH');
  expect(robot.report()).toBe(`Robot is currently at (0, 0) and facing NORTH`);
});

describe('moves forward', () => {
  test('moves forward along the y-axis when facing North', () => {
    const robot = new Robot(0, 0, 'NORTH');
    robot.move();
    expect(robot.report()).toEqual(
      `Robot is currently at (0, 1) and facing NORTH`
    );
  });

  test('moves forward along the y-axis when facing South', () => {
    const robot = new Robot(0, 1, 'SOUTH');
    robot.move();
    expect(robot.report()).toEqual(
      `Robot is currently at (0, 0) and facing SOUTH`
    );
  });

  test('moves forward along the x-axis when facing East', () => {
    const robot = new Robot(0, 0, 'EAST');
    robot.move();
    expect(robot.report()).toEqual(
      `Robot is currently at (1, 0) and facing EAST`
    );
  });

  test('moves forward along the x-axis when facing West', () => {
    const robot = new Robot(1, 0, 'WEST');
    robot.move();
    expect(robot.report()).toEqual(
      `Robot is currently at (0, 0) and facing WEST`
    );
  });
});

// Refactor - valid move logic should live in the Table not Robot

// describe('do not fall off the board', () => {
//   test('will not move forward if x is at position 4', () => {
//     const robot = new Robot(4, 0, 'EAST');
//     robot.move();
//     expect(robot.report()).toEqual(
//       `Robot is currently at (4, 0) and facing EAST`
//     );
//   });

//   test('will not move forward if y is at position 4', () => {
//     const robot = new Robot(0, 4, 'NORTH');
//     robot.move();
//     expect(robot.report()).toEqual(
//       `Robot is currently at (0, 4) and facing NORTH`
//     );
//   });
// });
