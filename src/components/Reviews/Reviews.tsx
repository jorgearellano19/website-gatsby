import * as React from 'react'
import { useTransition, animated } from 'react-spring'
import { Typography } from 'antd'
import styles from './Reviews.module.scss'
import ReviewComponent from './Review'
import { Review } from '../../utils/globalTypes'

const { Title } = Typography
type Props = {
  reviews: Review[]
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const [index, set] = React.useState(0)
  const onChange = () => set(state => (state + 1) % reviews.length)
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      onChange()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Title level={1}>Opinions</Title>
      </div>
      <div className={styles.reviewsContainer}>
        {transitions.map(({ item, key, props }) => {
          const review = reviews[item]
          return (
            <animated.div key={key} style={{ ...props }}>
              <ReviewComponent review={review} />
            </animated.div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
