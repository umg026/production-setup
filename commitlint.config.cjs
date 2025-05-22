module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',        // New feature
        'fix',         // Bug fix
        'docs',        // Documentation only changes
        'style',       // Changes that do not affect meaning (white-space, formatting, etc)
        'refactor',    // Code change that neither fixes a bug nor adds a feature
        'perf',        // Code change that improves performance
        'test',        // Adding missing tests or correcting existing tests
        'build',       // Changes that affect the build system
        'ci',          // Changes to CI configuration files
        'chore',       // Other changes that don't modify src or test files
        'revert'       // Reverts a previous commit
      ]
    ],
    'subject-case': [2, 'always', 'sentence-case'] // Disable subject case enforcement
  }
};
