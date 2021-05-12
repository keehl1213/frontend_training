module.exports = {
  verbose: false,
  collectCoverage: false,
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/utils/*.{js,jsx}',
    'src/components/**/*.{js,jsx,tsx}',
    'src/containers/**/*.{js,jsx,tsx}',
    '!src/containers/**/Demo*/*',
    '!src/containers/**/style.js',
    '!src/containers/App.tsx',
    '!src/components/**/style.js',
    '!src/**/index.js',
    '!**/node_modules/**',
    '!src/utils/env.js'
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFiles: ['jest-canvas-mock', 'jest-localstorage-mock'],
  globals: {
    FRONTEND: false
  }
};
