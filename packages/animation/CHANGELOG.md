# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/frigobar/frigobar/compare/@frigobar/animation@1.0.0...@frigobar/animation@3.0.0) (2021-11-04)


### Bug Fixes

* **animation:** fix dependencies ([9259c1e](https://github.com/frigobar/frigobar/commit/9259c1e4d3afe4e5ab21f7dd83f2445848184f8c))
* **animation:** fix peerDependencies ([5cb862b](https://github.com/frigobar/frigobar/commit/5cb862b4d32a15154c7c253153a676f073f947d6))
* **animation:** remove unnecessary semicolon ([675d91a](https://github.com/frigobar/frigobar/commit/675d91aa84f11f3cee97f0103cbbfbbedc90eb92))


### Features

* **animation:** add hook way animations ([fc76ce4](https://github.com/frigobar/frigobar/commit/fc76ce4e7554458d14522f14874b2ad5370bfafa))
* **animation:** add true as startOnRender option default value ([67ce278](https://github.com/frigobar/frigobar/commit/67ce2780ba50cb1a39c2aff2c19e6f75882fa034))
* **animation:** add ts and eslint configuration ([4b3d026](https://github.com/frigobar/frigobar/commit/4b3d026be49ef63a265a74e03e18fc2e2b9c643e))
* **animation:** refactor copy-files to typescript ([46dd364](https://github.com/frigobar/frigobar/commit/46dd364884ce4e85cac475d767dedf572aabe8a1))
* **animation:** refactor useFade and useFlash to ts ([bba13e6](https://github.com/frigobar/frigobar/commit/bba13e6a824a1e1e5c054ab42dd560d13bf9e86d))
* **packages:** add clean npm script ([f742f99](https://github.com/frigobar/frigobar/commit/f742f99cd5b497add6ccb083c2ff39c75674b6bd))
* **typescript:** add npm scripts to generate .d.ts and update build scripts ([e6fbe29](https://github.com/frigobar/frigobar/commit/e6fbe29be26cdcecc5324e240084250e934b848d))


### BREAKING CHANGES

* **animation:** Remove HOCS animation (withFade and withFlash) and add hooks to do it now, for now
we have only the useFade hook.





## [2.1.1](https://github.com/frigobar/frigobar/compare/@frigobar/animation@2.1.0...@frigobar/animation@2.1.1) (2021-09-09)

**Note:** Version bump only for package @frigobar/animation





# [2.1.0](https://github.com/frigobar/frigobar/compare/@frigobar/animation@2.0.3...@frigobar/animation@2.1.0) (2021-08-16)


### Bug Fixes

* **animation:** fix peerDependencies ([5cb862b](https://github.com/frigobar/frigobar/commit/5cb862b4d32a15154c7c253153a676f073f947d6))


### Features

* **animation:** add ts and eslint configuration ([4b3d026](https://github.com/frigobar/frigobar/commit/4b3d026be49ef63a265a74e03e18fc2e2b9c643e))
* **animation:** refactor copy-files to typescript ([46dd364](https://github.com/frigobar/frigobar/commit/46dd364884ce4e85cac475d767dedf572aabe8a1))
* **animation:** refactor useFade and useFlash to ts ([bba13e6](https://github.com/frigobar/frigobar/commit/bba13e6a824a1e1e5c054ab42dd560d13bf9e86d))
* **packages:** add clean npm script ([f742f99](https://github.com/frigobar/frigobar/commit/f742f99cd5b497add6ccb083c2ff39c75674b6bd))
* **typescript:** add npm scripts to generate .d.ts and update build scripts ([e6fbe29](https://github.com/frigobar/frigobar/commit/e6fbe29be26cdcecc5324e240084250e934b848d))





## [2.0.3](https://github.com/frigobar/frigobar/compare/@frigobar/animation@2.0.2...@frigobar/animation@2.0.3) (2021-06-11)

**Note:** Version bump only for package @frigobar/animation





## [2.0.2](https://github.com/frigobar/frigobar/compare/@frigobar/animation@2.0.1...@frigobar/animation@2.0.2) (2021-06-11)


### Bug Fixes

* **animation:** remove unnecessary semicolon ([675d91a](https://github.com/frigobar/frigobar/commit/675d91aa84f11f3cee97f0103cbbfbbedc90eb92))





## [2.0.1](https://github.com/frigobar/frigobar/compare/@frigobar/animation@2.0.0...@frigobar/animation@2.0.1) (2021-06-08)


### Bug Fixes

* **animation:** fix dependencies ([9259c1e](https://github.com/frigobar/frigobar/commit/9259c1e4d3afe4e5ab21f7dd83f2445848184f8c))





# [2.0.0](https://github.com/frigobar/frigobar/compare/@frigobar/animation@1.0.0...@frigobar/animation@2.0.0) (2021-06-08)


### Features

* **animation:** add hook way animations ([fc76ce4](https://github.com/frigobar/frigobar/commit/fc76ce4e7554458d14522f14874b2ad5370bfafa))
* **animation:** add true as startOnRender option default value ([67ce278](https://github.com/frigobar/frigobar/commit/67ce2780ba50cb1a39c2aff2c19e6f75882fa034))


### BREAKING CHANGES

* **animation:** Remove HOCS animation (withFade and withFlash) and add hooks to do it now, for now
we have only the useFade hook.





# [1.0.0](https://github.com/frigobar/frigobar/compare/@frigobar/animation@0.1.0...@frigobar/animation@1.0.0) (2020-03-22)


### Features

* **animation:** add new withFlash animation ([ff9c482](https://github.com/frigobar/frigobar/commit/ff9c482fb9799df0ab17e4f8091666fc63b3e755))
* **animation:** add support to individually fadeIn or fadeOut ([f500ec4](https://github.com/frigobar/frigobar/commit/f500ec493b480c3ec609f5ffc522352ba51d22b6))


### BREAKING CHANGES

* **animation:** prop duration changed to fadeDuration, prop show changed to renderControl,
onAnimationEnd changed to onFadeEnd.





# 0.1.0 (2020-03-20)


### Features

* **animation:** create animation package ([137b54d](https://github.com/frigobar/frigobar/commit/137b54d821cbf54ac2f688a24efdbfcd61b8875a))
