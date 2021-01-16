import * as React from 'react'
import '../styles/less/index.less'
import { Layout } from 'antd'
import styles from './Layout.module.scss'
import { Sidebar } from '../components/Layout'

const { Header, Content, Footer } = Layout

const LayoutPage: React.FC = ({ children }) => (
  <Layout className={styles.container}>
    <Sidebar />
    <Layout>
      <Header style={{ padding: 0 }}>Header component</Header>
      <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
)

export default LayoutPage
