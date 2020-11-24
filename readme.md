# Rollup Executable <br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status Unix][travis-img]][travis] [![Build Status Windows][appveyor-img]][appveyor]

The Rollup Executable Plugin makes output file executable on UNIX like operating systems.

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[npm]: https://www.npmjs.com/package/rollup-plugin-executable
[npm-downloads-img]: https://img.shields.io/npm/dm/rollup-plugin-executable.svg
[npm-version-img]: https://img.shields.io/npm/v/rollup-plugin-executable.svg
[travis-img]: https://img.shields.io/travis/sebastian-software/rollup-plugin-executable/master.svg?branch=master&label=unix%20build
[appveyor-img]: https://img.shields.io/appveyor/ci/fastner/rollup-plugin-executable/master.svg?label=windows%20build
[travis]: https://travis-ci.org/sebastian-software/rollup-plugin-executable
[appveyor]: https://ci.appveyor.com/project/fastner/rollup-plugin-executable/branch/master


## Installation

```console
$ npm install --save-dev rollup-plugin-executable
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

## [License](license)


## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2017-2019<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
