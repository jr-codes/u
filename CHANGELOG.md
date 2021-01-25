# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0](https://github.com/jr-codes/u/compare/v0.10.0...v0.11.0) (2021-01-25)


### Bug Fixes

* ✅ test babel-preset ([a7de02b](https://github.com/jr-codes/u/commit/a7de02b9affa468f4cbb6b4c3dca13a429cf1d52))
* ✅ update tests ([fc0ebde](https://github.com/jr-codes/u/commit/fc0ebdeb290c7eef18e81fdef5ef6d14a956d110))
* ✅ update TypeScript tests ([41f6970](https://github.com/jr-codes/u/commit/41f69706804026ebe1b6dafdf3a3b81816778f39))
* ⬆️ jest-dom, cli-rewire, eslint ([24f027e](https://github.com/jr-codes/u/commit/24f027e7bf5235f898fc60d01d3a9894132f5ca9))
* 🔧 remove TypeScript-conflicting ESLint rules ([0bb4169](https://github.com/jr-codes/u/commit/0bb4169e4087ebc7bf2de2b0a5addb410994e41d))
* 🔧 replace babel-eslint with @babel/eslint-parser ([2e64fc0](https://github.com/jr-codes/u/commit/2e64fc0321f296466306a13ac421f70769ef744c))


### Features

* ✨ add support for linting TypeScript files ([eace0f7](https://github.com/jr-codes/u/commit/eace0f77badfef3233fc286388189c16c1ff06ac))
* ➕ @babel/preset-typescript ([b48873a](https://github.com/jr-codes/u/commit/b48873a8fe8dcee963ed10fe167762a0e684f221))
* 🔧 enforce kebab-case and PascalCase ([d167952](https://github.com/jr-codes/u/commit/d1679528a28e9ad285fbf7ffdd212b8f6dcc8158))





# [0.10.0](https://github.com/jr-codes/u/compare/v0.9.4...v0.10.0) (2021-01-11)


### Bug Fixes

* ✅ test commands ([5626a1a](https://github.com/jr-codes/u/commit/5626a1a99be53b76e3a1aaa3a926be9d2ef87256))
* ✅ use new ESLint API in tests ([ac35b0a](https://github.com/jr-codes/u/commit/ac35b0a381550af733f0f099c021d432bb56f78a))
* ⬆️ babel deps, jest-dom ([c310c6d](https://github.com/jr-codes/u/commit/c310c6d8beb0eb4a6cc1a657a0e1a2f1c478469c))
* ⬆️ babel, eslint deps ([78747d5](https://github.com/jr-codes/u/commit/78747d5f43c05a3d466028d3713bc01e50cd17ac))
* ⬆️ babel, prettier, eslint, cli-rewire, debug ([b8e663f](https://github.com/jr-codes/u/commit/b8e663f8bc34da7e59e9d24d89890ce54f4305b8))
* ⬆️ eslint deps ([436819c](https://github.com/jr-codes/u/commit/436819c817a6b0479262fde2cc080d4a0362e858))
* ⬆️ eslint, cli-rewire, webpack deps ([b22ad97](https://github.com/jr-codes/u/commit/b22ad973bb09398074b91eafce73585f0dfe4c82))
* ⬆️ husky ([1a8ea0f](https://github.com/jr-codes/u/commit/1a8ea0f93e1c8b0f0a0fad00c6051bed5253097d))
* 🎨 symlink README ([051cdaf](https://github.com/jr-codes/u/commit/051cdaf54cb0ebc9f87d755b93550a8aa8a9d3d6))
* 👷 update workflows ([c81a346](https://github.com/jr-codes/u/commit/c81a3468a548f4b8e62e890a1744bd99a2f2c83d))
* 📝 remove broken dependabot badge ([6eaaddd](https://github.com/jr-codes/u/commit/6eaadddf2d91dafedf919f6e75d8d599a4ca42b9))
* 📝 use GitHub markdown include ([9f5dc03](https://github.com/jr-codes/u/commit/9f5dc03266ceb1b737182da264e4150b29401311))
* 🔧 check for dep version mismatches ([c3add4e](https://github.com/jr-codes/u/commit/c3add4e9f6a0a7fd0c67d31ea57a2cb83af5a992))
* 🔧 ecmaVersion 2021, update unicorn rules ([fc8b265](https://github.com/jr-codes/u/commit/fc8b265a60101db0e6e287fcb96a5aff05c9cd58))
* 🔧 resolve eslint plugins relative to u-scripts ([54d290a](https://github.com/jr-codes/u/commit/54d290a852dd30ff9a1a6a587d2fcd4c70464dfd))
* bump execa from 4.1.0 to 5.0.0 ([d783f3e](https://github.com/jr-codes/u/commit/d783f3efdb101037697f088cfdef9c7e5c23f28c))
* bump prettier from 2.2.0 to 2.2.1 ([58ce6f5](https://github.com/jr-codes/u/commit/58ce6f5240626b7621a4007dec3fa0eb455650a4))


* feat!: 💥 rescope packages to @jr.codes ([b90bd59](https://github.com/jr-codes/u/commit/b90bd590cdae2ca922d3b093b48a72eb6f95b230))
* feat!: 🔥 remove create-u ([80bbcf0](https://github.com/jr-codes/u/commit/80bbcf04ac1a6595f7d77528f423f8ae30e7e8e7))
* feat!: 🔥 remove nodemon, stylelint, webpack ([2ddcb5c](https://github.com/jr-codes/u/commit/2ddcb5cccd76b067aa196752fe23369edfa7f1af))


### BREAKING CHANGES

* Use @jr.codes scope for these packages
* Removes create-u package
* Remove nodemon, stylelint, and webpack.

Simplify U by focusing on linting and testing.





## [0.9.4](https://github.com/jr-codes/u/compare/v0.9.3...v0.9.4) (2020-11-11)


### Bug Fixes

* ⬆️ babel, jest ([f978494](https://github.com/jr-codes/u/commit/f978494b2c01dbdc9846a15255183aaf053ebce2))
* ⬆️ cli-rewire ([0207d17](https://github.com/jr-codes/u/commit/0207d17be4b6fd604d8373852fc815bec0f21c52))
* ⬆️ eslint plugins ([e042ea0](https://github.com/jr-codes/u/commit/e042ea083c257716c1dc9d2e7025101402ed55cf))
* ⬆️ nodemon, typescript, webpack, yargs, react ([4394fa9](https://github.com/jr-codes/u/commit/4394fa999e627e7f6e71687feb94c32767418390))
* 👽 use new cli-rewire methods ([11827fc](https://github.com/jr-codes/u/commit/11827fc6b6f13152cdbc5d5a3672f26152bd2f4b))
* 🔧 add .npmrc ([03d3616](https://github.com/jr-codes/u/commit/03d3616ac183a31e74414356bd622651a64af5d3))
* 🔧 disable lerna bootstrap hoisting ([27213af](https://github.com/jr-codes/u/commit/27213af14baa47a509cee5202dddcad791dabf78))
* 🔧 fix eslint peer deps ([634fe32](https://github.com/jr-codes/u/commit/634fe32896be68be1f786a74453ae6c7e0fe2a62))
* 🔧 simplify repository field ([72ad70e](https://github.com/jr-codes/u/commit/72ad70e34f11950a9e27336c8e14eb277d9c18ff))





## [0.9.3](https://github.com/jr-codes/u/compare/v0.9.2...v0.9.3) (2020-11-10)


### Bug Fixes

* ⬆️ execa, husky, lerna ([de992ce](https://github.com/jr-codes/u/commit/de992ce76538a2e56712c2880ce8002706d1f762))
* 👷‍♂️ add release workflow ([ae83b19](https://github.com/jr-codes/u/commit/ae83b19b2fa2bf2eba6dd0882157e80852a2b1c2))
* 👷‍♂️ simplify GitHub workflows ([196713f](https://github.com/jr-codes/u/commit/196713fbb877f6d03dd7917bd992eba3a74d51a0))
* 👷‍♂️ update workflows ([cd6a8ca](https://github.com/jr-codes/u/commit/cd6a8cabe6e2bb666a27a68bc9f381ef83af5eda))
* 👷‍♂️ use default time and PR max for dependabot ([707e2f9](https://github.com/jr-codes/u/commit/707e2f90f7a250ed09a91cf05a1e2c399552ef8a))





## [0.9.2](https://github.com/jr-codes/u/compare/v0.9.1...v0.9.2) (2020-10-27)


### Bug Fixes

* ✅ package updates ([65a1b46](https://github.com/jr-codes/u/commit/65a1b465e506e1ef4fb627a7c76e6bb44837e823))
* 👷‍♂️ run CI tests for Node 10, 12, 14 ([3459694](https://github.com/jr-codes/u/commit/3459694db60873f697987b22163485716b3eb60a))
* bump @commitlint/cli from 8.3.5 to 11.0.0 ([de6b2aa](https://github.com/jr-codes/u/commit/de6b2aa2daff68261ece8479cb36a8cfceb4cac7))
* bump @commitlint/config-conventional from 8.3.4 to 11.0.0 ([468bedf](https://github.com/jr-codes/u/commit/468bedfd058667a432b7a577888f025c1c3bbcc4))
* bump eslint-formatter-pretty from 3.0.1 to 4.0.0 ([61e0878](https://github.com/jr-codes/u/commit/61e0878dc1abecfdf2a3c148615bc247935a5405))
* update Dependabot config file ([c547748](https://github.com/jr-codes/u/commit/c547748ac4145e713c119d8001d9e2e6067165ff))





## [0.9.1](https://github.com/jr-codes/u/compare/v0.9.0...v0.9.1) (2020-05-27)


### Bug Fixes

* ✅ prettier ([96e46a8](https://github.com/jr-codes/u/commit/96e46a82b13cb576bc5d7195c0745565f1761db5))
* ➕ replace u-scripts-utils with cli-rewire ([df9357d](https://github.com/jr-codes/u/commit/df9357d487230153c0a6098f7a0eced62cc698f4))
* ➖ remove snyk ([4592ffa](https://github.com/jr-codes/u/commit/4592ffaab55da29c250fd42c6d806f330013ea6a))
* ⬆️ dependencies ([9bf46ca](https://github.com/jr-codes/u/commit/9bf46caef2d485bcf8f8eae25fda47d9fcd655b1))
* ⬆️ upgrade dependencies ([f091e35](https://github.com/jr-codes/u/commit/f091e35c7bb9f62f3ff4d880c10d423b359019c1))
* 👷‍♂️ publish canary version on master push ([b294ef7](https://github.com/jr-codes/u/commit/b294ef73d2593f360b07be98fc0595773e6cc81d))
* 💚 add npm token ([fbbdcd6](https://github.com/jr-codes/u/commit/fbbdcd6f2378426dbbdf498ef268b13b546c8730))
* 💚 remove release checks for canary ([0958fd1](https://github.com/jr-codes/u/commit/0958fd1f11be38124eab441f3be6127b247f7fdb))
* 💚 try fixing lerna publish issue ([4222fb3](https://github.com/jr-codes/u/commit/4222fb370e72643cf190a45eb23fef51edb062c0))
* 📝 add LGTM badges ([e298f18](https://github.com/jr-codes/u/commit/e298f1895eb7b4242e1f01cd3c418676d8179436))
* 📝 update npm badges ([3b44067](https://github.com/jr-codes/u/commit/3b44067b579b00967dea534413f001da9fefba73))
* 🔥 remove .npmrc ([80cd108](https://github.com/jr-codes/u/commit/80cd108eca3ece70c1147f8fee92d1d96cf37839))
* 🔥 remove old stylelint-rules ([b745ea6](https://github.com/jr-codes/u/commit/b745ea6d46ce334c5da6fc86244a336999339cd3))
* 🔧 add commit linting ([ecc892e](https://github.com/jr-codes/u/commit/ecc892e32d5d23ad1657b8ecbf1847c67e60e187))
* 🔧 add keywords ([16d9336](https://github.com/jr-codes/u/commit/16d933690424737f87021e40c65814bccb9e095f))
* 🔧 skip prompt for release-canary ([b354778](https://github.com/jr-codes/u/commit/b3547788c7b357da247ecff01ad06222031ed39f))
* 🙈 ignore .npmrc ([530998b](https://github.com/jr-codes/u/commit/530998bb30d73429e8a1039fb24dd2fc3f89331a))
* 🚚 rename config to configs ([e011340](https://github.com/jr-codes/u/commit/e011340ec0d99a4e382e22b260db86d2e52e0e41))
* 🚚 rename utils to lib ([e4c2ac4](https://github.com/jr-codes/u/commit/e4c2ac4e46de02009e4d1ca375c603b6fc1fd84d))
* bump babel-jest from 25.5.1 to 26.0.1 ([a491d6b](https://github.com/jr-codes/u/commit/a491d6b376eb13a5559ac63f5ae80dfbafcee031))
* bump chalk from 3.0.0 to 4.0.0 ([2ddfba1](https://github.com/jr-codes/u/commit/2ddfba19ea989d78314721a4eb26b313f7ec768f))
* bump eslint-plugin-react-hooks from 2.5.1 to 3.0.0 ([2468a0c](https://github.com/jr-codes/u/commit/2468a0c73d961c2bc1e6c1c5762671bcad9daa7e))
* bump eslint-plugin-unicorn from 16.1.1 to 17.0.1 ([a2a0703](https://github.com/jr-codes/u/commit/a2a07039825db657848d86de83a33d4ee0509e01))
* bump eslint-plugin-unicorn from 17.2.0 to 18.0.1 ([84ad3d9](https://github.com/jr-codes/u/commit/84ad3d95a643130fb95c68c0c42cfdbf937b5687))
* bump eslint-plugin-unicorn from 18.0.1 to 19.0.1 ([832824b](https://github.com/jr-codes/u/commit/832824b6938f927b238b139a56ec91bdb32b0802))
* bump file-loader from 5.1.0 to 6.0.0 ([55a5572](https://github.com/jr-codes/u/commit/55a55728d21f1fa795f18e87b92c43fcf37e2d72))
* bump html-webpack-plugin from 4.0.0-beta.11 to 4.2.0 ([a6634be](https://github.com/jr-codes/u/commit/a6634be3fe66f66b23cb16a5a92807dca823c828))
* bump html-webpack-plugin from 4.2.0 to 4.3.0 ([ec60885](https://github.com/jr-codes/u/commit/ec6088506c9a11478b0d7415e60113998aac1da7))
* bump jest from 25.5.4 to 26.0.1 ([c411e28](https://github.com/jr-codes/u/commit/c411e285b63bb64e23df8441c3b96ed65d5a194b))
* packages/babel-preset-u-scripts/package.json & packages/babel-preset-u-scripts/.snyk to reduce vulnerabilities ([7c8c924](https://github.com/jr-codes/u/commit/7c8c9248d652f5dbe3999aa429399ca8e06504ca))
* packages/babel-preset-u-scripts/package.json & packages/babel-preset-u-scripts/.snyk to reduce vulnerabilities ([1af62ca](https://github.com/jr-codes/u/commit/1af62caeb394a558436b5e898c2d8cbd2d2fcefd))
* packages/jest-config-u-scripts/package.json & packages/jest-config-u-scripts/.snyk to reduce vulnerabilities ([90a726d](https://github.com/jr-codes/u/commit/90a726decd35a2914cb3b6f49ce52d3652e9d761))
* packages/jest-config-u-scripts/package.json & packages/jest-config-u-scripts/.snyk to reduce vulnerabilities ([d0bdd04](https://github.com/jr-codes/u/commit/d0bdd04a21e6926f733acb6c42c043496c7949cf))
* packages/stylelint-config-u-scripts/package.json & packages/stylelint-config-u-scripts/.snyk to reduce vulnerabilities ([73619f0](https://github.com/jr-codes/u/commit/73619f01ecc660417d1f37e3c4018d8590f24e24))
* packages/stylelint-config-u-scripts/package.json & packages/stylelint-config-u-scripts/.snyk to reduce vulnerabilities ([d454805](https://github.com/jr-codes/u/commit/d454805b810c2dad283fa5f6e3ecff64015eb495))
* packages/u-scripts-utils/package.json & packages/u-scripts-utils/.snyk to reduce vulnerabilities ([d961f85](https://github.com/jr-codes/u/commit/d961f8528682c916196d0f74472060121a2b0493))
* packages/u-scripts-utils/package.json & packages/u-scripts-utils/.snyk to reduce vulnerabilities ([b6436fc](https://github.com/jr-codes/u/commit/b6436fccd5732a38c4c64a7632f9f3526e4a1ddd))
* packages/u-scripts/package.json & packages/u-scripts/.snyk to reduce vulnerabilities ([da7a3fe](https://github.com/jr-codes/u/commit/da7a3fe0b54cdafcd833c308ca683e4b9cee5fab))
* packages/u-scripts/package.json & packages/u-scripts/.snyk to reduce vulnerabilities ([caec7f2](https://github.com/jr-codes/u/commit/caec7f2db51ef401ee8d36fc9dd1df9694afdef6))
* packages/webpack-config-u-scripts/package.json & packages/webpack-config-u-scripts/.snyk to reduce vulnerabilities ([9b8484f](https://github.com/jr-codes/u/commit/9b8484ff93feb0643313e79348c40654cffc8e37))
* packages/webpack-config-u-scripts/package.json & packages/webpack-config-u-scripts/.snyk to reduce vulnerabilities ([ff84371](https://github.com/jr-codes/u/commit/ff843712c5a051885ba8f0a464e716dc34c5b804))





# [0.9.0](https://github.com/jr-codes/u/compare/v0.7.1...v0.9.0) (2020-03-09)


### Bug Fixes

* ✅ prettier ([c974e53](https://github.com/jr-codes/u/commit/c974e532ee335f3eb2307b8bed78c60e43ac919e))
* ✅ prettier ([9ba1003](https://github.com/jr-codes/u/commit/9ba100316258a0250cf9416b73d26eadc53cfa8c))
* ✅ prettier ([599b975](https://github.com/jr-codes/u/commit/599b975bdec0e782d1752733e6e6a1d9658bdcc5))
* ✅ stop eslint from linting *.css on Windows ([eb6768a](https://github.com/jr-codes/u/commit/eb6768adb545824c53fe38349a010f19c4c0a4dd))
* ➕ debug ([d56210d](https://github.com/jr-codes/u/commit/d56210d94732c84c0342cf4c37256159d85061d4))
* 👌 add use strict ([74c2df7](https://github.com/jr-codes/u/commit/74c2df70de3f0dc908a7f2276ee05acc8063b88d))
* 👷‍♂️ CI test node versions and os ([f9db942](https://github.com/jr-codes/u/commit/f9db94233fa861afbb2a24d73e8ddc19940391ee))
* 💚 ignore bin for GitHub Windows CI test ([77ff42f](https://github.com/jr-codes/u/commit/77ff42f0aea226fb4dce4eadeccde501c3152863))
* 💡 add return types ([5d270a2](https://github.com/jr-codes/u/commit/5d270a24fafe882a32138473c7cf4d35efac6b2d))
* 📝 add badges ([e507cdc](https://github.com/jr-codes/u/commit/e507cdc7ce42f94800c71ef1cb0d3de1cc87263b))
* 📝 add dependabot badge ([b90e4b0](https://github.com/jr-codes/u/commit/b90e4b0a22aa1604682ac04591d41f63b03a4896))
* 📝 add README for npm docs ([b072e7b](https://github.com/jr-codes/u/commit/b072e7ba2b6ea2fdbf6a121311453cc883d999cb))
* 🔧 add prefix for dependabot ([4b8cf01](https://github.com/jr-codes/u/commit/4b8cf01f0c622139716766a9e2b3a62cc0fc1c07))
* 🔧 add release checks ([322dcb2](https://github.com/jr-codes/u/commit/322dcb23a582a541081d1b338061a5114b315765))
* 🔧 add stale bot ([a99d94f](https://github.com/jr-codes/u/commit/a99d94f98d4ea3496adfa55838ea2099e05ba845))
* 🔧 ci npm install ([1af5fbd](https://github.com/jr-codes/u/commit/1af5fbd82774d8d98b774be94f71dd8e46eb23be))
* 🔧 run dependabot daily ([9086c24](https://github.com/jr-codes/u/commit/9086c247926bde7f5a9860819f4a45a8b9d74b14))
* 🔧 run lerna bootstrap after install ([88aa310](https://github.com/jr-codes/u/commit/88aa310ae1e5ae245c774706df91efed81de910f))
* 🔧 switch stale bot to GitHub Actions ([d65177f](https://github.com/jr-codes/u/commit/d65177f1efee5a5edffb6883fd044817f7982ffc))
* 🙈 add .prettierignore ([19a4a1e](https://github.com/jr-codes/u/commit/19a4a1e06b61bbaa5965840cc8fcb8c0889b8f47))
* 🙈 ignore .gitattributes ([0b7c327](https://github.com/jr-codes/u/commit/0b7c327b4a5e77af8864bb7dabcfb7df2c7ee5d9))
* 🙈 ignore fixtures ([6986697](https://github.com/jr-codes/u/commit/69866975aeec2699f7d702b33ad0cefa2f719619))
* bump yargs-parser from 17.1.0 to 18.0.0 ([346bbfe](https://github.com/jr-codes/u/commit/346bbfe91550499cff6d232ff9b88782c7f23353))


### Features

* ✨ configure webpack options with --env ([751d3d7](https://github.com/jr-codes/u/commit/751d3d72236521df413796a82c5610cdfad7ed07))





# [0.8.0](https://github.com/jr-codes/u/compare/v0.7.1...v0.8.0) (2020-03-02)


### Bug Fixes

* ✅ prettier ([9ba1003](https://github.com/jr-codes/u/commit/9ba100316258a0250cf9416b73d26eadc53cfa8c))
* ✅ prettier ([599b975](https://github.com/jr-codes/u/commit/599b975bdec0e782d1752733e6e6a1d9658bdcc5))
* ➕ debug ([d56210d](https://github.com/jr-codes/u/commit/d56210d94732c84c0342cf4c37256159d85061d4))
* 💡 add return types ([5d270a2](https://github.com/jr-codes/u/commit/5d270a24fafe882a32138473c7cf4d35efac6b2d))
* 📝 add badges ([e507cdc](https://github.com/jr-codes/u/commit/e507cdc7ce42f94800c71ef1cb0d3de1cc87263b))
* 📝 add dependabot badge ([b90e4b0](https://github.com/jr-codes/u/commit/b90e4b0a22aa1604682ac04591d41f63b03a4896))
* 📝 add README for npm docs ([b072e7b](https://github.com/jr-codes/u/commit/b072e7ba2b6ea2fdbf6a121311453cc883d999cb))
* 🔧 add prefix for dependabot ([4b8cf01](https://github.com/jr-codes/u/commit/4b8cf01f0c622139716766a9e2b3a62cc0fc1c07))
* 🔧 add stale bot ([a99d94f](https://github.com/jr-codes/u/commit/a99d94f98d4ea3496adfa55838ea2099e05ba845))
* 🔧 ci npm install ([1af5fbd](https://github.com/jr-codes/u/commit/1af5fbd82774d8d98b774be94f71dd8e46eb23be))
* 🔧 switch stale bot to GitHub Actions ([d65177f](https://github.com/jr-codes/u/commit/d65177f1efee5a5edffb6883fd044817f7982ffc))
* 🙈 add .prettierignore ([19a4a1e](https://github.com/jr-codes/u/commit/19a4a1e06b61bbaa5965840cc8fcb8c0889b8f47))


### Features

* ✨ configure webpack options with --env ([751d3d7](https://github.com/jr-codes/u/commit/751d3d72236521df413796a82c5610cdfad7ed07))





## [0.7.1](https://github.com/jr-codes/u/compare/v0.7.0...v0.7.1) (2020-02-25)


### Bug Fixes

* 📝 add CI badges ([5cf2c88](https://github.com/jr-codes/u/commit/5cf2c885a44a7690c499a945f37b5572d74f019d))
* 🔧 add publish-canary ([1d854bc](https://github.com/jr-codes/u/commit/1d854bcddd634dd51dc3cd3af564253ace5751fb))
* 🔧 change publish to release ([54b9c02](https://github.com/jr-codes/u/commit/54b9c028f0cb47531fd062c40b8f9f8943668c44))
