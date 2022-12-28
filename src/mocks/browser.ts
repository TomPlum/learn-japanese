import { setupWorker } from 'msw'

import { handlers as user } from './handlers/user.handlers'
import { handlers as kanji } from './handlers/kanji.handlers'
import { handlers as presets } from './handlers/presets.handlers'
import { handlers as learn } from './handlers/learn.handlers'
import { handlers as highScores } from './handlers/high-scores.handlers'
import { handlers as kana } from './handlers/kana.handlers'

export const worker = setupWorker(
    ...user,
    ...kanji,
    ...presets,
    ...learn,
    ...highScores,
    ...kana
)