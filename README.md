# plural-parens
[![npm version](https://img.shields.io/npm/v/plural-parens.svg)](https://npmjs.org/package/plural-parens)
[![Build Status](https://travis-ci.org/metaraine/plural-parens.svg?branch=master)](https://travis-ci.org/metaraine/plural-parens)

Pluralize all words in a sentence that have the parenthesised plural indicator suffix "(s)". 

## Install

```sh
$ npm install --save plural-parens
```

## Usage

```js
var pluralParens = require('plural-parens')
pluralParens('dog(s) and cat(s)', 1) // dog and cat
pluralParens('dog(s) and cat(s)', 2) // dogs and cats
```

## License

ISC © [Raine Lourie](https://github.com/metaraine)
