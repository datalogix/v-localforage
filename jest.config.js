module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    collectCoverageFrom: [
        'src/**/*.js'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};
