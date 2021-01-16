import { HomeOutlined, UserOutlined, BookOutlined, TeamOutlined, FileDoneOutlined, CarryOutOutlined, BarsOutlined } from '@ant-design/icons'
import { Menu, Layout } from 'antd'
import * as React from 'react'
import { MenuOption } from '../../../utils/globalTypes'
import classes from './Sidebar.module.scss'

const { Sider } = Layout

const menuItems: Array<MenuOption> = [
  {
    name: 'Home',
    icon: <HomeOutlined />
  },
  {
    name: 'About me',
    icon: <UserOutlined />
  },
  {
    name: 'Services',
    icon: <UserOutlined />
  },
  {
    name: 'Educational',
    icon: <BookOutlined />
  },
  {
    name: 'Work',
    icon: <TeamOutlined />
  },
  {
    name: 'Skills',
    icon: <FileDoneOutlined />
  },
  {
    name: 'Recomendation',
    icon: <CarryOutOutlined />
  },
  {
    name: 'Contact me',
    icon: <BarsOutlined />
  }
]

const Sidebar: React.FC<{}> = () => (
  <Sider theme="dark" className={classes.sidebar} width={100} breakpoint="lg" collapsedWidth="0">
    <div className={classes.container}>
      <div> LOGO </div>
      <Menu>
        {menuItems.map(item => (
          <Menu.Item className={classes.menuItem} icon={item.icon} key={item.name} />
        ))}
      </Menu>
      <div className={classes.rotate}>Jorge Arellano. © 2021.</div>
    </div>
  </Sider>
)

export default Sidebar
