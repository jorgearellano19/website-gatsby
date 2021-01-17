/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'
import { ApplicationContext, languages } from '../utils/globalTypes'

const defaultValues: ApplicationContext = {
  language: languages.en,
  onChangeLanguage: (language: languages) => { }
}

export const AppContext = createContext<ApplicationContext>(defaultValues)

export const AppProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<languages>(defaultValues.language)

  const onChangeLanguage = (newLanguage: languages) => setLanguage(newLanguage)
  return (
    <AppContext.Provider
      value={{
        ...defaultValues,
        language,
        onChangeLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
