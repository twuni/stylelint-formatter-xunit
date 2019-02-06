# Stylelint Formatter: XUnit

A [stylelint][1] formatter that outputs test results as a xUnit (JUnit)
test report, for compatibility with tools such as CircleCI that expect
test results to be formatted in this way.

The implementation is small, lightweight, and dependency-free.

## Installing

### Yarn

```
$ yarn add --dev stylelint-formatter-xunit
```

### NPM

```
$ npm install --save-dev stylelint-formatter-xunit
```

## Usage

This formatter can be used via the `--custom-formatter` option when running
Stylelint via its CLI:

```
$ stylelint --custom-formatter node_modules/stylelint-formatter-xunit ...
```

Alternatively, you can use the Stylelint Node.js API like this:

```
const stylelint = require('stylelint');

stylelint.lint({
  config: {
    // ...what you would typically have in .stylelintrc
  },
  formatter: require('stylelint-formatter-xunit')
}).then(({ output }) => console.log(output));
```

[1]: https://stylelint.io/
