/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { Row, Select, Typography } from 'antd'
import { useTransition, animated } from 'react-spring'
import styles from './Skills.module.scss'
import useResizeWidth from '../../hooks/useResizeWidth'
import { Skill, skillType } from '../../utils/globalTypes'
import layoutRect from '../../utils/layoutRect'
import SkillContainer from './SkillContainer'
import List from './List'

const { Option } = Select
const { Title } = Typography

type Props = {
  skills: Skill[]
}

const Skills: React.FC<Props> = ({ skills }) => {
  const { isMobile } = useResizeWidth()
  const skillTypes = Object.keys(skillType)
  const [items, setItems] = React.useState(skills)

  const onChange = (value: string) => {
    if (value === 'everything') return setItems(skills)
    const filtered = skills.filter(skill => skill.type === value)
    console.log(filtered)
    return setItems(filtered)
  }

  const SelectComponent = isMobile ? (
    <Select defaultValue="everything" onChange={onChange} style={{ width: '100%', color: 'black' }} className={styles.select}>
      <Option className={styles.option} value="everything">
        Everything
      </Option>
      {skillTypes.map(type => (
        <Option key={type} className={styles.option} value={type}>
          {type}
        </Option>
      ))}
    </Select>
  ) : (
      <div>Links</div>
    )

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
