/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { Space, Timeline } from 'antd'
import * as React from 'react'
import { AppContext } from '../../context/Application'
import { EducationalExperience, languages, timelineType, WorkExperience } from '../../utils/globalTypes'
import { getTranslation } from '../../utils/language'
import { CARREER_PREFIX, SHORT_DESCRIPTION_PREFIX } from '../../utils/translation/homePage/keys'
import TimelineCustomItem from '../common/TimelineCustomItem/TimelineCustomItem'
import styles from './Experience.module.scss'

type Props = {
  educational: EducationalExperience
  works: WorkExperience[]
}

const Experience: React.FC<Props> = ({ educational, works }) => {
  const { language } = React.useContext(AppContext)
  const descriptionEducational = getTranslation(educational, language, SHORT_DESCRIPTION_PREFIX)
  const carrerEducationalName = getTranslation(educational, language, CARREER_PREFIX)
  return (
    <section>
      <div className={styles.container}>
        <Space className={styles.spaceContainer} direction="vertical" size={30}>
          <div>
            <h1>School Degree</h1>
          </div>
          <div className={styles.educationalContainer}>
            <Timeline>
              <TimelineCustomItem
                until={educational.endDate}
                since={educational.startDate}
                title={carrerEducationalName}
                description={descriptionEducational}
                type={timelineType.educational}
                isPresent={false}
              />
            </Timeline>
          </div>
        </Space>
        <Space className={styles.spaceContainerWork} direction="vertical" size={30}>
          <div>
            <h1>Work Experience </h1>
          </div>
          <div className={styles.educationalContainer}>
            <Timeline>
              {works.map(work => {
                const description = getTranslation(work, language, SHORT_DESCRIPTION_PREFIX)
                return (
                  <TimelineCustomItem
                    until={work.endDate}
                    since={work.startDate}
                    title={work.company}
                    description={description}
                    type={timelineType.work}
                    isPresent={work.isActualWork}
                  />
                )
              })}
            </Timeline>
          </div>
        </Space>
      </div>
    </section>
  )
}

export default Experience
