---
title: How to
description: How to create and configure koths and customize messages.
---

# Koth creation and configuration

Koths are representated by a `.yml` file located in the `plugins/SH-Koth/koths` folder.

### Creating a Koth
In order to define a koth, you will need to create a new `.yml` file in the `plugins/SH-Koth/koths` folder.
Then, you must paste the template provided inside `koth-template.yml` file, located in the same folder. Adjust parameters by
your own needs. Finally, reload plugin using `/koth reload` command or restart your server.

Is not necessary to delete original template file, due to plugin will ignorate it.

If you want to create, for instance, 4 koths; you will need to create 4 different `.yml` files, each one with a different name and id.
```yml
# The following is a template for a King of the Hill (KoTH) configuration file.
# The id is a unique identifier for the KoTH. Is the name of the file without the extension.
# In this case, the file name is "koth-template.yml" and the id "koth-template".
# Is not necessary to delete this file, it will be ignored if the id is not changed.

# The world where the KoTH is located
world: world_name

# Corner coordinates for the KoTH area
# These coordinates define the rectangular area of the KoTH.
corner-1:
  x: 16
  y: 80
  z: 16
corner-2:
  x: -16
  y: 64
  z: -16

# Display name for the KoTH, used in placeholders.
display-name: "<rainbow>King of the Hill"

# Should a boss-bar be displayed for this KoTH?
boss-bar: true

# The time in seconds that the KoTH will be active before it resets.
max-duration: 300

# The time in seconds that a player must stay in the KoTH area to capture it.
capture-time: 20

# Koths can be played in 'capture' or 'score'.
type: "capture"

# Should the KoTH be played in solo mode or team mode?
# If set to true, the KoTH will be played in solo mode, where individual players compete against each other.
# If set to false, the KoTH will be played in team mode.
# In team mode, players must be in a team to score points and win the KoTH
solo-koth: false

# Should a team be created automatically if a player joins the KoTH area?
# If set to true, a team will be created and assigned for the player if they are not already in a team.
# If set to false, the player must be in a team to SCORE the koth.
# This parameter is only relevant if the KoTH is played in team mode, in solo mode it is ignored.
create-team-if-not-exists: true

# Should players be denied entry to the KoTH if they are not in a team?
# If set to true, players who are not in a team will not be able to enter the KoTH area.
# If set to false, players can enter the KoTH area even if they are not in a team.
# If "create-team-if-not-exists" is set to true, players will be automatically added to a team allowing them to enter.
# This parameter is only relevant if the KoTH is played in team mode, in solo mode it is ignored.
deny-entry-if-not-in-team: false

# List of schedules for this koth.
# Each schedule defines a day and time when the KoTH will be active.
# You can define multiple schedules at same day, but be sure to don't overlap them.
schedule:
  '1':
    day: "monday"
    hour: "20:00"
  '2':
    day: "tuesday"
    hour: "20:00"

# List of commands to perform at different stages of the KoTH.
commands-perform:
  # These commands will be executed when the KoTH starts (one time).
  start:
    - "say The KoTH has started!"
  # These commands will be executed when the KoTH ends (one time).
  end:
    - "say The KoTH has ended!"
  # These commands will be executed when a player wins the KoTH,
  # these means: one time if this koth is solo, or for each player if this koth is team.
  to-winners:
    - "say Congratulations, %player_name%!"
    - "give %player_name% diamond 5"

# This must be added by commands in game, taken the item in ur main hand.
# You can add as many items as u want.
physical-rewards:

# Configuration for the scoreboards.
scoreboard:
  running:
    title: "<gold><bold>King of the Hill"
    lines:
      - " "
      - "<yellow>Time Left: <gold><time_left>"
      - " "
  capturing:
    title: "<gold><bold>King of the Hill"
    lines:
      - " "
      - "<yellow>Time Left: <gold><time_left>"
      - "<yellow>Capturing: <gold><capturing_name>"
      - "<yellow>Capture Progress: <gold><capture_progress>%"
      - " "
```

# About lang files
Any text that can be translated or customized is located in the `plugins/SH-Koth/lang` folder. There are two files:
- `messages.yml`: contains simple chat messages.
- `broadcast.yml`: contains broadcast messages, which can include advanced formatting.

SH-Koth texting is based on [MiniMessage](https://docs.adventure.kyori.net/minimessage/), which allows for [rich text formatting](https://docs.advntr.dev/minimessage/format.html).
To avoid sending a message, just replace it with an empty string: `""`.

```yml
#  __  __
# |  \/  |
# | \  / | ___  ___ ___  __ _  __ _  ___  ___
# | |\/| |/ _ \/ __/ __|/ _` |/ _` |/ _ \/ __|
# | |  | |  __/\__ \__ \ (_| | (_| |  __/\__ \
# |_|  |_|\___||___/___/\__,_|\__, |\___||___/
#                              __/ |
#                             |___/
#
# Messages configuration file
# * Formatting: MiniMessage (https://docs.advntr.dev/minimessage/format)
# * PlaceholderAPI is supported in every message
# * If you want to avoid a broadcast message, simply replace it with empty: ""
# Support: https://discord.smartshub.dev/

exception:
  no-permission: "<red>You do not have permission to perform this action."

# * %shkoth_koth_context% - The koth's display-name, is only valid at the moment of the message is sent
# For "permanent valid" placeholders, use the mentioned at documentation:
koth:
  force-start: "<green>The KOTH %shkoth_koth_context% has been force started."
  force-stop: "<red>The KOTH %shkoth_koth_context% has been force stopped."
  force-stop-all: "<red>All KOTH events have been force stopped."
  add-physical-reward: "<light_purple>Physical reward has been added to the KOTH."
  teleport: "<green>You have been teleported to the KOTH %shkoth_koth_context%."
  leave: "<red>You have left the KOTH  %shkoth_koth_context%."
  capture:
    start: "<green>You started capturing the KOTH %shkoth_koth_context%!"
    stop: "<red>You stopped capturing the KOTH %shkoth_koth_context%."
  reload: "<light_purple>KOTHs configurations reloaded."
  enter: "<green>You have entered the KOTH %shkoth_koth_context%."

# * %shkoth_player_context% - The player's name, is only valid at the moment of the message is sent
# * %shkoth_aux_context% - The auxiliary player's name (other), is only valid at the moment of the message is sent
# For "permanent valid" placeholders, use the mentioned at documentation:
team:
  player-not-found: "<red>The specified player could not be found."
  not-team-leader: "<red>You are not the team leader."
  target-already-in-a-team: "<red>The target player is already in a team."
  target-already-invited: "<red>The target player has already been invited."
  invitation-received: "<green>You have received a team invitation from %shkoth_player_context%."
  invitation-sent: "<green>Team invitation sent successfully to %shkoth_aux_context%."
  no-pending-invitations: "<red>You have no pending team invitations."
  invitation-accepted: "<green>Team invitation accepted."
  invitation-declined: "<red>Team invitation declined by %shkoth_player_context%."
  invitation-declined-success: "<green>You have successfully declined the team invitation."
  kicked-from-team: "<red>You have been kicked from your team."
  member-kicked: "<green>%shkoth_player_context% has been kicked from your team."
  kick-member-success: "<green>You have successfully kicked %shkoth_player_context% from your team."
  removed-from-team: "<red>You have been removed from your team."
  member-removed: "<green>%shkoth_player_context% has been removed from your team."
  not-in-a-team: "<red>You are not in a team."
  team-info-header: "<light_purple>--- Team Information ---"
  team-info-footer: "<light_purple>------------------------"
  change-leader: "<light_purple>You have changed the team leader. The new one is %shkoth_player_context%."
  transferred-leadership-success: "<green>You have successfully transferred team leadership to %shkoth_player_context%."
  you-are-leader-now: "<green>You are now the team leader!"
  team-created-success: "<green>Team created successfully."
  added-to-team: "<green>You have been added to a team."
  new-member-joined: "<green>%shkoth_player_context% has joined your team."
  disbanded-team-success: "<green>You have successfully disbanded your team."
  dissolved: "<red>The team has been dissolved by %shkoth_player_context%"
  already-in-a-team: "<red>You are already in a team."
  cant-create-team: "<red>You cannot create a team right now."
  cant-join-team: "<red>You cannot join this team."
  leader-cant-leave: "<red>The team leader cannot leave the team."
  cant-leave-team: "<red>You cannot leave the team."
  only-leader-can-disband: "<red>Only the team leader can disband the team."
  cant-disband-team: "<red>You cannot disband the team."
  only-leader-can-kick: "<red>Only the team leader can kick members."
  cant-kick-yourself: "<red>You cannot kick yourself from the team."
  player-not-in-your-team: "<red>The specified player is not in your team."
  cant-kick-member: "<red>You cannot kick %shkoth_player_context%."
  only-leader-can-transfer: "<red>Only the team leader can transfer leadership."
  cant-transfer-leadership: "<red>You cannot transfer team leadership."

# DO NOT TOUCH THIS!
config-version: 1
```

```yml
#  ____                      _               _
# |  _ \                    | |             | |
# | |_) |_ __ ___   __ _  __| | ___ __ _ ___| |_
# |  _ <| '__/ _ \ / _` |/ _` |/ __/ _` / __| __|
# | |_) | | | (_) | (_| | (_| | (_| (_| \__ \ |_
# |____/|_|  \___/ \__,_|\__,_|\___\__,_|___/\__|
#
# Broadcast configuration file
# * Formatting: MiniMessage (https://docs.advntr.dev/minimessage/format)
# * PlaceholderAPI is supported in every message
# * If you want to avoid a broadcast message, simply replace it with empty: ""
# Support: https://discord.smartshub.dev/

# * %shkoth_koth_context% - The koth's display-name, is only valid at the moment of the message is sent
# * %shkoth_player_context% - The player's name, is only valid at the moment of the message is sent
# For "permanent valid" placeholders, use the mentioned at documentation:
koth:
  force-start:
    - "<gold>--------------------------------------------------"
    - "<yellow>The KOTH %shkoth_koth_context% has been force started by an administrator."
    - "                <yellow>Prepare for battle!"
    - "         <yellow>First to capture the KOTH wins!"
    - "<gold>--------------------------------------------------"

  force-stop:
    - "<dark_red>--------------------------------------------------"
    - "<red>The KOTH %shkoth_koth_context% has been force stopped by an administrator."
    - "           <red>The event has been cancelled."
    - "<dark_red>--------------------------------------------------"

  force-stop-all:
    - "<dark_red>--------------------------------------------------"
    - "    <red>All KOTH events have been force stopped."
    - "    <red>All ongoing events have been cancelled."
    - "<dark_red>--------------------------------------------------"

  end:
    - "<dark_purple>--------------------------------------------------"
    - "    <light_purple>The KOTH %shkoth_koth_context% has ended!"
    - "        <light_purple>Congratulations to the winners!"
    - "<dark_purple>--------------------------------------------------"

  start:
    - "--------------------------------------------------"
    - "   The KOTH %shkoth_koth_context% has started!"
    - "    Capture the KOTH to win amazing rewards!"
    - "--------------------------------------------------"

  capture:
    start:
      - "<dark_green>--------------------------------------------------"
      - "<green>The KOTH %shkoth_koth_context% is being captured by %shkoth_player_contextual%!"
      - "     <green>Try to reclaim it before it's too late!"
      - "<dark_green>--------------------------------------------------"

    stop:
      - "<dark_blue>--------------------------------------------------"
      - "<blue>The KOTH %shkoth_koth_context% capture has been stopped!"
      - "              <blue>The battle continues!"
      - "<dark_blue>--------------------------------------------------"


# DO NOT TOUCH THIS!
config-version: 1
```


### Contextual placeholders:
Placeholders are explained at the [placeholders section](https://docs.smartshub.dev/docs/sh-koth/config/placeholders/), but exists some of them that are contextual,
meaning that they will only work in certain messages. Their context is explained below:
- `%shkoth_koth_contextual%`: represents the koth display-name of the koth being referenced in the message.
- `%shkoth_player_contextual%`: represents the player name being referenced in the message.
- `%shkoth_team_contextual%`: %shkoth_aux_context% - The auxiliary player's name (other), the third party involved in the message action.


:::note
Don't give too much importance to contextual placeholders, they are just a system we have in the plugin to handle isolated names in a scalable way.
Just take a good look at what messages they are in and keep in mind that they will be the name of the player who, for example, joins a team, is kicked, etc.; or the name of a koth that has ended, has started to be captured, etc.

These placeholders are required because when the message is sent, several Koths may be running simultaneously, so it would not be possible to have a single placeholder with the name for all of them.
:::


