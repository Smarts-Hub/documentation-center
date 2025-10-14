---
title: Placeholder list
description: List of all placeholders available in Disasters.
---

# Format
Placeholders follow the format: `%disasters_<placeholder>%`.
In the ones which contain `<arena>` you need to replace it with the arena ID
you want to get the value from.

# List
- `%disasters_wins%`: total player wins (cached).
- `%disasters_player_wins%`: same as `%disasters_wins%`.
- `%disasters_defeats%`: total player defeats (cached).
- `%disasters_player_defeats%`: same as `%disasters_defeats%`.
- `%disasters_total_played%`: total games played by the player.
- `%disasters_player_total_played%`: same as `%disasters_total_played%`.
- `%disasters_player_wlr%`: win/loss ratio (formatted with 2 decimals).
- `%disasters_total_playing%`: total number of players currently in arenas.
- `%disasters_global_players_total%`: same as `%disasters_total_playing%`.
- `%disasters_players_alive_total%`: total number of alive players across all arenas.
- `%disasters_global_arenas_count%`: total number of loaded arenas.
- `%disasters_global_arenas_waiting%`: number of arenas currently waiting for players.
- `%disasters_global_arenas_running%`: number of arenas currently active or live.
- `%disasters_arena%`: display name of the arena the player is currently in.
- `%disasters_player_arena_name%`: same as `%disasters_arena%`.
- `%disasters_player_arena_id%`: internal ID of the player’s current arena.
- `%disasters_arena_playing%`: number of players currently in the player’s arena.
- `%disasters_game_players%`: same as `%disasters_arena_playing%`.
- `%disasters_is_in_arena%`: true/false if the player is currently in an arena.
- `%disasters_player_is_in_arena%`: same as `%disasters_is_in_arena%`.
- `%disasters_game_max_players%`: maximum player capacity for the arena.
- `%disasters_game_min_players%`: minimum required players to start.
- `%disasters_game_state%`: current state of the arena (recruiting, countdown, live, restarting).
- `%disasters_game_time%`: total running time of the current game.
- `%disasters_game_time_left%`: seconds left until the arena ends.
- `%disasters_countdown_time%`: total countdown duration before the game starts.
- `%disasters_countdown_time_left%`: remaining countdown time before the game starts.
- `%disasters_game_alive%`: number of alive players in the player’s arena.
- `%disasters_game_spectators%`: number of spectators (non-alive players) in the arena.
- `%disasters_game_disasters_count%`: number of disasters active in the current game.
- `%disasters_game_disasters_list%`: list of all disasters currently active in the game.
- `%disasters_game_is_full%`: true/false if the arena is full.
- `%disasters_player_is_alive%`: true/false if the player is alive in their current arena.
- `%disasters_<arena>_state%`: current state of the specified arena.
- `%disasters_<arena>_players%`: total number of players in the specified arena.
- `%disasters_<arena>_alive%`: number of alive players in the specified arena.
- `%disasters_<arena>_max%`: maximum player capacity for the specified arena.
- `%disasters_<arena>_min%`: minimum required players to start in the specified arena.
- `%disasters_<arena>_is_full%`: true/false if the specified arena is full.

:::note
If you need any other placeholder, you can request it by opening an issue on GitHub or on our Discord.
:::
