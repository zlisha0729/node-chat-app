const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in variable
    // assert from match
    // assert text match
    // assert createdAt
    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from, text);
    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'George';
    var lat = '1';
    var long = '1';
    var url = 'https://www.google.com/maps?q=1,1';
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    // expect(message.from).toBe(from);
    // expect(message.url).toBe(url);
    expect(message).toInclude({from, url});
  })
})
