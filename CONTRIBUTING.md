# Contributing

You want to contibute to the project? Awesome!

## Project Setup

Follow the instructions to set up the project.

1. Fork and clone the repo;
2. Clone the project in the directory of your choice

```sh
 $ git clone ${repository link}
```

4. Install the required dependencies

```sh
  $ yarn
```

3. Start up the dev server:

```sh
  $ yarn dev
```

Access http://localhost:6006 to see the storybook running

### Directories

You need to follow a simple structure pattern:

- Every new component need to have it's specific folder, this folder need to be named as the component name;

- The component folder need the component file itself and an `index.js` file that export that component;

- You need to import and export that component on `index.js` that are on components folder;

- Every new component need to have its own story file;

- When you finish your work, you'll need to commit with messages following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern. The easiest way to do this is running

- To make the commits I also leave a suggestion of [semantic commits](https://github.com/fteem/git-semantic-commits)

# Awesome Project

If you have an awesome project built with Frigobar, you could open a pull request changing the README.md root file, adding your project at the bottom of the projects list, under Awesome projects.
