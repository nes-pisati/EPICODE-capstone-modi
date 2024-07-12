import React from 'react'
import coverImg from '../../../../assets/Tiziano_amor_sacro_amor_profano.jpg'
import { Container, Row } from 'react-bootstrap'
import Styles from '../all-guides.module.css'

export default function MainWrapper() {
    return (
        <Container className='mt-4'>
            <Row>
                <div className={`${Styles.relative} d-flex align-items-end`}>
                    <img src={coverImg} className={`${Styles.coverImg} px-1`} />
                    <div className={`${Styles.absolute} d-flex flex-column align-items-center justify-content-center`}>
                        <h1 className={Styles.headline}>Benvenut* tra le nostre guide</h1>
                    </div>
                </div>
            </Row>
            <Row>
                <p className={`${Styles.p} mt-5`}>
                   Tutto ciò che devi fare è scegliere il luogo e cercare il tema che vorresti approfondire.
                    Seleziona la guida, clicca su inizia e lasciati trasportare in un percorso che, siamo sicuri, ti emozionerà.
                </p>
            </Row>
        </Container>
    )
}
