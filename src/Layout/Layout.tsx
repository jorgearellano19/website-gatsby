import * as React from 'react'
import '../styles/less/index.less'
import { Layout, Menu } from 'antd'
import styles from './Layout.module.scss'
import { Sidebar, Header } from '../components/Layout'

const { Content, Footer } = Layout

const LayoutPage: React.FC = ({ children }) => (
  // <Layout className={styles.container}>
  //   {/* <Sidebar /> */}
  //   {/* <Header /> */}
  //   {/* <Content className={styles.content}>{children}</Content> */}
  // </Layout>
  <div />
)

export default LayoutPage
