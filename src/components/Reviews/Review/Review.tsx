import * as React from 'react'
import { Typography } from 'antd'
import Img from 'gatsby-image'
import { Review } from '../../../utils/globalTypes'
import styles from './Review.module.scss'
import { AppContext } from '../../../context/Application'
import { getTranslation } from '../../../utils/language'
import { MESSAGE_PREFIX } from '../../../utils/translation/homePage/keys'

const { Title, Text, Paragraph } = Typography

type Props = {
  review: Review
}
const ReviewComponent: React.FC<Props> = ({ review }) => {
  const { language } = React.useContext(AppContext)
  const {
    name,
    position,
    company,
    img: { childImageSharp }
  } = review
  const message = getTranslation(review, language, MESSAGE_PREFIX)
  return (
    <div className={styles.container}>
      <div>
        <Img fixed={childImageSharp.fixed} />
      </div>
      <div>
        <Title level={5}>{name}</Title>
      </div>
      <div>
        <Text className={styles.subtitle}>
          {position} - {company}{' '}
        </Text>
      </div>
      <div className={styles.dialogContainer}>
        <Paragraph>{message}</Paragraph>
      </div>
    </div>
  )
}
export default ReviewComponent
