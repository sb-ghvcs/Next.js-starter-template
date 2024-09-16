const path = require('node:path');

const buildEslintCommand = (filenames) => [
  `prettier --write ${filenames.join(' ')}`,
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
];

/** @type {import('lint-staged').Config} */
module.exports = {
  '**/*.(js|jsx|ts|tsx)': buildEslintCommand,
};
