var chai = require('chai')
var should = chai.should()
var pluralParens = require('../index.js')

describe('pluralParens', function () {

  it('should pluralize a word with "(s)" at the end', function () {
    pluralParens('test(s)', 0).should.equal('tests')
    pluralParens('test(s)', 1).should.equal('test')
    pluralParens('test(s)', 2).should.equal('tests')
  })

  it('should handle irregulars', function () {
    pluralParens('berry(s)', 0).should.equal('berries')
    pluralParens('berry(s)', 1).should.equal('berry')
    pluralParens('berry(s)', 2).should.equal('berries')
  })

  it('should have the number argument be optional', function () {
    pluralParens('test(s)').should.equal('tests')
  })

  it('should replace multiple words in the same sentence', function () {
    pluralParens('dog(s) and cat(s)', 1).should.equal('dog and cat')
    pluralParens('dog(s) and cat(s)', 2).should.equal('dogs and cats')
  })

})
