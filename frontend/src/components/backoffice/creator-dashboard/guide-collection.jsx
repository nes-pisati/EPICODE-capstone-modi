import React from 'react'
import Styles from './creator-dashboard.module.css'
import GuideCard from './elements/guide-card'
import { Container, Row } from 'react-bootstrap'
import CreateButton from './elements/guide-create-button'

export default function GuideCollection() {

    /*RICHIESTE HTTP
    get sulla rotta guide con controllo sull'ID del creator
    */

    return (
        <Container className={`${Styles.guideSection} col-10 col-md-9 ps-5 pt-5 pb-5`}>
            <h2 className={Styles.sectionTitle}>Le tue guide</h2>
            <Container className='mt-5'>
                <Row className='gap-1 mb-5'>
                    <GuideCard />
                    <GuideCard />
                    <GuideCard />
                </Row>
                <CreateButton />
            </Container>
        </Container>
    )
}
