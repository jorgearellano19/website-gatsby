/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
const React = require('react')
const Layout = require('./src/Layout').default
const { AppProvider } = require('./src/context/Application')

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <AppProvider>
      <Layout {...props}>{element}</Layout>
    </AppProvider>
  )
}
