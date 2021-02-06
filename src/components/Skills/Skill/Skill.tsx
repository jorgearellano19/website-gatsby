import { Card, Typography } from 'antd'
import * as React from 'react'
import Img from 'gatsby-image'
import styles from './Skill.module.scss'
import { Skill } from '../../../utils/globalTypes'

const { Title } = Typography
type Props = {
  skill: Skill
}
const SkillComponent: React.FC<Props> = ({
  skill: {
    image: { childImageSharp },
    name
  }
}) => (
  <Card bodyStyle={{ height: '100%', width: '100%' }} className={styles.container}>
    <div className={styles.titleContainer}>
      <Title level={5}>{name}</Title>
    </div>
    <div className={styles.imgWrapper}>
      <Img fluid={childImageSharp.fluid} />
    </div>
  </Card>
)

export default SkillComponent
