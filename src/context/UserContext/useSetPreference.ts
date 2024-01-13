import { User } from "context/UserContext/types.ts";
import { Preference } from "../../domain/user/Preference.ts";

const useSetPreference = () => {
  return {
    updateUserPreference: (user: User, preference: Preference, value: any): User => {
      switch (preference) {
        case Preference.PROFILE_VISIBILITY: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              profileVisibility: value
            }
          };
        }
        case Preference.LANGUAGE: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              language: value
            }
          }
        }
        case Preference.ROMAJI_VISIBILITY: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              romajiVisibility: value
            }
          }
        }
        case Preference.HIGH_SCORES_BEHAVIOUR: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              highScoresBehaviour: value
            }
          }
        }
        case Preference.STREAK_CARD_VIEW: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              streakCardView: value
            }
          }
        }
        case Preference.CONFIDENCE_MENU_STYLE: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              confidenceMenuStyle: value
            }
          }
        }
        case Preference.DEFAULT_KANJI_FONT: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              kanjiFont: value
            }
          }
        }
        case Preference.ACTIVITY_FEED_QUANTITY: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              activityFeedQuantity: value
            }
          }
        }
        case Preference.FLASH_CARDS_QUANTITY: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              flashCardsQuantity: value
            }
          }
        }
        case Preference.THEME: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              theme: value
            }
          }
        }
        case Preference.STREAK_NOTIFICATIONS: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              streakNotifications: value
            }
          }
        }
        case Preference.MISTAKES_REMINDERS: {
          return {
            ...user,
            preferences: {
              ...user.preferences,
              mistakesReminders: value
            }
          }
        }
        default: {
          return user
        }
      }
    }
  }
}

export default useSetPreference