---
title: Placeholder list
description: List of all placeholders available in SH-Koth.
---

# Format
Placeholders follow the format: `%shkoth_<placeholder>%`.
In the ones wich contains `<koth>` you need to replace it with the koth ID 
you want to get the value from.

# List
- `%shkoth_total_wins%`: amount of wins (solo + teams).
- `%shkoth_solo_wins%`: amount of solo wins.
- `%shkoth_team_wins%`: amount of team wins.
- `%shkoth_latest_winner%`: name of the player or team that won the latest koth.
- `%shkoth_next_koth%`: display name of the next scheduled koth.
- `%shkoth_next_koth_in%`: seconds until the next scheduled koth.
- `%shkoth_next_koth_in_formatted%`: formatted time until the next scheduled koth.
- `%shkoth_<koth>_is_active%`: true/false if the koth is active.
- `%shkoth_<koth>_is_scheduled%`: true/false if the koth is scheduled.
- `%shkoth_<koth>_is_solo%`: true/false if the koth is solo.
- `%shkoth_<koth>_next_schedule%`: seconds until the koth is scheduled to start.
- `%shkoth_<koth>_next_schedule_formatted%`: formatted time until the koth is scheduled to start.
- `%shkoth_<koth>_display_name%`: display name of the koth.
- `%shkoth_<koth>_progress%`: capture percentage progress of the koth.
- `%shkoth_<koth>_inside%`: true/false if the player is inside the koth region.
- `%shkoth_<koth>_inside_count%`: return the number of players inside the koth region.
- `%shkoth_<koth>_id%`: ID of the koth.
- `%shkoth_<koth>_world%`: world where the koth is located.
- `%shkoth_<koth>_x%`: x coordinate of the koth
- `%shkoth_<koth>_y%`: y coordinate of the koth
- `%shkoth_<koth>_z%`: z coordinate of the koth
- `%shkoth_<koth>_is_running%`: true/false if the koth is currently running.
- `%shkoth_<koth>_is_capturing%`: true/false if the koth is being captured.
- `%shkoth_<koth>_capturer%`: name of the player capturing the koth.
- `%shkoth_<koth>_captured%`: amount of seconds the koth has been captured.
- `%shkoth_<koth>_captured_formatted%`: formatted time the koth has been captured.
- `%shkoth_<koth>_max_time%`: seconds that koth will be running if not captured.
- `%shkoth_<koth>_max_time_formatted%`: formatted time that koth will be running if not captured.
- `%shkoth_<koth>_time_left%`: seconds left until the koth ends if not captured.
- `%shkoth_<koth>_time_left_formatted%`: formatted time left until the koth ends if not captured.
- `%shkoth_<koth>_time_to_win%`: seconds left until the koth is won if being captured.
- `%shkoth_<koth>_time_to_win_formatted%`: formatted time left until the koth is won if being captured.

:::note
If you need any other placeholder, you can request it by opening an issue on GitHub or on our Discord.
:::
