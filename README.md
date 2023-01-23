# jest-grep-test

How to grep tests in Jest using `-t` ([`--testNamePattern`](https://jestjs.io/docs/cli#--testnamepatternregex)).

package.json `scripts` block has 4 scripts:

```json
  "scripts": {
    "test": "jest --verbose",
    "test:fail": "jest -t='#fail' --verbose",
    "test:nofail": "jest -t'^((?!#fail).)*$' --verbose",
    "test:pass": "jest -t='#pass' --verbose"
  }
```

- <kbd>npm test</kbd> will run everything.
- <kbd>npm run test:fail</kbd> will only run tests w/ "#fail" in the name.
- <kbd>npm run test:nofail</kbd> will only run tests WITHOUT "#fail" in the name.
- <kbd>npm run test:pass</kbd> will only run tests w/ "#pass" in the name.
