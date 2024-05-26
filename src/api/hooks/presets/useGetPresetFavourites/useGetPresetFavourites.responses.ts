import { FavouritePresetsResponse } from "./types.ts";

export const useGetPresetFavouritesResponses: FavouritePresetsResponse = {
  learn: [
    {
      id: 2,
      preset: {
        id: 2,
        name: "Test Learn",
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
        name: "Test Play",
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
            questionField: "learnable.field.kana.name",
            answerField: "learnable.field.romaji.name",
            quantity: 0,
            score: true,
            type: "text",
            answerFilter: undefined,
            cards: 0
          }
        }
      }
    }
  ]
}

export const useGetPresetFavouritesResponsesLearnOnly: FavouritePresetsResponse = {
  learn: [
    {
      id: 2,
      preset: {
        id: 2,
        name: "Test Learn",
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
  play: []
}

export const useGetPresetFavouritesResponsesPlayOnly: FavouritePresetsResponse = {
  learn: [],
  play: [
    {
      id: 1,
      preset: {
        id: 1,
        name: "Test Play",
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
            questionField: "learnable.field.kana.name",
            answerField: "learnable.field.romaji.name",
            quantity: 0,
            score: true,
            type: "text",
            answerFilter: undefined,
            cards: 0
          }
        }
      }
    }
  ]
}

export const useGetPresetFavouritesResponsesEmpty: FavouritePresetsResponse = {
  learn: [],
  play: []
}