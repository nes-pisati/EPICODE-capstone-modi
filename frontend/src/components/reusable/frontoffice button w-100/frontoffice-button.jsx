import React from 'react'
import { Button } from 'react-bootstrap'
import Styles from '../frontoffice button w-100/frontoffice-button-w100.module.css'

export default function FrontofficeBtnWidth({text, onClick, type}) {
  return (
    <Button onClick={onClick} className={Styles.button} type={type}>
        {text}
    </Button>
  )
}
