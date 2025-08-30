---
title: SH-Koth Hooks
description: How to integrate SH-Koth with other plugins.
---

# Clans or Team:
Right now SH-Koth owns a basic team management system, but it also supports integration with
other plugins that provide team or clan functionalities. This allows you to leverage existing team structures on your server for KoTH events.

To integrate SH-Koth with a team or clan plugin, you typically need to enable the integration in the `hooks.yml` file. This may involve
specifying the plugin name and setting the priority of the integration if multiple plugins are supported.

When a player joins a KoTH event, SH-Koth will check if they belong to a team or 
clan using the integrated plugin with the highest priority.

### Hook list:
- [**Ultimate Clans**](https://polymart.org/product/1162/ultimate-clans)
- [**Kingdoms-X**](www.spigotmc.org/resources/kingdomsx.77670/)
- [**Towny**](https://modrinth.com/plugin/towny)
- [**FactionsUUID**](https://www.spigotmc.org/resources/factionsuuid.1035/)
- [**BetterTeams**](https://www.spigotmc.org/resources/better-teams.17129/)
- [**Simple Clans**](https://www.spigotmc.org/resources/simpleclans.71242/)

:::note
If you need support for any other team or clan plugin, you can request it by 
opening an issue on GitHub or on our Discord.
:::

```yml
#  _    _             _
# | |  | |           | |
# | |__| | ___   ___ | | __
# |  __  |/ _ \ / _ \| |/ /
# | |  | | (_) | (_) |   <
# |_|  |_|\___/ \___/|_|\_\
#
# Hook Clans/Teams configuration file
# Support: https://discord.smartshub.dev/

# You can enable/disable support for each plugin and set their priority.
# The priority is used when more than one plugin is detected, the one with the highest priority will be used.
# If two or more plugins have the same priority, the one that appears first
# Also know that SH-Koth owns a Team system, so if no plugin is detected or enabled, it will use its own system.

ultimate-clans:
  enabled: true
  priority: 6

kingdoms-x:
  enabled: true
  priority: 5

towny:
  enabled: true
  priority: 4

factions-uuid:
  enabled: true
  priority: 3

better-teams:
  enabled: true
  priority: 2

simple-clans:
  enabled: true
  priority: 1


# DO NOT TOUCH THIS!
config-version: 1
```