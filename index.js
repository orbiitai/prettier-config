module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 140,
  proseWrap: 'always',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
};

