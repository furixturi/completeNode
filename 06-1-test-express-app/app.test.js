const expect = require('expect');
// const jest = require('jest');
const app = require('./app');

describe('App', () => {
  it('should call the spy correctly', () => {
    const spy = jest.mock();
    spy();
    expect(spy).toHaveBeenCalled();
  })
})