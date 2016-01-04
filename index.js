var pluralize = require('pluralize/pluralize')

var regexParen = /(\S*)\(s\)/g

function pluralParens(str, n) {
  return str.replace(regexParen, function (match, word) {
    return pluralize(word, n)
  })
}

module.exports = pluralParens
