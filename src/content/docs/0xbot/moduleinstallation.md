---
title: Module Installation
description: Start installing modules
---

Out of the box, this bot comes with almost nothing, only a few module management commands and internal events. This make this bot completely customizable, suited for those users who want full control of what their bot can do. 

To add multiple functions to this bot, you will need to add **modules**, wich are pieces of code that add serveral characteristics and functionalities to the bot.

You can either develop and create your own module, or simply download one of the official or third-party modules. 

### Installation
To install a module, you must place the folder into the `/modules/` directory. In some cases after downloading, you must unzip the file before copying it into the directory.

Here is an example with the **internal** module, wich contains the main core of the bot.

![Modules](/img/modules.png)

### Configuration
Each module has its own configuration way, but most of the modules, and the official ones will always have a config json into the `/config/` directory. To locate the config json, you must find the file wich corresponds to the desired module, following the next structure: `[module_name]_config.json`

# Official Modules Help
Here you will find a very short documentation for the official modules developed by SmartsHub team. For a more extended documentation, check the DOCUMENTATION.md file into the module's folder