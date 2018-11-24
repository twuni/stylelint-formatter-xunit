const onPassingTestCase = () => `    <testcase name="stylelint.passed"/>`;

const onFailingTestCase = (testSuite, testCase) => `    <testcase name="${testCase.rule}">
      <failure type="${testCase.severity}" message="${testCase.text}">On line ${testCase.line}, column ${testCase.column} in ${testSuite.source}</failure>
    </testcase>`;

const onTestSuite = (testSuite) => `  <testsuite name="${testSuite.source}" failures="${testSuite.warnings.length}" errors="${testSuite.warnings.length}" tests="${testSuite.warnings.length || 1}">
${testSuite.errored ? testSuite.warnings.map((testCase) => onFailingTestCase(testSuite, testCase)).join('') : onPassingTestCase()}
  </testsuite>
`;

module.exports = (testSuites = []) => `<?xml version="1.0" encoding="utf-8"?>
<testsuites package="stylelint.rules">
${testSuites.map(onTestSuite).join('')}</testsuites>`;
