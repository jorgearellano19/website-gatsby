import * as React from 'react'
import '../styles/less/index.less'
import { Layout, Menu } from 'antd'
import { HomeOutlined, UserOutlined, BookOutlined, TeamOutlined, FileDoneOutlined, BarsOutlined, CarryOutOutlined } from '@ant-design/icons'
import { MenuOption } from '../utils/globalTypes'
import styles from './Layout.module.scss'

const { Sider, Header, Content, Footer } = Layout

const menuItems: Array<MenuOption> = [
  {
    name: 'Home',
    icon: HomeOutlined
  },
  {
    name: 'About me',
    icon: UserOutlined
  },
  {
    name: 'Services',
    icon: UserOutlined
  },
  {
    name: 'Educational',
    icon: BookOutlined
  },
  {
    name: 'Work',
    icon: TeamOutlined
  },
  {
    name: 'Skills',
    icon: FileDoneOutlined
  },
  {
    name: 'Recomendation',
    icon: CarryOutOutlined
  },
  {
    name: 'Contact me',
    icon: BarsOutlined
  }
]

const LayoutPage: React.FC = ({ children }) => (
  <Layout className={styles.container}>
    <Sider breakpoint="lg" collapsedWidth="0">
      <div>LOGO </div>
      <Menu>{/* {menuItems.map(item => (
          <Menu.Item key={item.name} icon={item.icon} />
        ))} */}</Menu>
    </Sider>
    <Layout>
      <Header style={{ padding: 0 }}>Header component</Header>
      <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
)

export default LayoutPage
