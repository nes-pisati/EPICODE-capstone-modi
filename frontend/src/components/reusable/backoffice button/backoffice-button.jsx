import React from 'react'
import { Button } from 'react-bootstrap'
import Styles from '../backoffice button/backoffice-button.module.css'

export default function BackofficeBtn({text, onClick, type}) {
  return (
    <Button onClick={onClick} className={Styles.button} type={type}>
        {text}
    </Button>
  )
}
