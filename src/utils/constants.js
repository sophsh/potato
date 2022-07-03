export const NOTIFICATION_ID = "tomatoClockNotification";

export const STORAGE_KEY = {
  TIMELINE: "timeline",
  SETTINGS: "settings",
};

export const SETTINGS_KEY = {
  MINUTES_IN_TOMATO: "minutesInTomato",
  MINUTES_IN_TOMATO_AUTO: "minutesInTomatoAuto",
  MINUTES_IN_SHORT_BREAK: "minutesInShortBreak",
  MINUTES_IN_LONG_BREAK: "minutesInLongBreak",
  IS_NOTIFICATION_SOUND_ENABLED: "isNotificationSoundEnabled",
  IS_TOOLBAR_BADGE_ENABLED: "isToolbarBadgeEnabled",
};

export const DEFAULT_SETTINGS = {
  [SETTINGS_KEY.MINUTES_IN_TOMATO]: 0.2,
  [SETTINGS_KEY.MINUTES_IN_TOMATO_AUTO]: 0.2,
  [SETTINGS_KEY.MINUTES_IN_SHORT_BREAK]: 0.2,
  [SETTINGS_KEY.MINUTES_IN_LONG_BREAK]: 15,
  [SETTINGS_KEY.IS_NOTIFICATION_SOUND_ENABLED]: true,
  [SETTINGS_KEY.IS_TOOLBAR_BADGE_ENABLED]: true,
};

export const TIMER_TYPE = {
  TOMATO: "tomato",
  TOMATO_AUTO: "tomatoAuto",
  SHORT_BREAK: "shortBreak",
  LONG_BREAK: "longBreak",
};

export const BADGE_BACKGROUND_COLOR_BY_TIMER_TYPE = {
  [TIMER_TYPE.TOMATO]: "#FFA3C7",
  [TIMER_TYPE.TOMATO_AUTO]: "#FFA3C7",
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
