import { setupWorker } from 'msw'

import { handlers as user } from './handlers/user.handlers'
import { handlers as kanji } from './handlers/kanji.handlers'
import { handlers as presets } from './handlers/presets.handlers'
import { handlers as learn } from './handlers/learn.handlers'

export const worker = setupWorker(
    ...user,
    ...kanji,
    ...presets,
    ...learn
)