const pino = require('pino')
const createLogger = () => pino({
  level: 'info',
  // looks like this is the culprit
  // transport: {
  //   target: 'pino-pretty',
  // },
})

it('simple test without leak passes', () => {
  expect(1 + 2).toBe(3)
})
it('can use logger', () => {
  const logger = createLogger();
  logger.info('test logger via pino')
})