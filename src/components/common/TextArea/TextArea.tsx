/* eslint-disable react/jsx-props-no-spreading */
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import * as React from 'react'
import styles from './TextArea.module.scss'

const { TextArea } = Input

const Textarea: React.FC<TextAreaProps> = props => <TextArea className={styles.textArea} {...props} />

export default Textarea
