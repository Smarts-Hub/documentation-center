---
title: Installation
description: Learn how to install FancyGlow
---


## Download
- Download the latest plugin `.jar` file from the following **official** sites where FancyGlow is published:
    - :simple-modrinth: [Modrinth](https://modrinth.com/plugin/fancy-glow)
    - :simple-spigotmc: [SpigotMC](https://www.spigotmc.org/resources/116326/)
    - :simple-builtbybit: [BuiltByBit](https://builtbybit.com/resources/43517/)
- Download the following dependencies:
    - [TAB by neznamy](https://modrinth.com/plugin/tab-was-taken/) - Required for proper functioning!
    - [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) - Required for proper functioning!
    - [Luckperms](https://modrinth.com/plugin/luckperms) - Permission manager
- Upload downloaded `.jar` files to your server’s plugins folder.
- Restart your server and continue to the [configuration](#configuration) section!

## Configuration

- Once the config files for TAB plugin are generated, navigate to `..plugins/TAB/groups.yml`.
- Add the `%fancyglow_color%` placeholder to the end of the player's tagprefix as it has to be the last color in the
  prefix. Example configuration:

```yml title="groups.yml"
_DEFAULT_:
  tagprefix: '%vault-prefix%%fancyglow_color%'
```
