import Table from './table';

test('knows max position along X and Y axis', () => {
  const table = new Table();
  expect(table.xyMax).toBe(4);
});

test('knows min position along X and Y axis', () => {
  const table = new Table();
  expect(table.xyMin).toBe(0);
});

describe('validates move', () => {
  const table = new Table();
  test('returns true for a valid move', () => {
    expect(table.validateMove(2, 3)).toBe(true);
  });

  test('returns false for an invalid move', () => {
    expect(table.validateMove(2, 5)).toBe(false);
  });
});
