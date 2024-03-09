import { DefaultPresetsResponse } from "./types.ts"

export const useGetDefaultPresetsResponses: DefaultPresetsResponse = {
  learn: [
    {
      id: 1,
      name: "Example Learn Preset",
      description: "An example learn preset desc",
      topic: "Hiragana & Katakana",
      icon: "faApple",
      colour: "#ffffff",
      data: {
        quantity: 50,
        config: {
          hiragana: true,
          katakana: false,
          diagraphs: false,
          diacriticals: true,
          onlyDiagraphs: false,
          regular: true
        }
      }
    }
  ],
  play: [
    {
      id: 2,
      name: "Example Play Preset",
      description: "An example play preset desc",
      topic: "Hiragana & Katakana",
      icon: "faApple",
      colour: "ffffff",
      data: {
        quantity: 50,
        config: {
          hiragana: true,
          katakana: false,
          diagraphs: false,
          diacriticals: true,
          onlyDiagraphs: false,
          regular: true
        }
      },
      game: {
        hints: {
          enabled: true,
          quantity: 8,
          unlimited: false
        },
        lives: {
          enabled: true,
          quantity: 12
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          questionField: "learnable.field.kana.name",
          answerField: "learnable.field.romaji.name",
          quantity: 150,
          score: true,
          type: "choice",
          answerFilter: undefined,
          cards: 4
        }
      }
    }
  ]
}

export const useGetDefaultPresetsResponsesMultiplePresets: DefaultPresetsResponse = {
  learn: [
    {
      id: 2,
      name: "Example Learn Preset",
      description: "An example learn preset desc",
      topic: "Hiragana & Katakana",
      icon: "faApple",
      colour: "#ffffff",
      data: {
        quantity: 50,
        config: {
          hiragana: true,
          katakana: false,
          diagraphs: false,
          diacriticals: true,
          onlyDiagraphs: false,
          regular: true
        }
      }
    }
  ],
  play: [
    {
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
          katakana: false,
          diagraphs: false,
          diacriticals: true,
          onlyDiagraphs: false,
          regular: true
        }
      },
      game: {
        hints: {
          enabled: true,
          quantity: 8,
          unlimited: false
        },
        lives: {
          enabled: true,
          quantity: 12
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          questionField: "learnable.field.kana.name",
          answerField: "learnable.field.romaji.name",
          quantity: 150,
          score: true,
          type: "choice",
          answerFilter: undefined,
          cards: 4
        }
      }
    },
    {
      id: 3,
      name: "Example Play Preset 2",
      description: "An example play preset desc",
      topic: "Basics",
      icon: "FaAtom",
      colour: "ffffff",
      data: {
        quantity: 50,
        config: {
          hiragana: true,
          katakana: false,
          diagraphs: false,
          diacriticals: true,
          onlyDiagraphs: false,
          regular: true
        }
      },
      game: {
        hints: {
          enabled: true,
          quantity: 8,
          unlimited: false
        },
        lives: {
          enabled: true,
          quantity: 12
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          questionField: "learnable.field.kana.name",
          answerField: "learnable.field.romaji.name",
          quantity: 150,
          score: true,
          type: "choice",
          answerFilter: undefined,
          cards: 4
        }
      }
    }
  ]
}

export const useGetDefaultPresetsResponsesLearnOnly: DefaultPresetsResponse = {
  learn: [
    {
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
  ],
  play: []
}

export const useGetDefaultPresetsResponsesPlayOnly: DefaultPresetsResponse = {
  learn: [],
  play: [
    {
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
  ]
}

export const useGetDefaultPresetsResponsesEmpty: DefaultPresetsResponse = {
  learn: [],
  play: []
}
