import { Col } from 'antd'
import * as React from 'react'
import { Skill } from '../../../utils/globalTypes'
import SkillComponent from '../Skill/Skill'

type Props = {
  className: string
  skill: Skill
  style: any
  onMount: (id: any, node: any) => void
  onUnmount: (id: any) => void
}
const SkillContainer: React.FC<Props> = ({ skill, className, onMount, onUnmount, style }) => {
  const node = React.useRef(null)
  React.useEffect(() => {
    onMount(skill.name, node.current)
    return () => onUnmount(skill.name)
  }, [skill.name, onMount, onUnmount])

  return (
    <Col style={style} ref={node} className={className} xs={24} sm={12} md={8}>
      <SkillComponent skill={skill} />
    </Col>
  )
}

export default SkillContainer
