import React from 'react'
import Styles from '../guide-details.module.css'
import {Row, Col} from 'react-bootstrap'

export default function GuideDescription({description}) {
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12}>
                    <p className={Styles.description}>{description}</p>
                </Col>
            </Row>
        </>
    )
}
