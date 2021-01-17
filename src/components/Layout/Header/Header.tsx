import React, { useContext } from 'react'
import { Layout, Switch } from 'antd'
import { AppContext } from '../../../context/Application'
import { languages } from '../../../utils/globalTypes'
import classes from './Header.module.scss'

const { Header } = Layout
const HeaderComponent: React.FC<{}> = () => {
  const { onChangeLanguage } = useContext(AppContext)

  const changeLanguage = (checked: boolean) => {
    return checked ? onChangeLanguage(languages.es) : onChangeLanguage(languages.en)
  }
  return (
    <Header className={classes.container}>
      <div>Change Language: </div>
      <div>
        <Switch onChange={changeLanguage} checkedChildren={languages.es} unCheckedChildren={languages.en} />
      </div>
    </Header>
  )
}

export default HeaderComponent
