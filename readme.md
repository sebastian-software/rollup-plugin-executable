# Rollup Executable <br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status Unix][travis-img]][travis] [![Build Status Windows][appveyor-img]][appveyor] [![Dependencies][deps-img]][deps]

The Rollup Executable Plugin makes output file executable on UNIX like operating systems.

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/rollup-plugin-executable
[deps-img]: https://david-dm.org/sebastian-software/rollup-plugin-executable.svg
[npm]: https://www.npmjs.com/package/rollup-plugin-executable
[npm-downloads-img]: https://img.shields.io/npm/dm/rollup-plugin-executable.svg
[npm-version-img]: https://img.shields.io/npm/v/rollup-plugin-executable.svg
[travis-img]: https://img.shields.io/travis/sebastian-software/rollup-plugin-executable/master.svg?branch=master&label=unix%20build
[appveyor-img]: https://img.shields.io/appveyor/ci/fastner/rollup-plugin-executable/master.svg?label=windows%20build
[travis]: https://travis-ci.org/sebastian-software/rollup-plugin-executable
[appveyor]: https://ci.appveyor.com/project/fastner/rollup-plugin-executable/branch/master


## Installation

```console
$ npm install --save-dev rollup-plugin-rebase
```


## Usage

In your rollup configuration file:

```js
import executable from "rollup-plugin-executable"

rollup({
  entry: entry,
  ...
  plugins: [
    ...
    executable()
  ]
})
```


## Contributing

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [License](license)


## Copyright

<img src="assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2017<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
