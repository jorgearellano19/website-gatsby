import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import { SocialMedia, SocialMediaTypes } from '../../../utils/globalTypes'
import styles from './SocialMedia.module.scss'

const getSocialIcon = (link: SocialMediaTypes) => {
  switch (link) {
    case SocialMediaTypes.linkedIn:
      return <LinkedinOutlined className={styles.icon} />
    case SocialMediaTypes.github:
      return <GithubOutlined className={styles.icon} />
    case SocialMediaTypes.twitter:
      return <TwitterOutlined className={styles.icon} />
    default:
      return null
  }
}

type Props = {
  socialMediaArray: SocialMedia[]
}

const SocialMediaComponent: React.FC<Props> = ({ socialMediaArray }) => (
  <Row className={styles.container} justify="center">
    {socialMediaArray.map(socialInfo => (
      <Col key={socialInfo.link}>
        <a rel="noreferrer" target="_blank" href={socialInfo.link}>
          {getSocialIcon(socialInfo.type)}
        </a>
      </Col>
    ))}
  </Row>
)

export default SocialMediaComponent
