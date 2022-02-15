// ==UserScript==
// @name         Euphoria Tweaks
// @namespace    https://euphoria.io/room/xkcd
// @version      1.145
// @description  A few tweaks for euphoria.io
// @author       c+1
// @require      https://euphoria.io/static/lib/heim/Socket.js
// @match        https://euphoria.io/
// @icon         https://euphoria.io/static/favicon-192.png
// @include      https://euphoria.io/room/xkcd/
// @grant        none
// @license MIT
// ==/UserScript==



(function() {
    'use strict';
    const NICK = "c+1" // Nickname to use on Euphoria
    const FONT = "Open Sans" // Name of font
    const USE_TIME = false // Add the date/time suffix to your nickname
    const USE_FONT = true // Use a different font
    const SHOW_TIME = "F1" // Keybind that shows UTC time. Leave blank to disable
    const HIDE_UI = "F2" // Keybind that hides the user interface. Leave blank to disable
    const SHOW_UI = "F3" // Keybind that shows the user interface. Leave blank to disable
    const CHANGE_NICK = "F4" // Keybind that askes you to change your username
    const LOAD_LOGS = "F5" // Keybind that loads more logs
    const WHAT_FONT_YOU_WANT = "F6" // Keybind that prompts the user to switch the font
    var font_they_want

    if (USE_TIME == true) {
        console.log("USE_TIME: Enabled");
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const d = new Date();
        let day = d.getUTCDate();
        let hour = d.getUTCHours();
        let minuetes = d.getUTCMinutes();
        let sec = d.getUTCSeconds();
        let month1 = month[d.getUTCMonth()];
        Heim.actions.setNick(NICK+" Logged on "+month1+" "+day+"th, "+hour+":"+minuetes+"."+sec)
    }
    else {
        console.log("USE_DATE_TIME: Disabled");
        Heim.actions.setNick(NICK)
    }

    if (USE_FONT == true) {
        console.log("USE_FONT: Enabled");
        setFont(FONT)


    }

    else {
        console.log("USE_FONT: Disabled");
        let newStyle = document.createElement('style');
        newStyle.innerHTML = 'body { font-family: "Open-Sans"}';
        document.head.appendChild(newStyle);

    }


const month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let day = d.getUTCDate();
let hour = d.getUTCHours();
let minuetes = d.getUTCMinutes();
let sec = d.getUTCSeconds();
let month1 = month[d.getUTCMonth()];
var timeDate = "It is "+hour+":"+minuetes+"."+sec+", "+month1+" "+day+"th. UTC time."

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case SHOW_TIME:
          alert(timeDate)
      break;
    case HIDE_UI:
          Heim.detachUI();
      break;
    case SHOW_UI:
          Heim.attachUI();
      break;
    case CHANGE_NICK:
          var name = prompt("Your nickname sucks. Make a better one.", "ex: c+1");
          Heim.actions.setNick(name);
          break;
    case LOAD_LOGS:
          Heim.actions.loadMoreLogs()
          break;
      case WHAT_FONT_YOU_WANT:

          font_they_want = prompt("What font would you like?","")
          setFont(font_they_want)
          break;


    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window

function setFont(fonttouse) {
        let newStyle = document.createElement('style');
        newStyle.innerHTML = 'body { font-family: "'+fonttouse+'"}';
        document.head.appendChild(newStyle);
}
darkMode()
function darkMode() {
        let darkStyle = document.createElement('style');
        darkStyle.innerHTML = 'body { color: "black"}';
        document.head.appendChild(darkStyle);
}


})();
