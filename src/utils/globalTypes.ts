import { ReactNode } from 'react'

export enum languages {
  es = 'Español',
  en = 'English'
}

export type MenuOption = {
  name: string
  icon: ReactNode
}

export type ApplicationContext = {
  language: languages
  onChangeLanguage: (language: languages) => void
}
