import { FavouritePresetsResponse } from "./types.ts";

export const useGetPresetFavouritesResponses: FavouritePresetsResponse = {
  learn: [
    {
      id: 1,
      preset: {
        id: 1,
        name: "Example Learn Preset",
        description: "An example learn preset desc",
        topic: "Hiragana & Katakana",
        icon: "faApple",
        colour: "ffffff",
        data: {
          quantity: 50,
          config: {
            hiragana: true,
            katakana: true,
            diagraphs: true,
            diacriticals: true,
            onlyDiagraphs: false,
            regular: true
          }
        }
      }
    }
  ],
  play: [
    {
      id: 1,
      preset: {
        id: 1,
        name: "Example Play Preset",
        description: "An example play preset desc",
        topic: "Hiragana & Katakana",
        icon: "faApple",
        colour: "ffffff",
        data: {
          quantity: 50,
          config: {
            hiragana: true,
            katakana: true,
            diagraphs: true,
            diacriticals: true,
            onlyDiagraphs: false,
            regular: true
          }
        },
        game: {
          hints: {
            enabled: true,
            quantity: 3,
            unlimited: false
          },
          lives: {
            enabled: true,
            quantity: 10
          },
          time: {
            timed: true,
            countdown: false,
            secondsPerQuestion: 0
          },
          question: {
            questionField: "Kana",
            answerField: "Romaji",
            quantity: 0,
            score: true,
            type: "Text",
            answerFilter: undefined,
            cards: 0
          }
        }
      }
    }
  ]
}