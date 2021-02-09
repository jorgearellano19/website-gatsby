/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { Button, Select, Typography } from 'antd'
import styles from './Skills.module.scss'
import useResizeWidth from '../../hooks/useResizeWidth'
import { Skill, skillType } from '../../utils/globalTypes'
import List from './List'

const { Option } = Select
const { Title, Text } = Typography

type Props = {
  skills: Skill[]
}

const Skills: React.FC<Props> = ({ skills }) => {
  const { isMobile } = useResizeWidth()
  const skillTypes = ['everything', ...Object.keys(skillType)]
  const [items, setItems] = React.useState(skills)
  const [value, setValue] = React.useState('everything')

  const onChange = (newValue: string) => {
    setValue(() => {
      if (newValue === 'everything') {
        setItems(skills)
      } else {
        const filtered = skills.filter(skill => skill.type === newValue)
        setItems(filtered)
      }
      return newValue
    })
  }

  const setLinkColor = (skill: string) => {
    return skill === value ? '#FF4C60' : '#FFF'
  }

  const SelectComponent = isMobile ? (
    <Select defaultValue="everything" onChange={onChange} style={{ width: '100%', color: 'black' }} className={styles.select}>
      {skillTypes.map(type => (
        <Option key={type} className={styles.option} value={type}>
          {type}
        </Option>
      ))}
    </Select>
  ) : (
      <div>
        {skillTypes.map(skill => (
          <Button type="text" onClick={() => onChange(skill)} style={{ color: setLinkColor(skill) }} className={styles.skillFilter}>
            {skill}
          </Button>
        ))}
      </div>
    )

  console.log(items, value)
  return (
    <section>
      <div className={styles.container}>
        <div>
          <Title level={1}>Skills</Title>
        </div>
        {SelectComponent}
        <List skills={items} />
      </div>
    </section>
  )
}

export default Skills
