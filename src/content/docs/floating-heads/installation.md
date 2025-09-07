---
title: Installation
description: Learn how to install Floating-Heads
---

# Download
Purchase and download the latest plugin `.jar` file from the following **official** sites where Floating-Heads is published:
- [BuiltByBit](https://builtbybit.com/resources/floating-heads.76533/)

# Installation
- Upload the downloaded `.jar` file to your server’s plugins folder.
- Restart your server!

# Configuration
- Once the config files for Floating-Heads plugin are generated, navigate to the folder `..plugins/Floating-Heads/Heads/`.
- To create a new head, just create a new `.yml` file in the `heads` folder. Then, supply the information of the template.
- Do not forget to restart the server or use `/fheads reload` command to apply the changes.

# Template
```yml
# Location where heads will be spawned
location:
  world: world
  x: 0
  y: 100
  z: 0

# Texture of head, must be a Player name; support PlaceholderAPI
texture: "%player_name%"

# rotating speed (rads/second)
speed: 0.1

# Particle around the head
# List: https://minecraft.fandom.com/wiki/Particles#Types_of_particles
particle-type: "dragon_breath"

# List of commands to be executed when a player clicks the head
# Support PlaceholderAPI
commands:
  - "say Hello, %player_name%!"
```