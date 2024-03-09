import { api } from "../util"
import { http, HttpResponse } from "msw";
import { AddHighScoreEntryResponse, HighScoresResponse } from "repository/HighScoresRepository.ts";

export const handlers = [
  http.post(`${api}/high-scores/entry`, () => {
    return HttpResponse.json<AddHighScoreEntryResponse>({
      rank: 1
    })
  }),
  http.get(`${api}/high-scores/entries/1`, () => {
    return HttpResponse.json<HighScoresResponse>({
      pages: 1,
      total: 27,
      value: [
        {
          user: {
            id: 1,
            name: "TomPlum"
          },
          presetId: 1,
          score: 312,
          time: ""
        },
        {
          user: {
            id: 2,
            name: "TestB"
          },
          presetId: 1,
          score: 1631,
          time: ""
        },
        {
          user: {
            id: 3,
            name: "TestC"
          },
          presetId: 1,
          score: 759,
          time: ""
        },
        {
          user: {
            id: 4,
            name: "TestD"
          },
          presetId: 1,
          score: 3398,
          time: ""
        },
        {
          user: {
            id: 5,
            name: "TestE"
          },
          presetId: 1,
          score: 1116,
          time: ""
        },
        {
          user: {
            id: 6,
            name: "TestF"
          },
          presetId: 1,
          score: 559,
          time: ""
        },
        {
          user: {
            id: 7,
            name: "TestG"
          },
          presetId: 1,
          score: 3735,
          time: ""
        },
        {
          user: {
            id: 8,
            name: "TestH"
          },
          presetId: 1,
          score: 4187,
          time: ""
        },
        {
          user: {
            id: 9,
            name: "TestI"
          },
          presetId: 1,
          score: 4809,
          time: ""
        },
        {
          user: {
            id: 10,
            name: "TestJ"
          },
          presetId: 1,
          score: 688,
          time: ""
        },
        {
          user: {
            id: 11,
            name: "TestK"
          },
          presetId: 1,
          score: 2793,
          time: ""
        },
        {
          user: {
            id: 12,
            name: "TestL"
          },
          presetId: 1,
          score: 4923,
          time: ""
        },
        {
          user: {
            id: 13,
            name: "TestM"
          },
          presetId: 1,
          score: 1122,
          time: ""
        },
        {
          user: {
            id: 14,
            name: "TestN"
          },
          presetId: 1,
          score: 1772,
          time: ""
        },
        {
          user: {
            id: 15,
            name: "TestO"
          },
          presetId: 1,
          score: 153,
          time: ""
        },
        {
          user: {
            id: 16,
            name: "TestP"
          },
          presetId: 1,
          score: 4133,
          time: ""
        },
        {
          user: {
            id: 17,
            name: "TestQ"
          },
          presetId: 1,
          score: 2216,
          time: ""
        },
        {
          user: {
            id: 18,
            name: "TestR"
          },
          presetId: 1,
          score: 4980,
          time: ""
        },
        {
          user: {
            id: 19,
            name: "TestS"
          },
          presetId: 1,
          score: 1110,
          time: ""
        },
        {
          user: {
            id: 20,
            name: "TestT"
          },
          presetId: 1,
          score: 4264,
          time: ""
        },
        {
          user: {
            id: 21,
            name: "TestU"
          },
          presetId: 1,
          score: 3097,
          time: ""
        },
        {
          user: {
            id: 22,
            name: "TestV"
          },
          presetId: 1,
          score: 3441,
          time: ""
        },
        {
          user: {
            id: 23,
            name: "TestW"
          },
          presetId: 1,
          score: 3366,
          time: ""
        },
        {
          user: {
            id: 24,
            name: "TestX"
          },
          presetId: 1,
          score: 2414,
          time: ""
        },
        {
          user: {
            id: 25,
            name: "TestY"
          },
          presetId: 1,
          score: 1079,
          time: ""
        },
        {
          user: {
            id: 26,
            name: "TestZ"
          },
          presetId: 1,
          score: 3424,
          time: ""
        },
        {
          user: {
            id: 27,
            name: "TomPlum"
          },
          presetId: 1,
          score: 9235,
          time: ""
        }
      ]
    })
  })
]
