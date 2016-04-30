# res-time [![NPM version](https://img.shields.io/npm/v/res-time.svg)](https://npmjs.com/package/res-time) [![NPM downloads](https://img.shields.io/npm/dm/res-time.svg)](https://npmjs.com/package/res-time) [![Build Status](https://img.shields.io/circleci/project/egoist/res-time/master.svg)](https://circleci.com/gh/egoist/res-time)

> Get TCP/socket response time.

## Install

```bash
$ npm install --save res-time
```

## Usage

```js
const resTime = require('res-time')

resTime({host: '184.87.100.246'})
  .then(time => {
    console.log(time)
    //=> 35.231842 (in millisecond)
  })
  .catch(err => {
    console.log(err.message)
  })
```

## API

### resTime([options])

#### options

##### host

Type: `string`<br>
Default: `localhost`

The host to connect.

##### port

Type: `number`<br>
Default: `80`

Host port.

##### timeout

Type: `number`<br>
Default: `0`

Connection timeout.

## Related

- [res-time-cli](https://github.com/egoist/res-time-cli) - CLI for this module.

## License

MIT © [EGOIST](https://github.com/egoist)
