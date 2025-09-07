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

## `api.moduleList`
An Array containing the name of all the modules successfully loaded.

## `api.moduleMetadataList`
An Array containing the JavaScript Object representation of the `metadata.json` for each module

## `api.installPackage(packageName: string)`
A method to automatically run the `npm install` command, to install packages required by your module before they are loaded

Returns the installed package
```js
export async function run(api) {
    // This returns the installed package as if imported
    const yaml = await api.installPackage('js-yaml');

    await runAfterModulesInstalled(api); // IMPORTANT `await`
}

async function runAfterModulesInstalled(api) {
    // Optional. you can use this in any other file, to import the module
    const yaml = import('js-yaml');
    // Other code goes here
}

// Note: the default import  `import module from "package";` won't work most of the time
```


## `api.restart()`
A method to automatically restart the NodeJS process. **Not supported in some environments**

```js
export async function run(api) {
    api.restart();
}
```