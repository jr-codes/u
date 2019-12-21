# u

U is a JavaScript bundler, transpiler, linter, formatter, dev server, and test framework. It combines several open-source tools into a single dependency that's both opinionated and configurable.

I made this so I can set up projects easier without having to maintain multiple dependencies and configurations for each project.



## 🔧 Install

```shell
npm install jr-codes/u --save-dev
```



## 📝 Usage

### Commands

U comes with a set of default commands. You can make your own commands by defining a `u.config.js` file. [Check out the default config](https://github.com/jr-codes/u/blob/master/config/u.js) for an example.

| Command     | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `u build`   | Runs `webpack ` with `NODE_ENV` set to `production`.         |
| `u dev`     | Runs `webpack-dev-server` with `NODE_ENV` set to `development`. |
| `u lint`    | Runs `eslint --fix`, `stylelint --fix`, and `prettier --write`. |
| `u test`    | Runs the same scripts as `u lint` and also runs `jest`.      |
| `u test ci` | Runs `eslint`, `stylelint`, `prettier --check`, and `jest --ci`. |



### Scripts

You can also run scripts directly. Each script is run with preconfigured defaults, but they can be overridden by passing CLI options or defining a config for that script.

| Script                 | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `u babel`              | Runs `babel`. Customize with `.babelrc.js`.                  |
| `u eslint`             | Runs `eslint`. Customize with `.eslintrc.js`.                |
| `u jest`               | Runs `jest`. Customize with `jest.config.js`.                |
| `u prettier`           | Runs `prettier`. Customize with `prettier.config.js`.        |
| `u stylelint`          | Runs `stylelint`. Customize with `stylelint.config.js`.      |
| `u webpack`            | Runs `webpack`. Customize with `webpack.config.js`.          |
| `u webpack-dev-server` | Runs `webpack-dev-server`. Customize with `webpack.config.js`. |



## 🌱 Inspiration

- [Create React App](https://github.com/facebook/create-react-app)
- [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)
- [Next.js](https://github.com/zeit/next.js)
- [Razzle](https://github.com/jaredpalmer/razzle)

