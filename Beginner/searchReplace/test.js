const searchReplace = require('./index-START')

test('reverseString is a function', () => {
    expect(typeof searchReplace).toEqual('function');
});

test('reverses a string of text', () => {
    expect(searchReplace('aeiou')).toEqual('uoiea');
});

test('reverses a string containing numbers', () => {
    expect(searchReplace('123456789')).toEqual('987654321');
});

test('reverses a string containing mixed case characters', () => {
    expect(searchReplace('AsDfGhJkL')).toEqual('LkJhGfDsA');
});
