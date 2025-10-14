---
title: How to
description: How to configure Disasters.
---

# Arena creation and configuration

Disasters arenas are representated by a `.yml` file located in the `plugins/Disasters/Arenas` folder.

## Creating an arena
To define an arena, you can create a new `.yml` file in the `plugins/Disasters/Arenas` folder.
Then, you must paste the template provided inside `example_arena.yml` file, located in the same folder. Adjust parameters by
your own needs. Finally, reload plugin using `/disasters reload` command or restart your server.

If you want to create, for instance, 4 arenas; you will need to create 4 different `.yml` files, each one with a different name and id.
### Arena configuration template
```yml title="example_arena.yml"
# This is an example arena file. You can create as many arenas as you want.
# The name of the file is the name of the arena. In this case, the name of the arena is "example_arena".
# The name of the arena is used to reference the arena in the plugin, so make sure it's unique.

# max-players refers to the maximum number of players that can join and play the arena.
max-players: 10

# min-players refers to the minimum number of players required to start the arena.
min-players: 2

# alive-to-end refers to the number of players that need to be alive for the arena to end.
alive-to-end: 1

# countdown refers to the number of seconds before the arena starts, after the minimum number of players have joined.
# is the time that the arena will wait players to join before games starts.
countdown: 10

# game-time refers to the number of seconds that the arena will last.
game-time: 300

# disaster-rate is the time in seconds between disasters.
disaster-rate: 30

# max-disasters is the maximum number of disasters that can happen in the arena at the same time.
max-disasters: 4

# display-name refers to the name of the arena that will be displayed in the placeholder.
display-name: "<rainbow>Example Arena"

# spawn is the location where the players will spawn when they join the arena.
spawn:
  x: 0
  y: 0
  z: 0
  yaw: 0
  pitch: 0
  world: world

# corner1 and corner2 are the locations that define the arena region.
corner1:
  x: 0
  y: 0
  z: 0
  world: world

corner2:
  x: 0
  y: 0
  z: 0
  world: world


# It will parse the placeholders to player, executed per one
commands:
  # Executed one time per winner
  winners:
    - "eco give %player_name% 50"
    - "<other command>"
  # Same for those who die
  losers:
    - "eco take %player_name% 10"
    - "..."
  # No matters if wins or not, will be perfom anyways
  to-all:
    - "say %player_name% example command!!!"
```


## General settings
Some settings as storage are configured in the `config.yml` file located in the `plugins/Disasters` folder.
```yml title="config.yml"
#    ____  _                 __
#   / __ \(_)________ ______/ /____  __________
#  / / / / / ___/ __ `/ ___/ __/ _ \/ ___/ ___/
# / /_/ / (__  ) /_/ (__  ) /_/  __/ /  (__  )
#/_____/_/____/\__,_/____/\__/\___/_/  /____/
# Useful links:
# - https://discord.smartshub.dev -> support

# Available drivers: h2, mysql
# If you are using h2, you don't need to specify the host, port, db-name,
# username and password due to h2 is local database.
database:
  driver: h2
  host: 101.101.101.101
  port: 3306
  db-name: disasters
  username: userNaMeForDisasters
  password: passw0rD

# This is the location where players will return after the game ends
lobby:
  world: world
  x: 0
  y: 64
  z: 0
  yaw: 0
  pitch: 0

enable-scoreboard: true

# DO NOT TOUCH THIS!
config-version: 1
```

## Styling
You can customize the messages displayed by the plugin in the `lang.yml` 
file located in the `plugins/Disasters` folder.
Also, you can customize the scoreboard in the `scoreboard.yml` file located in the same folder.
```yml title="lang.yml"
messages:
  no-permission: "<red>You do not have permission to perform this!"
  reload-success: "<green>Plugin reloaded (configuration and arenas)!"
  lobby-set: "<green>Lobby set!"
  already-in-arena: "<red>You are already in an arena!"
  not-in-arena: "<red>You are not in an arena!"
  arena-not-found: "<red>Arena not found!"
  arena-in-game: "<red>Arena is in game!"
  arena-full: "<red>Arena is full!"
  arena-joined: "<green>You have joined the arena!"
  arena-left: "<red>You have left the arena!"
  now-murder: "<green>Now you are a murder!"

game-broadcast:
  player-joined: "<green>%joined% has joined the game! (%disasters_game_players%/%disasters_game_max_players%)"
  player-left: "<red>%left% has left the game! (%disasters_game_players%/%disasters_game_max_players%)"
  player-killed: "<red>%player_name% has been killed by %killer%!"
  player-died: "<red>%dead% has died!"
  player-won: "<green>%winner% has won the game!"

game-state-placeholders:
  recruiting: "<yellow>Recruiting"
  countdown: "<gold>Starting soon"
  live: "<green>In game"
  restarting: "<red>Restarting"


countdown:
  10:
    title: "<rainbow>Starting in 10 seconds!"
    subtitle: "<rainbow>Get ready!"
  5:
    title: "<rainbow>Starting in 5 seconds!"
    subtitle: "<rainbow>Get ready!"
  4:
    title: "<rainbow>Starting in 4 seconds!"
    subtitle: "<rainbow>Get ready!"
  3:
    title: "<rainbow>Starting in 3 seconds!"
    subtitle: "<rainbow>Get ready!"
  2:
    title: "<rainbow>Starting in 2 seconds!"
    subtitle: "<rainbow>Get ready!"
  1:
    title: "<rainbow>Starting in 1 second!"
    subtitle: "<rainbow>Get ready!"

game-start:
  title: "<rainbow>Game has started!"
  subtitle: "<rainbow>Good luck!"

game-end:
  title: "<rainbow>Game has ended!"
  subtitle: "<rainbow>Thanks for playing!"

countdown-canceled:
  title: "<red>Countdown has been canceled!"
  subtitle: "<red>Game will not start, please wait!"

disaster:
  acid-rain:
    title: "<red>Acid Rain!"
    subtitle: "<red>Take cover!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Acid Rain is falling from the sky!"
      - "<red>Take cover!"
      - "<gold>----------------------------------"

  apocalypse:
    title: "<red>Apocalypse!"
    subtitle: "<red>Run for your life!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Apocalypse is happening!"
      - "<gold>----------------------------------"

  explosive-sheep:
    title: "<red>Explosive Sheep!"
    subtitle: "<red>Watch out!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Explosive Sheep are spawning!"
      - "<gold>----------------------------------"

  floor-is-lava:
    title: "<red>Floor is Lava!"
    subtitle: "<red>Don't touch the ground!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Floor is Lava!"
      - "<gold>----------------------------------"
  grounded:
    title: "<red>Grounded!"
    subtitle: "<red>Stay on the ground!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Grounded! You can't jump!"
      - "<gold>----------------------------------"
  lightning:
    title: "<red>Lightning!"
    subtitle: "<red>Take cover!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Take cover!"
      - "<gold>----------------------------------"
  one-hearth:
    title: "<red>One Hearth!"
    subtitle: "<red>Don't get hit!"
    chat:
      - "<gold>----------------------------------"
      - "<red>One Hearth! Don't get hit!"
      - "<gold>----------------------------------"
  swap:
    title: "<red>Swap!"
    subtitle: "<red>Switch places!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Swap! Switch places!"
      - "<gold>----------------------------------"
  world-border:
    title: "<red>World Border!"
    subtitle: "<red>Run to the center!"
    chat:
      - "<gold>----------------------------------"
      - "<red>World Border is shrinking!"
      - "<gold>----------------------------------"
  blind:
    title: "<red>Blind!"
    subtitle: "<red>Your vision will be null!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Now you can't see nothing!"
      - "<gold>----------------------------------"
  cobweb:
    title: "<red>Cobweb!"
    subtitle: "<red>You will be caught by cobwebs!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Cobwebs are spawning every 5 seconds!"
      - "<gold>----------------------------------"
  lag:
    title: "<red>Lag!"
    subtitle: "<red>You will experiment lag!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Now you are so lagged!"
      - "<gold>----------------------------------"
  zero-gravity:
    title: "<red>No Gravity!"
    subtitle: "<red>You will experiment some levitation!"
    chat:
      - "<gold>----------------------------------"
      - "<red>You will experiment some levitation!"
      - "<gold>----------------------------------"
  wither:
    title: "<red>Wither Attack!"
    subtitle: "<red>A wither boss has arrive!"
    chat:
      - "<gold>----------------------------------"
      - "<red>A wither boss has arrive!"
      - "<gold>----------------------------------"
  hot-sun:
    title: "<red>Hot Sun!"
    subtitle: "<red>Now the sun will burn u!"
    chat:
      - "<gold>----------------------------------"
      - "<red>The sun will burn u, take cover!"
      - "<gold>----------------------------------"
  murder:
    title: "<red>Murder!"
    subtitle: "<red>Now players with sword can kill u!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Now players with sword can kill u!"
      - "<gold>----------------------------------"
  allow-fight:
    title: "<red>PvP Enabled!"
    subtitle: "<red>Now u can hit players!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Now players can kill u, pay attention!"
      - "<gold>----------------------------------"
  disappear-blocks:
    title: "<red>Blocks disappear!"
    subtitle: "<red>Now blocks under u will disappear!"
    chat:
      - "<gold>----------------------------------"
      - "<red>Now blocks under u will disappear!"
      - "<gold>----------------------------------"

# DO NOT TOUCH THIS!
config-version: 1
```


```yml title="scoreboard.yml"
lobby:
  title: "<gold><bold>Disasters"
  lines:
    - ""
    - "<gray>Games: <white>%disasters_total_played%"
    - "<gray>Wins: <white>%disasters_wins%"
    - "<gray>Defeats: <white>%disasters_defeats%"
    - ""
    - "<blue>play.example.com"

recruiting:
  title: "<gold><bold>Disasters"
  lines:
    - ""
    - "<gray>Waiting for players..."
    - "<gray>Players: <white>%disasters_game_players%"
    - "<gray>Arena: %disasters_arena%"
    - ""
    - "<blue>play.example.com"

countdown:
  title: "<gold><bold>Disasters"
  lines:
    - ""
    - "<gray>Starting in <white>%disasters_countdown_time%<gray>..."
    - "<gray>Players: <white>%disasters_game_players%<gray>/<red>%disasters_game_max_players%"
    - ""
    - "<blue>play.example.com"

live:
  title: "<gold><bold>Disasters"
  lines:
    - ""
    - "<gray>Game started!"
    - "<gray>Players: <white>%disasters_players%"
    - "<gray>Time: <white>%disasters_game_time_left%"
    - ""
    - ""
    - "<blue>play.example.com"

restarting:
  title: "<gold><bold>Disasters"
  lines:
    - ""
    - "<gray>Game ended!"
    - ""
    - "<blue>play.example.com"

# DO NOT TOUCH THIS!
config-version: 1
```





