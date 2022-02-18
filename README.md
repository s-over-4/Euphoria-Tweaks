# Euphoria Tweaks
### Some simple front-end tweaks to euphoria.io, specifically &xkcd

To change the room the script applies to, change the @namespace and @include url's to match. 

### Constants:
#### All of these are editable by the user to produce the desired effect.


NICK: The default nickname the user will have upon joining the room

FONT: The name of the font that will be used. Requires 'USE_FONT' to be enabled. Can be any font the user has installed.

USE_TIME: true or false. Will display the UTC time the user joined the room in their nickname. Limits the length of the nickname to ~4 characters.

USE_FONT: true or false.

SHOW_TIME: Keybind to show the current UTC time. A list of all valid keys can be found here: https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

HIDE_UI: Keybing that hides the UI. Use if the UI is having issues.

SHOW_UI: Keybind that shows the UI. Use if the UI is having issues.

CHANGE_NICK: Keybind that prompts the user to change their username.

LOAD_LOGS: Loads logs faster, as your browser does not have to render everything at the same time.

WHAT_FONT_YOU_WANT: Keybind that prompts the user to change the font. Sometimes requires a refresh or hide/show UI to take affect.
