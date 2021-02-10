import * as React from 'react'
import '../styles/less/index.less'
import { Layout, Menu } from 'antd'
import styles from './Layout.module.scss'
import { Sidebar, Header } from '../components/Layout'
import useResizeWidth from '../hooks/useResizeWidth'

const { Content, Footer } = Layout

const LayoutPage: React.FC = ({ children }) => {
  const [collapsed, setCollapse] = React.useState(false)
  const onCollapse = (newCollapse: boolean) => {
    console.log(newCollapse)
    setCollapse(newCollapse)
  }
  return (
    <Layout hasSider className={styles.container}>
      <Sidebar collapsed={collapsed} onCollapse={onCollapse} />
      <Layout>
        <Header />
        <Content style={{ ...(!collapsed && { transform: 'translateX(110px)', marginRight: 110 }) }} className={styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
