import { Row, Col, Typography } from 'antd'
import React from 'react'
import Img from 'gatsby-image'
import { ImageSharpFixed } from '../../../utils/globalTypes'
import styles from './Info.module.scss'

const { Title, Text } = Typography

type Props = {
  name: string
  aboutMe: string
  image: ImageSharpFixed
}

const Info: React.FC<Props> = ({ name, aboutMe, image: { childImageSharp, id } }) => (
  <div>
    <Row>
      <Col className={styles.imgContainer} span={24}>
        <Img alt={id} fixed={childImageSharp.fixed} />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Title className={styles.title} level={3}>
          {name}
        </Title>
      </Col>
    </Row>
    <Row>
      <Col className={styles.centered} span={24}>
        <Text>{aboutMe}</Text>
      </Col>
    </Row>
  </div>
)

export default Info
