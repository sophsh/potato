export const NOTIFICATION_ID = "potatoClockNotification";

export const STORAGE_KEY = {
  TIMELINE: "timeline",
  SETTINGS: "settings",
};

export const SETTINGS_KEY = {
  MINUTES_IN_POTATO: "minutesInPotato",
  MINUTES_IN_POTATO_AUTO: "minutesInPotatoAuto",
  MINUTES_IN_SHORT_BREAK: "minutesInShortBreak",
  MINUTES_IN_LONG_BREAK: "minutesInLongBreak",
  IS_NOTIFICATION_SOUND_ENABLED: "isNotificationSoundEnabled",
  CHOSEN_SOUND: "chosenSound",
  IS_TOOLBAR_BADGE_ENABLED: "isToolbarBadgeEnabled",
};

export const DEFAULT_SETTINGS = {
  [SETTINGS_KEY.MINUTES_IN_POTATO]: 1,
  [SETTINGS_KEY.MINUTES_IN_POTATO_AUTO]: 1,
  [SETTINGS_KEY.MINUTES_IN_SHORT_BREAK]: 5,
  [SETTINGS_KEY.MINUTES_IN_LONG_BREAK]: 15,
  [SETTINGS_KEY.IS_NOTIFICATION_SOUND_ENABLED]: true,
  [SETTINGS_KEY.CHOSEN_SOUND]: "Portal",
  [SETTINGS_KEY.IS_TOOLBAR_BADGE_ENABLED]: true,
};

export const TIMER_TYPE = {
  POTATO: "potato",
  POTATO_AUTO: "potatoAuto",
  SHORT_BREAK: "shortBreak",
  LONG_BREAK: "longBreak",
};

export const BADGE_BACKGROUND_COLOR_BY_TIMER_TYPE = {
  [TIMER_TYPE.POTATO]: "#FFA3C7",
  [TIMER_TYPE.POTATO_AUTO]: "#FFA3C7",
  [TIMER_TYPE.SHORT_BREAK]: "#FFE18F",
  [TIMER_TYPE.LONG_BREAK]: "#FFE18F",
};

export const RUNTIME_ACTION = {
  SET_TIMER: "setTimer",
  RESET_TIMER: "resetTimer",
  GET_TIMER_SCHEDULED_TIME: "getTimerScheduledTime",
};

export const DATE_UNIT = {
  DATE: "day",
  MONTH: "month",
};

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
