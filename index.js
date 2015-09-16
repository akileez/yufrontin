//  yufrontin <https://github.com/akileez/yufrontin>
//  Copyright (c) 2015 Keith Williams.
//  Licensed under the ISC license.

// adopted from: front-matter-extractor <https://github.com/75lb/front-matter-extractor>
// using yaml.js <https://github.com/jeremyfa/yaml.js>

var yaml = require('./lib/Yaml')

function extract (input) {
  var matter = /^---$([\s\S]*)^---\s/m

  var result = {
    data: {},
    content: input
  }

  if (input && typeof input === 'string') {
    var matches = input.match(matter)

    if (matches) {
      // js-yaml implementation:
      // result.data = yaml.safeLoad(matches[1])

      // yamljs implementation:
      result.data = yaml.parse(matches[1])

      result.content = input.replace(matches[0], '')
    }
  }

  return result
}

module.exports = extract