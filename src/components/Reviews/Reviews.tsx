import * as React from 'react'
import { useTransition, animated } from 'react-spring'
import styles from './Reviews.module.scss'
import Review from './Review'

const mockArray = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      {' '}
      <Review />{' '}
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Review />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Review />
    </animated.div>
  )
]

const Reviews: React.FC<{}> = () => {
  const [index, set] = React.useState(0)
  const onChange = () => set(state => (state + 1) % 3)
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
        <h1>Reviews</h1>
      </div>
      <div className={styles.reviewsContainer}>
        {transitions.map(({ item, key, props }) => {
          const ReviewItem = mockArray[item]
          return <ReviewItem style={props} key={key} />
        })}
      </div>
    </div>
  )
}

export default Reviews
