import { Row, Col, Typography } from 'antd'
import * as React from 'react'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './NumberAnimated.module.scss'

const { Title } = Typography

type Props = {
  icon: React.ReactNode
  number: number
  text: string
}
const NumberAnimated: React.FC<Props> = ({ icon, number, text }) => {
  const [numberAnimated, setNumber] = React.useState(0)
  const spring = useSpring({ config: { duration: 1500 }, from: { val: 0 }, to: { val: numberAnimated } }) as any
  const onChange = (isVisible: boolean) => {
    setNumber(isVisible ? number : 0)
  }
  return (
    <Row justify="center" className={styles.container}>
      <Col>{icon}</Col>
      <Col className={styles.titleContainer}>
        <VisibilitySensor onChange={onChange}>
          <Title level={3}>
            <animated.div>{spring.val.interpolate((val: number) => Math.floor(val))}</animated.div>
          </Title>
        </VisibilitySensor>
        <div>
          <Typography>{text}</Typography>
        </div>
      </Col>
    </Row>
  )
}

export default NumberAnimated
