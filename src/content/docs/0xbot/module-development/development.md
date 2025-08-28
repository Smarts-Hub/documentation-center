---
title: Module Development
---

# Overview
By developing your own modules you are able to add custom features to your discord bot with ease. 

For high-end developers who want to share their creations, it's your lucky day! With 0xBot you can share your modules or even sell it, but you must follow the **0xBot Module developmment guidelines** later on this page.

## How does the bot load modules
The bot, has 2 module loading procceses. 

1. **Module intializing.** In this stage the bot goes module by module finding their metadata.json, which conatins most of the module's data. This contains also the **index file**, wich must contain and export a `async function run()`, that will be executed once when the module is loaded. Here you are able to get some values, trhough the **module api** provided as an argument to the function.
```js
export async function run(moduleApi) {
    // Any code here will be ran once when the bot loads the module
}
```

2. **Command and events loading.** After running the `run` function of each module, the bot will go, again trhough all the commands of each module, registering the command to the discord api, and then through the module's events.

## Module example structure.

```
modules
   └── example
       ├── commands
       │   └── exampleCommand.js
       ├── events
       │   └── exampleEvent.js
       ├── index.js
       ├── config.json
       └── metadata.json
```

This is the default structure of a module.

### `metadata.json`
The metadata.json contains the main information of the bot, such as the `author`, `name`, `version` or `mainfile`.
```json title="metadata.json"
{
    "name": "example",
    "version": "0",
    "author": "jallox",
    "main": "index.js"
}
```

### `index.js` (main)
This file can be named as `index.js`, `main.js`, etc. It contains the `run` function, wich will be called once when starting the module
```js title="index.js"
export async function run(moduleApi) {
    // Any code here will be ran once when the bot loads the module
}
```

### `/commands/`
The bot will only read commands if they are on this directory. 

**This is the default command structure**
```js title="commands/ping.js"
import { SlashCommandBuilder } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responds with pong'),
		//You can add here as many options as you want 
	async execute(interaction, client) {
		// Command goes here
        interaction.reply("Pong!");
	},
};
```

### `/events/`
The bot will only read events if they are on this directory.

**This is a default event structure**
```js title="events/message.js"
import { Events } from "discord.js";

export default {
	name: Events.MessageCreate,
	async execute(message, client) {
		// Here goes the command
        message.reply("I responded your comment!");
	},
};
```

