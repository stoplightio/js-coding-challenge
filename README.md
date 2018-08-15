# Stoplight Coding Challenge - OAS 2.0 Request Maker

Create a chrome extension that displays an HTTP request maker for any given [OAS 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) file.

## Instructions

1. Create a Github repository called "Stoplight Coding Challenge" and invite me: [https://github.com/lottamus](https://github.com/lottamus)
2. Clone this repository and push the code to your new repository.
3. Install all the dependencies: `yarn`
4. [Load the extension in Chrome](#load-the-extension-in-chrome)
5. Open the [todos-api.json](./todos-api.json) file (located in the root of this directory) in Chrome

> The TODOs `apikey` is `123`.

## Requirements

- [ ] Uses [React](https://github.com/facebook/react) and a state management library such as [MobX](https://github.com/mobxjs/mobx) or [Redux](https://redux.js.org/).

- [ ] Displays an interactive UI for creating HTTP requests to each operation in an OAS 2.0 file.

- [ ] Displays the response after each HTTP request.

- [ ] A UI/UX that you're proud of.

## Bonus (not required)

- [ ] Uses [TypeScript](https://github.com/Microsoft/TypeScript)

## Project Structure
* `src`: TypeScript source files
* `public`: Chrome Extension manifest, icon, HTML
* `dist`: The built Chrome Extension

## Development build
Runs webpack in watch mode, generates bundles with source mapping
```
yarn start
```

## Production build
Runs webpack and generates the minified bundles
```
yarn build
```

## Load the extension in Chrome
* [Build the extension](#development-build)
* Open Chrome and go to `chrome://extensions`
* Toggle `Developer mode` in the top right
* Click `Load unpacked extension...` in the top left
* Load the `dist` directory

## Debugging
* Clicking on the [Stoplight icon](./public/icon.png) will open the extension's **popup** window
* Right click and open DevTools
* In DevTools, you can press Ctrl+R to reload the extension

## Useful Links

* My email - [chris@stoplight.io](mailto:chris@stoplight.io)

* Todos API Spec - [todos-api.json](./todos-api.json)

* Chrome Extensions - [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)

* OAS 2.0 - [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)

* TypeScript - [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript)

* React - [https://github.com/facebook/react](https://github.com/facebook/react)

* MobX - [https://github.com/mobxjs/mobx](https://github.com/mobxjs/mobx)
