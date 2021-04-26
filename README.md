# cra-boilerplate

This is a simple boilerplate for client-side rendered [React](https://reactjs.org) applications,
based on [Create React App](https://github.com/facebook/create-react-app).

This boilerplate aims to provide configuration of many useful libraries out of the box.
It gives a lot of freedom when it comes to project structure and tech stack modifications.

# The stack
- Language: [TypeScript](https://www.typescriptlang.org/)
- State management: [Redux](https://redux.js.org/) with [Redux Toolkit](https://redux-toolkit.js.org/)
- CSS framework: [Tailwind CSS](https://tailwindcss.com/) with [twin.macro](https://github.com/ben-rogerson/twin.macro)
- Routing: [Reach Router](https://reach.tech/router/)
- Internationalization: [React Intl](https://www.npmjs.com/package/react-intl)
- Analytics: [Google Analytics](https://analytics.google.com)
- Crash reporting: [Sentry](https://sentry.io)
- Code style: [Standard](https://standardjs.com/) & [Prettier](https://prettier.io/)
- Linting: [ESLint](https://eslint.org/)
- Tests: [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)

# Setup
- Clone the repository or click "Use this template" and create your new repository
- Create an [.env file](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used) with Google Analytics and/or Sentry configuration
- Remove the counter example
- Start working on your first feature!

# Usage
```sh
yarn prepare # install husky for pre-commit hooks
yarn start # start a development server
yarn lint # lint and automatically fix code
yarn build # create a production build
yarn test # run unit tests
```
