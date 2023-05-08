# cypress-config-issue

Repoduction of the code that causes the `Your tests are loading...` issue for me. 
I used `npm init vue@latest` to setup the Vue 3 project and used the Vue Quick start of Cypress to setup Cypress

Issue happens when I had either a plugin (BasicSsl) or add server options to the `vite.config.js` file.

Tried to add `viteConfig` to the `cypress.config.js` file but did not solve the issue.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
