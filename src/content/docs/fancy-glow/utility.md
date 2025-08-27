---
title: Utility
---


## Admin & plugin features permissions.
| Permission             | Function                                         |
|:-----------------------|:-------------------------------------------------|
| `fancyglow.admin`      | Grants full access to all commands and features. |
| `fancyglow.all_colors` | Unlocks all colors in GUI and commands.          |
| `fancyglow.rainbow`    | Enables rainbow glow mode.                       |
| `fancyglow.flashing`   | Enables flashing glow mode.                      |

## Commands and Permissions
| Command - Description                                                                                           | Permission                           |
|:----------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| `/glow` - Opens the color selection GUI                                                                         | `fancyglow.command.gui`              |
| `/glow set <player> <color>` - Sets another player's glow color                                                 | `fancyglow.command.set`              |
| `/glow color <color>` - Sets your glow color without GUI. Full list [here](#every-individual-color-permission). | `fancyglow.command.color`            |
| `/glow reload` - Reloads the plugin configuration                                                               | `fancyglow.command.reload`           |
| `/glow disable` - Disables your own glow                                                                        | `fancyglow.command.disable`          |
| `/glow disable <player>` - Disables another player's glow                                                       | `fancyglow.command.disable.others`   |
| `/glow disable all` - Disables glow for all players                                                             | `fancyglow.command.disable.everyone` |

#### Every individual color permission


| Permission | Description |
|:---|:---|
| `fancyglow.red` | Grants access to the **red** glow color. |
| `fancyglow.dark_red` | Grants access to the **dark red** glow color. |
| `fancyglow.blue` | Grants access to the **blue** glow color. |
| `fancyglow.dark_blue` | Grants access to the **dark blue** glow color. |
| `fancyglow.aqua` | Grants access to the **aqua** glow color. |
| `fancyglow.dark_aqua` | Grants access to the **dark aqua** glow color. |
| `fancyglow.green` | Grants access to the **green** glow color. |
| `fancyglow.dark_green` | Grants access to the **dark green** glow color. |
| `fancyglow.yellow` | Grants access to the **yellow** glow color. |
| `fancyglow.gold` | Grants access to the **gold** glow color. |
| `fancyglow.light_purple` | Grants access to the **light purple (pink)** glow color. |
| `fancyglow.dark_purple` | Grants access to the **dark purple (purple)** glow color. |
| `fancyglow.gray` | Grants access to the **gray** glow color. |
| `fancyglow.dark_gray` | Grants access to the **dark gray** glow color. |
| `fancyglow.black` | Grants access to the **black** glow color. |
| `fancyglow.white` | Grants access to the **white** glow color. |

## Placeholders
| Placeholder                    | Description                                              |
|:-------------------------------|:---------------------------------------------------------| 
| `%fancyglow_color%`            | Returns the glow color format code.                      |
| `%fancyglow_color_name%`       | Returns the current glowing mode/color name.             |
| `%fancyglow_status%`           | Returns simple enabled/disabled status from papi config. |
| `%fancyglow_status_formatted%` | Returns formatted status (configurable in config.yml)    |
| `%fancyglow_status_<color>%`   | Checks if player has specific color enabled.             |

### Color-Specific Status Checks
These placeholders return "enabled" if the player has the specified glow, or "disabled" if not. Replace `<color>` with any available color name (e.g., red, blue, rainbow): `%fancyglow_status_<color>%`

**Examples:**
- `%fancyglow_status_red%`
- `%fancyglow_status_rainbow%`
- `%fancyglow_status_flashing%`

*Works with all color options from the color [permissions list](#every-individual-color-permission).*