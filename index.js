'use strict'
const net = require('net')

module.exports = function (options) {
  return new Promise((resolve, reject) => {
    options = options || {}
    const host = options.host || 'localhost'
    const port = options.port || 80
    const start = process.hrtime()
    const client = new net.createConnection(port, host) // eslint-disable-line
      .on('connect', () => {
        client.end()
        const end = process.hrtime(start)
        resolve(end[0] * 1e3 + end[1] / 1e6)
      })
      .on('error', err => reject(err))
      .on('timeout', () => {
        client.end()
        reject(new Error(`ETIMEDOUT ${host} ${host}:${port}`))
      })
    if (options.timeout) {
      client.setTimeout(options.timeout)
    }
  })
}
