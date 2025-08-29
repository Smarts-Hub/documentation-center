---
title: API Documentatio
---
Through the api you are able to interact with the bot in order to make your customizations. This api offers several functions, variables or objects you can use

## `api.logger`
Exposes the loggin system methods, such as `warn`, `info`, `debug`, `success` and `error`

```js
export async function run(api) {
    api.logger.info("This is an info message");
    api.logger.success("This is an success message");
    api.logger.debug("This is an debug message");
    api.logger.warn("This is an warn message");
    api.logger.error("This is an error message");
}
```

## `api.client`
A JSObject that contains the [Discord Client](https://discord.js.org/docs/packages/discord.js/14.22.1/Client:Class) object

## `api.config`
A JSObject that contains the JavaScript Object representation of the `config.json` of the bot.

## `api.resourceConfig`
A JSObject that contains the JavaScript Object representation of the custom configuration json file. 

This configuration is automatically created into the `/config` directory

## `api.moduleList`
An Array containing the name of all the modules successfully loaded.

## `api.installPackage(packageName: string, autorestart: boolean)`
A method to automatically run the `npm install` command, to install packages required by your module before they are loaded

```js
export async function run(api) {
    // Recommended: To avoid a infinite restart loop, check if the module is already installed!
    await api.installPackage('js-yaml', true);

    await runAfterModulesInstalled(api); // IMPORTANT `await`
}

async function runAfterModulesInstalled(api) {
    const yaml = import('js-yaml');
    // Other code goes here
}
```

## `api.restart()`
A method to automatically restart the NodeJS process

```js
export async function run(api) {
    api.restart();
}