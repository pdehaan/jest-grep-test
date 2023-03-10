# jest-grep-test

How to grep tests in Jest using `-t` ([`--testNamePattern`](https://jestjs.io/docs/cli#--testnamepatternregex)).

package.json `scripts` block has 4 scripts:

```json
"scripts": {
  "test": "jest --verbose",
  "test:fail": "jest -t='#fail' --verbose",
  "test:not:fail": "jest -t='^((?!#fail).)*$' --verbose",
  "test:pass": "jest -t='#pass' --verbose",

  "test:unit": "jest -t='#unit' --verbose",
  "test:integration": "jest -t='#integration' --verbose",
  "test:e2e": "jest -t='#(unit|integration)' --verbose",
  "test:not:e2e": "jest -u -t='^((?!#(unit|integration)).)*$' --verbose"
}
```

- <kbd>npm test</kbd> will run everything.
- <kbd>npm run test:fail</kbd> will only run tests w/ "#fail" in the name.
- <kbd>npm run test:nofail</kbd> will only run tests WITHOUT "#fail" in the name.
- <kbd>npm run test:pass</kbd> will only run tests w/ "#pass" in the name.

- <kbd>npm run test:unit</kbd> will only run tests w/ "#unit" in the name.
- <kbd>npm run test:integration</kbd> will only run tests w/ "#integration" in the name.
- <kbd>npm run test:e2e</kbd> will only run tests w/ "#unit" _or_ "#integration" in the name.
- <kbd>npm run test:not:e2e</kbd> will only run tests WITHOUT "#unit" _or_ "#integration" in the name.
