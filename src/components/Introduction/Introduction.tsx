import { Button, Col, Row } from 'antd'
import React from 'react'
import Info from './Info'
import classes from './Introduction.module.scss'
import SocialMedia from './SocialMedia'

const Introduction: React.FC<{}> = () => (
  <section className={classes.container}>
    <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className={classes.home}>
      <Info />
      <SocialMedia />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} color="primary">
          Hire me!
        </Button>
      </div>
    </div>
  </section>
)

export default Introduction
