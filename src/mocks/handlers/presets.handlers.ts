import { rest } from "msw"
import { api } from "../util"

export const handlers = [
  rest.get(`${api}/presets/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        learn: [
          {
            id: 33,
            name: "presets.learn.hiragana.name",
            description: "This syllabary is used for Japanese words. Contains 107 sounds.",
            icon: "あ",
            colour: "#fdb40e",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: false,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 34,
            name: "presets.learn.katakana.name",
            description: "This syllabary is used for loan words and onomatopoeia. Contains 107 sounds.",
            icon: "ア",
            colour: "#ff7730",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: false,
                katakana: true,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 35,
            name: "presets.learn.diacriticals.name",
            description: "Includes only the 25 non-diagraph voiced consonants from both syllabaries for a total of 50.",
            icon: "ざ",
            colour: "#1785e2",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: false,
                diacriticals: true,
                regular: false,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 36,
            name: "presets.learn.diagraphs.name",
            description:
              "A diagraph is a combination of two kana. The first is normal size and the second is smaller. There are 72 across both syllabaries.",
            icon: "きゃ",
            colour: "#a01219",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: true
              }
            }
          },
          {
            id: 37,
            name: "presets.learn.everything.name",
            description: "Includes all 107 kana from both syllabaries for a total of 214.",
            icon: "あア",
            colour: "#fc3131",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 38,
            name: "presets.learn.kyōiku.name",
            description: "Includes the 1026 kanji as per the Japanese Ministry of Education taught from grades 1 to 6.",
            icon: "FaSchool",
            colour: "#fdb40e",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            }
          },
          {
            id: 39,
            name: "presets.learn.high-school.name",
            description: "Includes the 1110 kanji taught from grades 7 to 12 in Japanese high schools.",
            icon: "FaChalkboardTeacher",
            colour: "#74d43f",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [8],
                tags: []
              }
            }
          },
          {
            id: 40,
            name: "presets.learn.jōyō.name",
            description:
              "Includes the 1026 Kyōiku kanji plus an additional 1110 taught from grades 7 to 12 for a total of 2136.",
            icon: "FaPaintBrush",
            colour: "#ff7730",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 41,
            name: "presets.learn.numbers.name",
            description: "Includes all number kanji plus counters and units of measurement.",
            icon: "FaYenSign",
            colour: "#1785e2",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 42,
            name: "presets.learn.colours.name",
            description: "Includes all colours.",
            icon: "FaFillDrip",
            colour: "#a01219",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 43,
            name: "presets.learn.time.name",
            description: "Includes days, months, seasons, divisions and temporal nouns.",
            icon: "FaClock",
            colour: "#fc3131",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 44,
            name: "presets.learn.numbers.name",
            description: "Numbers one to ten plus all denominations up to one billion.",
            icon: "FaSortNumericDown",
            colour: "#fdb40e",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: true,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            }
          },
          {
            id: 45,
            name: "presets.learn.colours.name",
            description: "Commonly used colours and their variants plus various miscellaneous related words.",
            icon: "FaPalette",
            colour: "#fd0e3e",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: true,
                animals: false,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 46,
            name: "presets.learn.animals.name",
            description: "Animals that you mind find at home as pets or at a zoo or sanctuary while in Japan.",
            icon: "FaCat",
            colour: "#ff7730",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 47,
            name: "presets.learn.directions.name",
            description: "Directional words used when describing the locations of things plus compass directions.",
            icon: "FaCompass",
            colour: "#1785e2",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: true,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 48,
            name: "presets.learn.weather.name",
            description: "Commonly used words when describing the weather conditions or current climate.",
            icon: "FaCloudSunRain",
            colour: "#e3c93a",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: true,
                family: false,
                body: false
              }
            }
          },
          {
            id: 49,
            name: "presets.learn.family.name",
            description: "Immediate family and relatives belonging to both your own and others' families.",
            icon: "FaChild",
            colour: "#3ee939",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            }
          },
          {
            id: 50,
            name: "presets.learn.body.name",
            description: "Commonly used words describing body parts and human anatomy.",
            icon: "FaHandPaper",
            colour: "#5641d0",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            }
          },
          {
            id: 51,
            name: "presets.learn.days-of-the-week.name",
            description: "The standard seven days of the week; Monday to Friday.",
            icon: "FaCalendarDay",
            colour: "#fdb40e",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: false,
                seasons: false,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 52,
            name: "presets.learn.months-of-the-year.name",
            description: "The standard twelve months of the year; January to December.",
            icon: "FaCalendarAlt",
            colour: "#ff7730",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: true,
                seasons: false,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 53,
            name: "presets.learn.temporal-nouns.name",
            description: "Time-based nouns or adverbs such as 'Tomorrow' or 'The day before yesterday'.",
            icon: "FaClock",
            colour: "#ec2352",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: true,
                phrases: false
              }
            }
          },
          {
            id: 54,
            name: "presets.learn.seasonal.name",
            description: "The four seasons plus annual holiday events such as Christmas and Easter.",
            icon: "FaSnowflake",
            colour: "#2cade0",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: true,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 55,
            name: "presets.learn.common-phrases.name",
            description: "Common phrases used when talking about time, routine and events.",
            icon: "FaAlignLeft",
            colour: "#ff6038",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: false,
                phrases: true
              }
            }
          },
          {
            id: 56,
            name: "presets.learn.everything.name",
            description: "Includes everything from the other presets.",
            icon: "FaGlobeAmericas",
            colour: "#41d085",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: true,
                seasons: true,
                nouns: true,
                phrases: true
              }
            }
          },
          {
            id: 57,
            name: "presets.learn.adverbs.name",
            description: "Adverbs are words or phrases that modify or qualify an adjective, verb or other adverb.",
            icon: "FaExclamation",
            colour: "#5641d0",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 58,
            name: "presets.learn.particles.name",
            description: "Japanese particles are small words that indicate relations of words within a sentence.",
            icon: "を",
            colour: "#ff7730",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: true,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 59,
            name: "presets.learn.expressions.name",
            description: "Commonly used expressions, pronouns & prepositions used in everyday conversation.",
            icon: "FaComment",
            colour: "#1785e2",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 60,
            name: "presets.learn.verbs.name",
            description:
              "Verbs are used to describe an action, state or occurrence and form the main part of the predicate.",
            icon: "FaRunning",
            colour: "#e3c93a",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 61,
            name: "presets.learn.nouns.name",
            description: "Nouns are words that identify a class of people, places or things.",
            icon: "FaCube",
            colour: "#4fdb4b",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: true,
                adjectives: false
              }
            }
          },
          {
            id: 62,
            name: "presets.learn.adjectives.name",
            description:
              "Adjectives are words use to describe and name an attribute of a noun. Japanese has な and い adjectives.",
            icon: "FaFire",
            colour: "#fd0e3e",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: true
              }
            }
          }
        ],
        play: [
          {
            id: 1,
            name: "presets.play.relaxed.name",
            description: "No timers. No lives. No rush. You're learning and want to take your time.",
            icon: "FaGraduationCap",
            colour: "#fdb40e",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: false,
                quantity: 0
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: false,
                answerFilter: null
              }
            }
          },
          {
            id: 2,
            name: "presets.play.time-attack.name",
            description: "You have 10s seconds to answer, 3 tips and 5 lives. A race against the clock!",
            icon: "FaHourglassStart",
            colour: "#ff7730",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: false,
                quantity: 0
              },
              time: {
                timed: false,
                countdown: true,
                secondsPerQuestion: 10
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 3,
            name: "presets.play.rōmaji.name",
            description: "You're shown a single kana and must enter the rōmaji. You're timed and have 5 lives.",
            icon: "FaFont",
            colour: "#1785e2",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 4,
            name: "presets.play.kana.name",
            description: "You're presented with the rōmaji for a random kana and four characters to choose from.",
            icon: "FaKickstarterK",
            colour: "#7e2bd7",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.romaji.name",
                answerField: "learnable.field.kana.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: 1
              }
            }
          },
          {
            id: 5,
            name: "presets.play.match.name",
            description: "You're given 3 kana per question and must match up each character to its respective rōmaji.",
            icon: "FaBezierCurve",
            colour: "#38c742",
            topic: "Hiragana & Katakana",
            data: {
              quantity: 45,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 3,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "match",
                cards: 0,
                quantity: 3,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 6,
            name: "presets.play.hardcore.name",
            description:
              "Less time. More options. No hints. 1 life. Includes all Hiragana & Katakana. Can you beat it?",
            icon: "FaFire",
            colour: "#fc3131",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 1
              },
              time: {
                timed: false,
                countdown: true,
                secondsPerQuestion: 5
              },
              question: {
                questionField: "learnable.field.romaji.name",
                answerField: "learnable.field.kana.name",
                type: "choice",
                cards: 6,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 7,
            name: "presets.play.kanji.name",
            description:
              "You're shown a list of meanings and must pick the correct kanji character that represents them.",
            icon: "FaPaintBrush",
            colour: "#6857ee",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.kanji.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 8,
            name: "presets.play.meaning.name",
            description: "You're shown a kanji character and must pick all meaning that are applicable.",
            icon: "FaSchool",
            colour: "#65cd3a",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.meaning.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 9,
            name: "presets.play.on'yomi.name",
            description:
              "You're shown a kanji character and must pick all the Jōyō on'yomi readings. These are the original Chinese readings.",
            icon: "FaStar",
            colour: "#eacd35",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.on.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 10,
            name: "presets.play.kun'yomi.name",
            description:
              "You're shown a kanji character and must pick all the Jōyō kun'yomi readings. These are the newer Japanese readings.",
            icon: "FaCircle",
            colour: "#e21717",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.kun.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 11,
            name: "presets.play.match.name",
            description: "You're shown 4 random kanji per question and must match them to their English meanings.",
            icon: "FaBezierCurve",
            colour: "#e79711",
            topic: "Jōyō Kanji",
            data: {
              quantity: 80,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 4,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.meaning.name",
                type: "match",
                cards: 0,
                quantity: 4,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 12,
            name: "presets.play.random.name",
            description: "You're given a random mixture of all of the above types of questions.",
            icon: "FaRandom",
            colour: "#3cabca",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 3,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.random.name",
                answerField: "learnable.field.random.name",
                type: "random",
                cards: 4,
                quantity: 3,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 13,
            name: "presets.play.numbers.name",
            description: "Numbers one to ten plus all denominations up to one billion.",
            icon: "FaSortNumericDown",
            colour: "#fdb40e",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: true,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 14,
            name: "presets.play.counters.name",
            description:
              "Japanese has a variety of kanji used to count different types of things. E.g. for animals or flat things.",
            icon: "FaCalculator",
            colour: "#ff7730",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: true,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 15,
            name: "presets.play.age.name",
            description: "Some numbers change their pronunciation when describing someones ages in years.",
            icon: "FaBaby",
            colour: "#1785e2",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: true,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 16,
            name: "presets.play.exceptions.name",
            description:
              "Some numbers don't follow the rules and have exceptional pronunciation in different contexts.",
            icon: "FaTimes",
            colour: "#a01219",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: true,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 17,
            name: "presets.play.units.name",
            description: "Units of measurement for area, length, volume and weight.",
            icon: "FaRuler",
            colour: "#4ed440",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 18,
            name: "presets.play.sequence.name",
            description: "Words used for counting things or sequences such as first, second, half, next etc.",
            icon: "FaSort",
            colour: "#fc3131",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 19,
            name: "presets.play.colours.name",
            description: "Commonly used colours and their variants plus various miscellaneous related words.",
            icon: "FaFillDrip",
            colour: "#db6b25",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: true,
                animals: false,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 20,
            name: "presets.play.animals.name",
            description: "Animals that you mind find at home as pets or at a zoo or sanctuary while in Japan.",
            icon: "FaDog",
            colour: "#439bdc",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 21,
            name: "presets.play.directions.name",
            description: "Directional words used when describing the locations of things plus compass directions.",
            icon: "FaCompass",
            colour: "#d01b4c",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: true,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 22,
            name: "presets.play.weather.name",
            description: "Commonly used words when describing the weather conditions or current climate.",
            icon: "FaCloudSunRain",
            colour: "#e3c93a",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: true,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 23,
            name: "presets.play.family.name",
            description: "Immediate family and relatives belonging to both your own and others' families.",
            icon: "FaChild",
            colour: "#23b820",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 24,
            name: "presets.play.body.name",
            description: "Commonly used words describing body parts and human anatomy.",
            icon: "FaHandPaper",
            colour: "#5641d0",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 25,
            name: "presets.play.days-of-the-week.name",
            description: "The standard seven days of the week; Monday to Friday.",
            icon: "FaCalendarDay",
            colour: "#3fb4de",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: false,
                seasons: false,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 26,
            name: "presets.play.months-of-the-year.name",
            description: "The standard twelve months of the year; January to December.",
            icon: "FaCalendarAlt",
            colour: "#ff7730",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: true,
                seasons: false,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 27,
            name: "presets.play.temporal-nouns.name",
            description: "Time-based nouns or adverbs such as 'Tomorrow' or 'The day before yesterday'.",
            icon: "FaClock",
            colour: "#e32f2f",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: true,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 28,
            name: "presets.play.seasonal.name",
            description: "The four seasons plus annual holiday events such as Christmas and Easter.",
            icon: "FaCloudSunRain",
            colour: "#e7cb38",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: true,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 29,
            name: "presets.play.common-phrases.name",
            description: "Common phrases used when talking about time, routine and events.",
            icon: "FaAlignLeft",
            colour: "#ff6038",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: false,
                phrases: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 30,
            name: "presets.play.everything.name",
            description: "Includes everything from the other presets.",
            icon: "FaGlobeAmericas",
            colour: "#39c461",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: true,
                seasons: true,
                nouns: true,
                phrases: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 31,
            name: "presets.play.japanese.name",
            description:
              "You're given some vocabulary and 4 options to choose from. You must pick the correct Japanese for it.",
            icon: "FaToriiGate",
            colour: "#a92739",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: true,
                adjectives: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 32,
            name: "presets.play.meaning.name",
            description:
              "You're given the Japanese for a piece of vocabulary and must enter the english meaning for it.",
            icon: "FaGrinBeam",
            colour: "#57afd9",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: true,
                adjectives: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.japanese.name",
                answerField: "learnable.field.meaning.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          }
        ]
      })
    )
  }),
  rest.get(`${api}/presets/default`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        learn: [
          {
            id: 33,
            name: "presets.learn.hiragana.name",
            description: "This syllabary is used for Japanese words. Contains 107 sounds.",
            icon: "あ",
            colour: "#fdb40e",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: false,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 34,
            name: "presets.learn.katakana.name",
            description: "This syllabary is used for loan words and onomatopoeia. Contains 107 sounds.",
            icon: "ア",
            colour: "#ff7730",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: false,
                katakana: true,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 35,
            name: "presets.learn.diacriticals.name",
            description: "Includes only the 25 non-diagraph voiced consonants from both syllabaries for a total of 50.",
            icon: "ざ",
            colour: "#1785e2",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: false,
                diacriticals: true,
                regular: false,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 36,
            name: "presets.learn.diagraphs.name",
            description:
              "A diagraph is a combination of two kana. The first is normal size and the second is smaller. There are 72 across both syllabaries.",
            icon: "きゃ",
            colour: "#a01219",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: false,
                diacriticals: false,
                regular: true,
                onlyDiagraphs: true
              }
            }
          },
          {
            id: 37,
            name: "presets.learn.everything.name",
            description: "Includes all 107 kana from both syllabaries for a total of 214.",
            icon: "あア",
            colour: "#fc3131",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            }
          },
          {
            id: 38,
            name: "presets.learn.kyōiku.name",
            description: "Includes the 1026 kanji as per the Japanese Ministry of Education taught from grades 1 to 6.",
            icon: "FaSchool",
            colour: "#fdb40e",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            }
          },
          {
            id: 39,
            name: "presets.learn.high-school.name",
            description: "Includes the 1110 kanji taught from grades 7 to 12 in Japanese high schools.",
            icon: "FaChalkboardTeacher",
            colour: "#74d43f",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [8],
                tags: []
              }
            }
          },
          {
            id: 40,
            name: "presets.learn.jōyō.name",
            description:
              "Includes the 1026 Kyōiku kanji plus an additional 1110 taught from grades 7 to 12 for a total of 2136.",
            icon: "FaPaintBrush",
            colour: "#ff7730",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 41,
            name: "presets.learn.numbers.name",
            description: "Includes all number kanji plus counters and units of measurement.",
            icon: "FaYenSign",
            colour: "#1785e2",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 42,
            name: "presets.learn.colours.name",
            description: "Includes all colours.",
            icon: "FaFillDrip",
            colour: "#a01219",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 43,
            name: "presets.learn.time.name",
            description: "Includes days, months, seasons, divisions and temporal nouns.",
            icon: "FaClock",
            colour: "#fc3131",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                tags: []
              }
            }
          },
          {
            id: 44,
            name: "presets.learn.numbers.name",
            description: "Numbers one to ten plus all denominations up to one billion.",
            icon: "FaSortNumericDown",
            colour: "#fdb40e",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: true,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            }
          },
          {
            id: 45,
            name: "presets.learn.colours.name",
            description: "Commonly used colours and their variants plus various miscellaneous related words.",
            icon: "FaPalette",
            colour: "#fd0e3e",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: true,
                animals: false,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 46,
            name: "presets.learn.animals.name",
            description: "Animals that you mind find at home as pets or at a zoo or sanctuary while in Japan.",
            icon: "FaCat",
            colour: "#ff7730",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 47,
            name: "presets.learn.directions.name",
            description: "Directional words used when describing the locations of things plus compass directions.",
            icon: "FaCompass",
            colour: "#1785e2",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: true,
                weather: false,
                family: false,
                body: false
              }
            }
          },
          {
            id: 48,
            name: "presets.learn.weather.name",
            description: "Commonly used words when describing the weather conditions or current climate.",
            icon: "FaCloudSunRain",
            colour: "#e3c93a",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: true,
                family: false,
                body: false
              }
            }
          },
          {
            id: 49,
            name: "presets.learn.family.name",
            description: "Immediate family and relatives belonging to both your own and others' families.",
            icon: "FaChild",
            colour: "#3ee939",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            }
          },
          {
            id: 50,
            name: "presets.learn.body.name",
            description: "Commonly used words describing body parts and human anatomy.",
            icon: "FaHandPaper",
            colour: "#5641d0",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            }
          },
          {
            id: 51,
            name: "presets.learn.days-of-the-week.name",
            description: "The standard seven days of the week; Monday to Friday.",
            icon: "FaCalendarDay",
            colour: "#fdb40e",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: false,
                seasons: false,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 52,
            name: "presets.learn.months-of-the-year.name",
            description: "The standard twelve months of the year; January to December.",
            icon: "FaCalendarAlt",
            colour: "#ff7730",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: true,
                seasons: false,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 53,
            name: "presets.learn.temporal-nouns.name",
            description: "Time-based nouns or adverbs such as 'Tomorrow' or 'The day before yesterday'.",
            icon: "FaClock",
            colour: "#ec2352",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: true,
                phrases: false
              }
            }
          },
          {
            id: 54,
            name: "presets.learn.seasonal.name",
            description: "The four seasons plus annual holiday events such as Christmas and Easter.",
            icon: "FaSnowflake",
            colour: "#2cade0",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: true,
                nouns: false,
                phrases: false
              }
            }
          },
          {
            id: 55,
            name: "presets.learn.common-phrases.name",
            description: "Common phrases used when talking about time, routine and events.",
            icon: "FaAlignLeft",
            colour: "#ff6038",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: false,
                phrases: true
              }
            }
          },
          {
            id: 56,
            name: "presets.learn.everything.name",
            description: "Includes everything from the other presets.",
            icon: "FaGlobeAmericas",
            colour: "#41d085",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: true,
                seasons: true,
                nouns: true,
                phrases: true
              }
            }
          },
          {
            id: 57,
            name: "presets.learn.adverbs.name",
            description: "Adverbs are words or phrases that modify or qualify an adjective, verb or other adverb.",
            icon: "FaExclamation",
            colour: "#5641d0",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 58,
            name: "presets.learn.particles.name",
            description: "Japanese particles are small words that indicate relations of words within a sentence.",
            icon: "を",
            colour: "#ff7730",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: true,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 59,
            name: "presets.learn.expressions.name",
            description: "Commonly used expressions, pronouns & prepositions used in everyday conversation.",
            icon: "FaComment",
            colour: "#1785e2",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 60,
            name: "presets.learn.verbs.name",
            description:
              "Verbs are used to describe an action, state or occurrence and form the main part of the predicate.",
            icon: "FaRunning",
            colour: "#e3c93a",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: false,
                adjectives: false
              }
            }
          },
          {
            id: 61,
            name: "presets.learn.nouns.name",
            description: "Nouns are words that identify a class of people, places or things.",
            icon: "FaCube",
            colour: "#4fdb4b",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: true,
                adjectives: false
              }
            }
          },
          {
            id: 62,
            name: "presets.learn.adjectives.name",
            description:
              "Adjectives are words use to describe and name an attribute of a noun. Japanese has な and い adjectives.",
            icon: "FaFire",
            colour: "#fd0e3e",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: false,
                particles: false,
                expressions: false,
                verbs: false,
                nouns: false,
                adjectives: true
              }
            }
          }
        ],
        play: [
          {
            id: 1,
            name: "presets.play.relaxed.name",
            description: "No timers. No lives. No rush. You're learning and want to take your time.",
            icon: "FaGraduationCap",
            colour: "#fdb40e",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: false,
                quantity: 0
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: false,
                answerFilter: null
              }
            }
          },
          {
            id: 2,
            name: "presets.play.time-attack.name",
            description: "You have 10s seconds to answer, 3 tips and 5 lives. A race against the clock!",
            icon: "FaHourglassStart",
            colour: "#ff7730",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: false,
                quantity: 0
              },
              time: {
                timed: false,
                countdown: true,
                secondsPerQuestion: 10
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 3,
            name: "presets.play.rōmaji.name",
            description: "You're shown a single kana and must enter the rōmaji. You're timed and have 5 lives.",
            icon: "FaFont",
            colour: "#1785e2",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 4,
            name: "presets.play.kana.name",
            description: "You're presented with the rōmaji for a random kana and four characters to choose from.",
            icon: "FaKickstarterK",
            colour: "#7e2bd7",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: true,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.romaji.name",
                answerField: "learnable.field.kana.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: 1
              }
            }
          },
          {
            id: 5,
            name: "presets.play.match.name",
            description: "You're given 3 kana per question and must match up each character to its respective rōmaji.",
            icon: "FaBezierCurve",
            colour: "#38c742",
            topic: "Hiragana & Katakana",
            data: {
              quantity: 45,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 3,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kana.name",
                answerField: "learnable.field.romaji.name",
                type: "match",
                cards: 0,
                quantity: 3,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 6,
            name: "presets.play.hardcore.name",
            description:
              "Less time. More options. No hints. 1 life. Includes all Hiragana & Katakana. Can you beat it?",
            icon: "FaFire",
            colour: "#fc3131",
            topic: "Hiragana & Katakana",
            data: {
              quantity: null,
              config: {
                hiragana: true,
                katakana: true,
                diagraphs: true,
                diacriticals: true,
                regular: true,
                onlyDiagraphs: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 1
              },
              time: {
                timed: false,
                countdown: true,
                secondsPerQuestion: 5
              },
              question: {
                questionField: "learnable.field.romaji.name",
                answerField: "learnable.field.kana.name",
                type: "choice",
                cards: 6,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 7,
            name: "presets.play.kanji.name",
            description:
              "You're shown a list of meanings and must pick the correct kanji character that represents them.",
            icon: "FaPaintBrush",
            colour: "#6857ee",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.kanji.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 8,
            name: "presets.play.meaning.name",
            description: "You're shown a kanji character and must pick all meaning that are applicable.",
            icon: "FaSchool",
            colour: "#65cd3a",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.meaning.name",
                type: "text",
                cards: 0,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 9,
            name: "presets.play.on'yomi.name",
            description:
              "You're shown a kanji character and must pick all the Jōyō on'yomi readings. These are the original Chinese readings.",
            icon: "FaStar",
            colour: "#eacd35",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.on.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 10,
            name: "presets.play.kun'yomi.name",
            description:
              "You're shown a kanji character and must pick all the Jōyō kun'yomi readings. These are the newer Japanese readings.",
            icon: "FaCircle",
            colour: "#e21717",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.kun.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 11,
            name: "presets.play.match.name",
            description: "You're shown 4 random kanji per question and must match them to their English meanings.",
            icon: "FaBezierCurve",
            colour: "#e79711",
            topic: "Jōyō Kanji",
            data: {
              quantity: 80,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 4,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.kanji.name",
                answerField: "learnable.field.meaning.name",
                type: "match",
                cards: 0,
                quantity: 4,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 12,
            name: "presets.play.random.name",
            description: "You're given a random mixture of all of the above types of questions.",
            icon: "FaRandom",
            colour: "#3cabca",
            topic: "Jōyō Kanji",
            data: {
              quantity: 50,
              config: {
                grades: [1, 2, 3, 4, 5, 6, 8],
                tags: []
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 3,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: false,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.random.name",
                answerField: "learnable.field.random.name",
                type: "random",
                cards: 4,
                quantity: 3,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 13,
            name: "presets.play.numbers.name",
            description: "Numbers one to ten plus all denominations up to one billion.",
            icon: "FaSortNumericDown",
            colour: "#fdb40e",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: true,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 14,
            name: "presets.play.counters.name",
            description:
              "Japanese has a variety of kanji used to count different types of things. E.g. for animals or flat things.",
            icon: "FaCalculator",
            colour: "#ff7730",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: true,
                age: false,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 15,
            name: "presets.play.age.name",
            description: "Some numbers change their pronunciation when describing someones ages in years.",
            icon: "FaBaby",
            colour: "#1785e2",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: true,
                exceptions: false,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 16,
            name: "presets.play.exceptions.name",
            description:
              "Some numbers don't follow the rules and have exceptional pronunciation in different contexts.",
            icon: "FaTimes",
            colour: "#a01219",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: true,
                units: false,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 17,
            name: "presets.play.units.name",
            description: "Units of measurement for area, length, volume and weight.",
            icon: "FaRuler",
            colour: "#4ed440",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 18,
            name: "presets.play.sequence.name",
            description: "Words used for counting things or sequences such as first, second, half, next etc.",
            icon: "FaSort",
            colour: "#fc3131",
            topic: "Numbers & Counting",
            data: {
              quantity: null,
              config: {
                numbers: false,
                counters: false,
                age: false,
                exceptions: false,
                units: false,
                sequence: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 19,
            name: "presets.play.colours.name",
            description: "Commonly used colours and their variants plus various miscellaneous related words.",
            icon: "FaFillDrip",
            colour: "#db6b25",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: true,
                animals: false,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 20,
            name: "presets.play.animals.name",
            description: "Animals that you mind find at home as pets or at a zoo or sanctuary while in Japan.",
            icon: "FaDog",
            colour: "#439bdc",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 21,
            name: "presets.play.directions.name",
            description: "Directional words used when describing the locations of things plus compass directions.",
            icon: "FaCompass",
            colour: "#d01b4c",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: true,
                weather: false,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 22,
            name: "presets.play.weather.name",
            description: "Commonly used words when describing the weather conditions or current climate.",
            icon: "FaCloudSunRain",
            colour: "#e3c93a",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: true,
                family: false,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 23,
            name: "presets.play.family.name",
            description: "Immediate family and relatives belonging to both your own and others' families.",
            icon: "FaChild",
            colour: "#23b820",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 24,
            name: "presets.play.body.name",
            description: "Commonly used words describing body parts and human anatomy.",
            icon: "FaHandPaper",
            colour: "#5641d0",
            topic: "Basics",
            data: {
              quantity: null,
              config: {
                colours: false,
                animals: false,
                directions: false,
                weather: false,
                family: true,
                body: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 25,
            name: "presets.play.days-of-the-week.name",
            description: "The standard seven days of the week; Monday to Friday.",
            icon: "FaCalendarDay",
            colour: "#3fb4de",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: false,
                seasons: false,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 26,
            name: "presets.play.months-of-the-year.name",
            description: "The standard twelve months of the year; January to December.",
            icon: "FaCalendarAlt",
            colour: "#ff7730",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: true,
                seasons: false,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 27,
            name: "presets.play.temporal-nouns.name",
            description: "Time-based nouns or adverbs such as 'Tomorrow' or 'The day before yesterday'.",
            icon: "FaClock",
            colour: "#e32f2f",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: true,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 28,
            name: "presets.play.seasonal.name",
            description: "The four seasons plus annual holiday events such as Christmas and Easter.",
            icon: "FaCloudSunRain",
            colour: "#e7cb38",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: true,
                nouns: false,
                phrases: false
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 29,
            name: "presets.play.common-phrases.name",
            description: "Common phrases used when talking about time, routine and events.",
            icon: "FaAlignLeft",
            colour: "#ff6038",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: false,
                months: false,
                seasons: false,
                nouns: false,
                phrases: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 30,
            name: "presets.play.everything.name",
            description: "Includes everything from the other presets.",
            icon: "FaGlobeAmericas",
            colour: "#39c461",
            topic: "Days & Months",
            data: {
              quantity: null,
              config: {
                days: true,
                months: true,
                seasons: true,
                nouns: true,
                phrases: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 31,
            name: "presets.play.japanese.name",
            description:
              "You're given some vocabulary and 4 options to choose from. You must pick the correct Japanese for it.",
            icon: "FaToriiGate",
            colour: "#a92739",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: true,
                adjectives: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.meaning.name",
                answerField: "learnable.field.japanese.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          },
          {
            id: 32,
            name: "presets.play.meaning.name",
            description:
              "You're given the Japanese for a piece of vocabulary and must enter the english meaning for it.",
            icon: "FaGrinBeam",
            colour: "#57afd9",
            topic: "Sentence Structure",
            data: {
              quantity: null,
              config: {
                adverbs: true,
                particles: false,
                expressions: false,
                verbs: true,
                nouns: true,
                adjectives: true
              }
            },
            game: {
              hints: {
                enabled: false,
                quantity: 0,
                unlimited: false
              },
              lives: {
                enabled: true,
                quantity: 5
              },
              time: {
                timed: true,
                countdown: false,
                secondsPerQuestion: 0
              },
              question: {
                questionField: "learnable.field.japanese.name",
                answerField: "learnable.field.meaning.name",
                type: "choice",
                cards: 4,
                quantity: 0,
                score: true,
                answerFilter: null
              }
            }
          }
        ]
      })
    )
  }),
  rest.get(`${api}/presets/favourites`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        play: [
          {
            id: 5,
            preset: {
              id: 1,
              name: "presets.play.relaxed.name",
              description: "No timers. No lives. No rush. You're learning and want to take your time.",
              icon: "FaGraduationCap",
              colour: "#fdb40e",
              topic: "Hiragana & Katakana",
              data: {
                quantity: null,
                config: {
                  hiragana: true,
                  katakana: true,
                  diagraphs: true,
                  diacriticals: true,
                  regular: true,
                  onlyDiagraphs: false
                }
              },
              game: {
                hints: {
                  enabled: true,
                  quantity: 0,
                  unlimited: false
                },
                lives: {
                  enabled: false,
                  quantity: 0
                },
                time: {
                  timed: false,
                  countdown: false,
                  secondsPerQuestion: 0
                },
                question: {
                  questionField: "learnable.field.kana.name",
                  answerField: "learnable.field.romaji.name",
                  type: "text",
                  cards: 0,
                  quantity: 0,
                  score: false,
                  answerFilter: null
                }
              }
            }
          },
          {
            id: 6,
            preset: {
              id: 3,
              name: "presets.play.rōmaji.name",
              description: "You're shown a single kana and must enter the rōmaji. You're timed and have 5 lives.",
              icon: "FaFont",
              colour: "#1785e2",
              topic: "Hiragana & Katakana",
              data: {
                quantity: null,
                config: {
                  hiragana: true,
                  katakana: true,
                  diagraphs: true,
                  diacriticals: true,
                  regular: true,
                  onlyDiagraphs: false
                }
              },
              game: {
                hints: {
                  enabled: true,
                  quantity: 0,
                  unlimited: false
                },
                lives: {
                  enabled: true,
                  quantity: 5
                },
                time: {
                  timed: true,
                  countdown: false,
                  secondsPerQuestion: 0
                },
                question: {
                  questionField: "learnable.field.kana.name",
                  answerField: "learnable.field.romaji.name",
                  type: "text",
                  cards: 0,
                  quantity: 0,
                  score: true,
                  answerFilter: null
                }
              }
            }
          }
        ],
        learn: [
          {
            id: 1,
            preset: {
              id: 33,
              name: "presets.learn.hiragana.name",
              description: "This syllabary is used for Japanese words. Contains 107 sounds.",
              icon: "あ",
              colour: "#fdb40e",
              topic: "Hiragana & Katakana",
              data: {
                quantity: null,
                config: {
                  hiragana: true,
                  katakana: false,
                  diagraphs: false,
                  diacriticals: false,
                  regular: true,
                  onlyDiagraphs: false
                }
              }
            }
          },
          {
            id: 2,
            preset: {
              id: 39,
              name: "presets.learn.high-school.name",
              description: "Includes the 1110 kanji taught from grades 7 to 12 in Japanese high schools.",
              icon: "FaChalkboardTeacher",
              colour: "#74d43f",
              topic: "Jōyō Kanji",
              data: {
                quantity: 50,
                config: {
                  grades: [8],
                  tags: []
                }
              }
            }
          }
        ]
      })
    )
  }),
  rest.get(`${api}/presets/custom`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        learn: [],
        play: []
      })
    )
  }),
  rest.post(`${api}/presets/custom/play/save`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post(`${api}/presets/custom/learn/save`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post(`${api}/presets/custom/learn/update`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.put(`${api}/presets/favourites/save`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.patch(`${api}/presets/favourites/update`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.delete(`${api}/presets/favourites/delete`, (req, res, ctx) => {
    return res(ctx.status(200))
  })
]
