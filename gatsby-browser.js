/* eslint-disable react/jsx-filename-extension */
const React = require('react')
const Layout = require('./src/Layout').default

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>
}
