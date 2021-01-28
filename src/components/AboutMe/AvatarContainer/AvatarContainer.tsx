import * as React from 'react'
import Img from 'gatsby-image'
import { ImageSharpFixed } from '../../../utils/globalTypes'
import styles from './AvatarContainer.module.scss'

type Props = {
  image: ImageSharpFixed
}

const AvatarContainer: React.FC<Props> = ({ image: { childImageSharp, id } }) => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Img alt={id} fixed={childImageSharp.fixed} />
    </div>
  </div>
)

export default AvatarContainer
