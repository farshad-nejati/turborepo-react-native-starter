# Dideo Monorepo

This is an official starter Turborepo cloned from [turborepo-expamles](https://github.com/vercel/turbo/tree/main/examples/with-react-native-web)

## How to use

Run the following command:

```sh
git clone https://github.com/farshad-nejati/turborepo-react-native-starter.git
cd turborepo-react-native-starter
yarn install
git init . && git add . && git commit -m "Init"
yarn turbo build
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
