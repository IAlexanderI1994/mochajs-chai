const { assert }               = require('chai')
const { sayHello, addNumbers } = require('../app')

describe('App', () => {
  describe('sayHello func tests: ', () => {
    it('return hello', () => {
      const result = sayHello()
      assert.equal(result, 'hello')
    })
    it('return type string', () => {
      const result = sayHello()
      assert.typeOf(result, 'string')
    })
  })
  describe('addNumbers func tests: ', () => {
    it('addNumbers should be more than 5', () => {
      const result = addNumbers(5, 1)
      assert.isAbove(result, 5)
    })
    it('addNumbers type number', () => {
      const result = addNumbers(5, 1)
      assert.typeOf(result, 'number')
    })
  })

})

