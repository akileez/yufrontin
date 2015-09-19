# yufrontin
[![NPM version][npm-image]][npm-url]
[![schoolmarm-standard-style][marm-image]][marm-url]
[![experimental][stability-image]][stability-url]
[![Downloads][downloads-image]][downloads-url]

> lightweight yaml front matter extractor using yaml.js

The core of yaml.js is included within the lib directory. I did not feel the need to use the entire repo as a dependency
when I would only use the core. This keeps the size of the project small. License file for yaml.js is included.

## Installation
```bash
$ npm install yufrontin
```

## Usage
```js
yufrontin('---\ntitle: \'me\'\n---\nHello World')
// results in  -->
{ data: { title: 'me' }, content: 'Hello World' }

yufrontin('Hello World')
{ data: {}, content: 'Hello World' }
```
or you could do this:

```js
var fs = require('fs')
var parsefm = require('parse-yuf')

var file = fs.readFileSync('some/file/to/be/read.md', 'utf8')
yufrontin(file)

parsefm('some/file/to/be/read.md')


```

## API

#### `yufrontin(inputString)`

- **inputString** *[String]* data to be parsed by yaml.js  
- **return** *[Object]*

## Why?

Why another yaml front matter extractor? I wanted to try yaml.js.


## See Also
- [parse-yuf](https://github.com/akileez/parse-yuf): read in a file to be parsed by yufrontin returning an extended results or output from yaml.js
- [gray-matter](https://github.com/jonschlinkert/gray-matter): My all time favorite YAML front matter parser before yufrontin. 
- [front-matter-extractor](https://github.com/75lb/front-matter-extractor): the code base which yufrontin is shamelessly based on.
- [yamljs](https://github.com/jeremyfa/yaml.js): yaml engine used here.


## License
[ISC](https://github.com/akileez/yufrontin/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/yufrontin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/yufrontin
[marm-image]: https://img.shields.io/badge/code%20style-marm-brightgreen.svg?style=flat-square
[marm-url]: https://github.com/akileez/eslint-config-marm
[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[stability-url]: https://github.com/akileez/yufrontin
[downloads-image]: http://img.shields.io/npm/dm/yufrontin.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/yufrontin
