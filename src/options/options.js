import "bootstrap/dist/css/bootstrap.min.css";
import "./options.css";

import Settings from "../utils/settings";
import { SETTINGS_KEY } from "../utils/constants";
import { windows } from "webextension-polyfill";

export default class Options {
  constructor() {
    this.settings = new Settings();

    this.domMinutesInTomato = document.getElementById("minutes-in-tomato");
    this.domMinutesInShortBreak = document.getElementById(
      "minutes-in-short-break"
    );
    this.domMinutesInLongBreak = document.getElementById(
      "minutes-in-long-break"
    );
    this.domNotificationSoundCheckbox = document.getElementById(
      "notification-sound-checkbox"
    );
    this.domChosenSound = document.getElementById("notify");
    this.domNotifyBox = document.getElementById("notify-box");
    this.domToolbarBadgeCheckbox = document.getElementById(
      "toolbar-badge-checkbox"
    );

    this.setOptionsOnPage();
    this.setEventListeners();
  }

  setOptionsOnPage() {
    this.settings.getSettings().then((settings) => {
      const {
        minutesInTomato,
        minutesInShortBreak,
        minutesInLongBreak,
        isNotificationSoundEnabled,
        chosenSound,
        isToolbarBadgeEnabled,
      } = settings;

      this.domMinutesInTomato.value = minutesInTomato;
      this.domMinutesInShortBreak.value = minutesInShortBreak;
      this.domMinutesInLongBreak.value = minutesInLongBreak;
      this.domNotificationSoundCheckbox.checked = isNotificationSoundEnabled;
      this.domChosenSound.value = chosenSound;
      this.domToolbarBadgeCheckbox.checked = isToolbarBadgeEnabled;

      // this.domNotifyLabel.setAttribute("hidden", "hidden"); //working
      // this.domChosenSound.setAttribute("hidden", "hidden"); //Not working
      // this.domNotifyBox.setAttribute("hidden", "hidden"); //workingg
      if(this.domNotificationSoundCheckbox.checked){
        if(this.domNotifyBox.getAttribute("hidden")){
          this.domNotifyBox.removeAttribute("hidden");
        }
      }
      else{
        // alert(this.domNotificationSoundCheckbox.checked + "bye");
        this.domNotifyBox.setAttribute("hidden", "hidden");
      }
    });
  }

  saveOptions() {
    const minutesInTomato = parseInt(this.domMinutesInTomato.value);
    const minutesInShortBreak = parseInt(this.domMinutesInShortBreak.value);
    const minutesInLongBreak = parseInt(this.domMinutesInLongBreak.value);
    const isNotificationSoundEnabled = this.domNotificationSoundCheckbox
      .checked;
    const chosenSound = this.domChosenSound.value;
    const isToolbarBadgeEnabled = this.domToolbarBadgeCheckbox.checked;

    this.settings.saveSettings({
      [SETTINGS_KEY.MINUTES_IN_TOMATO]: minutesInTomato,
      [SETTINGS_KEY.MINUTES_IN_TOMATO_AUTO]: minutesInTomato,
      [SETTINGS_KEY.MINUTES_IN_SHORT_BREAK]: minutesInShortBreak,
      [SETTINGS_KEY.MINUTES_IN_LONG_BREAK]: minutesInLongBreak,
      [SETTINGS_KEY.IS_NOTIFICATION_SOUND_ENABLED]: isNotificationSoundEnabled,
      [SETTINGS_KEY.CHOSEN_SOUND]: chosenSound,
      [SETTINGS_KEY.IS_TOOLBAR_BADGE_ENABLED]: isToolbarBadgeEnabled,
    });
  }

  setEventListeners() {
    document.getElementById("options-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.saveOptions();
    });

    document.getElementById("reset-options").addEventListener("click", () => {
      this.settings.resetSettings().then(() => {
        this.setOptionsOnPage();
      });
    });

    document.getElementById("notification-sound-checkbox").addEventListener("change", () => {
      if(this.domNotificationSoundCheckbox.checked){
        // alert(this.domChosenSound); //"Huawei" printed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! with the ".value"
        if(this.domNotifyBox.getAttribute("hidden")){
          this.domNotifyBox.removeAttribute("hidden");
          this.saveOptions();
        }
      }
      else{
        // alert(this.domNotificationSoundCheckbox.checked + "bye");
        this.domNotifyBox.setAttribute("hidden", "hidden");
        this.saveOptions();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Options();
});
