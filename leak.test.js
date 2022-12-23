// all those have no effect
require('@pact-foundation/pact/src/dsl/message')
require('@pact-foundation/pact/src/dsl/matchers')
require('@pact-foundation/pact/src/dsl/options')
require('@pact-foundation/pact/src/common/jsonTypes');
require('@pact-foundation/pact/src/common/net');
require('@pact-foundation/pact-core/src/logger/crashMessage');
require('@pact-foundation/pact-core/src/logger/types');
// this creates the leak
// require('@pact-foundation/pact/src/dsl/interaction')
// require('@pact-foundation/pact/src/common/request');
const pino = require('pino')
const { createLogger } = require('@pact-foundation/pact-core/src/logger/pino');



it('leaks', () => {
  createLogger('info');
})
