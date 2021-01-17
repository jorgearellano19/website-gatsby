import * as React from 'react'
import { AppContext } from '../context/Application'

const IndexPage = () => {
  const { language } = React.useContext(AppContext)
  return <div>This is a page {language}</div>
}

export default IndexPage
