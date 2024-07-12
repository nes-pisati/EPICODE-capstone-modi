import React from 'react'
import Styles from '../guide-paintings.module.css'
import { Container } from 'react-bootstrap'

export default function Header({title, description}) {

    return (
        <Container className='mt-5'>
            <h3 className={Styles.title}>{title}</h3>
            <p>{description}</p>
            <p className={Styles.istruction}>Quando arrivi davanti al quadro clicca sull'immagine corrispondente nella lista che trovi qui sotto per leggere o ascoltare la storia del quadro.</p>
        </Container>
    )
}
