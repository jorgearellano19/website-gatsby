import { Row } from 'antd'
import { hideText } from 'polished'
import * as React from 'react'
import { animated, AnimatedValue, useTransition } from 'react-spring'
import { Skill } from '../../../utils/globalTypes'
import layoutRect from '../../../utils/layoutRect'
import SkillContainer from '../SkillContainer'
import styles from '../Skills.module.scss'

type Props = {
  skills: Skill[]
}

const AnimatedItem = animated(SkillContainer)

const List: React.FC<Props> = ({ skills }) => {
  const [layouts, setLayouts] = React.useState({}) as any
  const handleItemMounted = React.useCallback((id, node) => {
    const rect = layoutRect(node)
    setLayouts((prev: any) => ({ ...prev, [id]: rect }))
  }, [])
  const handleItemUnmounted = React.useCallback(id => { }, [])
  let currentHeight = 0
  const transitions = useTransition(
    skills.map(skill => {
      const layout = layouts[skill.name]
      const style = {
        opacity: 1,
        display: 'block'
      }
      if (layout) {
        currentHeight += layout.height
      }
      return { ...skill, ...style }
    }),
    (item: { name: unknown }) => item.name,
    {
      from: ({ opacity: 0, display: 'none' } as unknown) as AnimatedValue<{ y: number }>,
      enter: ({ opacity: 1 } as unknown) as AnimatedValue<{ y: number }>,
      leave: ({ opacity: 0, display: 'none' } as unknown) as AnimatedValue<{ y: number }>,
      update: ({ opacity, display }) => ({ opacity, display }),
      trail: 100
    }
  )
  return (
    <Row style={{ position: 'relative' }} className={styles.list}>
      {transitions.map(({ item, props, key }) => (
        <AnimatedItem
          key={key}
          style={{
            display: props.display,
            opacity: props.opacity,
            // transform: `translate3d(-50%,0,0)`,
            position: 'sticky',
            zIndex: skills.length - 1,
            // width: '100%',
            ...props
          }}
          className={styles.skillContainer}
          skill={item}
          onMount={handleItemMounted}
          onUnmount={handleItemUnmounted}
        />
      ))}
    </Row>
  )
}

export default List
