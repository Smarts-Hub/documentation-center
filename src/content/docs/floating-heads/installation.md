---
title: Installation
description: Learn how to install Floating-Heads
---

# Download
Purchase and download the latest plugin `.jar` file from the following **official** sites where Floating-Heads is published:
- [BuiltByBit](https://builtbybit.com/resources/floating-heads.76533/)

# Requirements
- A server running _PaperMC_ **1.20.1**, **1.20.3**, **1.20.4**, **1.20.5 to 1.21.8**. Other versions were not tested!
- _Java 21_ or higher installed on your server.
- Soft-dependencies: [PlaceholdersAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

# Installation
- Upload the downloaded `.jar` file to your server’s plugins folder.
- Restart your server!

# Configuration
- Once the config files for Floating-Heads plugin are generated, navigate to the folder `..plugins/Floating-Heads/Heads/`.
- To create a new head, just create a new `.yml` file in the `heads` folder. Then, supply the information of the template.
- Do not forget to restart the server or use `/fheads reload` command to apply the changes.

# Template
```yml
# This is the example configuration file for a floating head.
# You can copy this file to your server's plugins/Floating-Heads/ directory and rename it to <your-head-name>.yml
# Then, edit the file to customize your floating head.
# Finally, use the command /fheads reload to load the new head.
# Any file with the name "example-head.yml" will be ignored by the plugin (this file is just for reference).
# Support: https://discord.smartshub.dev/
# Documentation: https://docs.smartshub.dev/floating-heads/introduction/

# Location where heads will be spawned
location:
  world: world
  x: 0
  y: 100
  z: 0

# Texture supports player names and Base64 textures!
texture: "%player_name%"

# Text displayed below the head
# Supports PlaceholderAPI and MiniMessage formatting (https://docs.advntr.dev/minimessage/format.html/)
hologram:
  enabled: true
  display: "<raibow>Welcome %player_name%!</rainbow>"

floating:
  # List of particles:
  # * https://minecraft.fandom.com/wiki/Particles#Types_of_particles
  particle-type: "heart"

  # Speed is rad/second
  speed: 0.05

  # Available particle effects at FLOATING: circle, helix, rising, spiral, pulse, constellation, magic_circle
  particle-effects:
    - "circle"

on-click:
  # Delay avoids multiple clicks in a short time, in seconds
  delay: 5

  # List of particles:
  # * https://minecraft.fandom.com/wiki/Particles#Types_of_particles
  particle-type: "dragon_breath"

  # Speed is rad/second
  speed: 0.1

  # Available particle effects at ON-CLICK: burst, firework, shockwave, fountain, vortex, star_burst, heart
  particle-effects:
    - "burst"
    - "firework"

  # List of commands to be executed when a player clicks the head
  # Support PlaceholderAPI
  commands:
    - "eco take %player_name% 50"
    - "say %player_name% clicked the head!"
    - "rtp %player_name% world"

  # List of messages to be sent to the player when they click the head
  # Support PlaceholderAPI and MiniMessage formatting (https://docs.advntr.dev/minimessage/format.html/)
  messages:
    - "<green>You clicked the head, %player_name%!"
    - "<yellow>The RTP prize was 50 coins!"
```