# Contributing

You want to contibute to the project? Awesome!

## Project Setup

Follow the instructions to set up the project.

1. Fork and clone the repo;
2. Clone the project in the directory of your choice

```sh
 $ git clone git@github.com:frigobar/frigobar.git
```

4. Install the required dependencies

```sh
  $ yarn
```

3. Start up the dev server:

```sh
  $ yarn dev
```

Access http://localhost:4000 to see the documentation website running

From now, you can start developing and see the changes directly on the
documentation.

When you finish your work, you'll need to commit with messages following
[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)
pattern. The easiest way to do this is running:

```
yarn commitizen
```

### Packages

Right now, we have four packages on this repository:

- animation: `@frigobar/animation` package - Where you can find some hooks to
  add simple animations on your react components.
- babel-plugin: `@frigobar/babel-plugin` package - Add `animation` prop support
  for every component.
- core: `@frigobar/core` package - Where you can find some components to build
  your UI.
- documentation: frigobar's website.

Feel free to open any kind of pull requests, typos, grammar errors, bugs,
enhancements, new features, etc.
