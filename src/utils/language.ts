import { languages } from './globalTypes'

const LANG_SEPARATOR = '_'

export const getTranslation = (obj: any, lang: languages, prefix: string) => obj && obj[`${prefix}${LANG_SEPARATOR}${lang}`]
