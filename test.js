import test from 'ava'
import resTime from './'

test('main', async t => {
  const time = await resTime({
    host: '184.87.100.246'
  })
  t.is(typeof time, 'number')
})

test('error', async t => {
  try {
    await resTime({
      host: 'unknown.local'
    })
    t.fail()
  } catch (e) {
    t.is(e.message, 'getaddrinfo ENOTFOUND unknown.local unknown.local:80')
  }
})

test('timeout', async t => {
  try {
    const time = await resTime({
      host: '23.13.185.169',
      timeout: 2
    })
    console.log(time)
    t.fail()
  } catch (e) {
    t.is(e.message, 'ETIMEDOUT 23.13.185.169 23.13.185.169:80')
  }
})
