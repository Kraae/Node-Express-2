const timeWord = require('./timeWord');

describe('timeWord', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('timeWord', () => {
  test('returns midnight', () => {
    let time = timeWord("00:00")
    expect(time).toMatch("midnight")
  })
})

describe('timeWord', () => {
  test('returns twelve twelve am', () => {
    let time = timeWord("00:12")
    expect(time).toMatch("twelve twelve am")
  })
})

describe('timeWord', () => {
  test("returns one o'clock am", () => {
    let time = timeWord("01:00")
    expect(time).toMatch("one o'clock am")
  })
})

describe('timeWord', () => {
  test('returns six oh one am', () => {
    let time = timeWord("06:01")
    expect(time).toMatch("six oh one am")
  })
})

describe('timeWord', () => {
  test('returns six eighteen', () => {
    let time = timeWord("06:18")
    expect(time).toMatch("six eighteen")
  })
})

describe('timeWord', () => {
  test('returns six ten am', () => {
    let time = timeWord("06:10")
    expect(time).toMatch("six ten am")
  })
})

describe('timeWord', () => {
  test('returns six thirty am', () => {
    let time = timeWord("06:30")
    expect(time).toMatch("six thirty am")
  })
})

describe('timeWord', () => {
  test('returns ten thirty four am', () => {
    let time = timeWord("10:34")
    expect(time).toMatch("ten thirty four am")
  })
})

describe('timeWord', () => {
  test('returns noon', () => {
    let time = timeWord("12:00")
    expect(time).toMatch("noon")
  })
})

describe('timeWord', () => {
  test('returns twelve oh nine pm', () => {
    let time = timeWord("12:09")
    expect(time).toMatch("twelve oh nine pm")
  })
})

describe('timeWord', () => {
  test('returns eleven twenty three pm', () => {
    let time = timeWord("23:23")
    expect(time).toMatch("eleven twenty three pm")
  })
})
