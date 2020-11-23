[![npm (tag)](https://img.shields.io/npm/v/u-scripts/latest)](https://www.npmjs.com/package/u-scripts)
[![npm (tag)](https://img.shields.io/npm/v/u-scripts/canary)](https://www.npmjs.com/package/u-scripts)
[![CI](https://github.com/jr-codes/u/workflows/CI/badge.svg)](https://github.com/jr-codes/u/actions)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jr-codes/u/blob/master/LICENSE)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jr-codes/u.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jr-codes/u/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/jr-codes/u.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jr-codes/u/alerts/)

# u

U is a JavaScript bundler, transpiler, linter, formatter, dev server, and test framework. It combines several open-source tools into a single dependency that's both opinionated and configurable.

I made this so I can set up projects easier without having to maintain multiple dependencies and configurations for each project.

## 🔧 Install

```shell
npm install u-scripts --save-dev
```

## 📝 Usage

### Commands

U comes with a set of default commands. You can make your own commands by defining a `u.config.js` file.

| Command     | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `u lint`    | Runs `eslint --fix` and `prettier --write`.                             |
| `u test`    | Runs `eslint --fix`, `prettier --write`, and `jest`.                    |
| `u test-ci` | Runs `eslint`, `prettier --check`, and `jest --ci`.                     |

### Scripts

You can also run scripts directly. Each script is run with preconfigured defaults, but they can be overridden by passing CLI options or defining a config for that script.

| Script                 | Description                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `u babel`              | Runs [babel](https://babeljs.io/). Customize with `.babelrc.js`.                                              |
| `u eslint`             | Runs [eslint](https://eslint.org/). Customize with `.eslintrc.js`.                                            |
| `u jest`               | Runs [jest](https://jestjs.io/en/). Customize with `jest.config.js`.                                          |
| `u prettier`           | Runs [prettier](https://prettier.io/). Customize with `prettier.config.js`.                                   |

## 🌱 Inspiration

- [Create React App](https://github.com/facebook/create-react-app)
- [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)
- [Next.js](https://github.com/zeit/next.js)
- [Razzle](https://github.com/jaredpalmer/razzle)
