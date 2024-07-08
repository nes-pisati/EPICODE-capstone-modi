import React from 'react'
import { Button } from 'react-bootstrap'
import Styles from '../frontoffice button/frontoffice-button.module.css'

export default function FrontofficeBtn({text, onClick, type}) {
  return (
    <Button onClick={onClick} className={Styles.button} type={type}>
        {text}
    </Button>
  )
}
