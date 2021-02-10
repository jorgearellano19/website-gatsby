/* eslint-disable react/jsx-props-no-spreading */
import { Input, InputProps } from 'antd'
import * as React from 'react'
import styles from './TextField.module.scss'

const TextField: React.FC<InputProps> = props => <Input {...props} className={styles.textField} />

export default TextField
