const average = require('../utils/for_testing').average

describe('average', () => {
  test('Test 1', () => {
    expect(average([1])).toBe(1)
  })

  test('Test 2', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })
})
