// all those have no effect
require('@pact-foundation/pact/src/dsl/message')
require('@pact-foundation/pact/src/dsl/matchers')
require('@pact-foundation/pact/src/dsl/options')
// this creates the leak
require('@pact-foundation/pact/src/dsl/interaction')

it('leaks as soon as we require pact', () => {
})
