import { setupWorker } from 'msw'

import { handlers as user } from './handlers/user.handlers'
import { handlers as kanji } from './handlers/kanji.handlers'

export const worker = setupWorker(
    ...user,
    ...kanji
)