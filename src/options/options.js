import "bootstrap/dist/css/bootstrap.min.css";
import "./options.css";

import Settings from "../utils/settings";
import { SETTINGS_KEY } from "../utils/constants";
import { windows } from "webextension-polyfill";
import {Howl, Howler} from 'howler';

export default class Options {
  constructor() {
    this.settings = new Settings();

    this.domMinutesInPotato = document.getElementById("minutes-in-potato");
    this.domMinutesInShortBreak = document.getElementById("minutes-in-short-break");
    this.domMinutesInLongBreak = document.getElementById("minutes-in-long-break");
    this.domNotificationSoundCheckbox = document.getElementById("notification-sound-checkbox");
    this.domChosenSound = document.getElementById("notify");
    this.domNotifyBox = document.getElementById("notify-box");
    this.domToolbarBadgeCheckbox = document.getElementById("toolbar-badge-checkbox");

    this.setOptionsOnPage();
    this.setEventListeners();
  }

  setOptionsOnPage() {
    this.settings.getSettings().then((settings) => {
      const {
        minutesInPotato,
        minutesInShortBreak,
        minutesInLongBreak,
        isNotificationSoundEnabled,
        chosenSound,
        isToolbarBadgeEnabled,
      } = settings;

      this.domMinutesInPotato.value = minutesInPotato;
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
    const minutesInPotato = parseInt(this.domMinutesInPotato.value);
    const minutesInShortBreak = parseInt(this.domMinutesInShortBreak.value);
    const minutesInLongBreak = parseInt(this.domMinutesInLongBreak.value);
    const isNotificationSoundEnabled = this.domNotificationSoundCheckbox
      .checked;
    const chosenSound = this.domChosenSound.value;
    const isToolbarBadgeEnabled = this.domToolbarBadgeCheckbox.checked;

    this.settings.saveSettings({
      [SETTINGS_KEY.MINUTES_IN_POTATO]: minutesInPotato,
      [SETTINGS_KEY.MINUTES_IN_POTATO_AUTO]: minutesInPotato,
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

    document.getElementById("notify").addEventListener("click", () => {
      if(this.domChosenSound.value == "Portal") {
        new Audio("/assets/sounds/Portal2_sfx_button_positive.mp3").play();
      }

      if(this.domChosenSound.value == "Huawei") {
        new Audio("/assets/sounds/Huawei_Notification_Sound_1.mp3").play();
      }

      if(this.domChosenSound.value == "IPhone") {
        new Audio("/assets/sounds/IPhone_Notification_Ringtone.mp3").play();
      }
    });

  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Options();
});



