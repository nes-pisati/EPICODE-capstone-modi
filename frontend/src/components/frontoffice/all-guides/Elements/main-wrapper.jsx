import React from 'react'
import coverImg from '../../../../assets/Tiziano_amor_sacro_amor_profano.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import Styles from '../all-guides.module.css'

export default function MainWrapper() {
    return (
        <Container className='mt-4'>
            <Row>
                <div className={`${Styles.relative} d-flex align-items-end`}>
                    <img src={coverImg} className={`${Styles.coverImg} px-1`} />
                    <div className={`${Styles.absolute} d-flex flex-column align-items-center justify-content-center`}>
                        <h1 className={Styles.headline}>Lorem ipsum sit amet</h1>
                    </div>
                </div>
            </Row>
            <Row>
                <p className={`${Styles.p} mt-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada a mauris at blandit. Pellentesque tristique justo diam, et laoreet leo placerat quis. Pellentesque nisi ligula, posuere id tincidunt eget, consectetur tempus diam. Ut eget dolor nec quam aliquam vulputate. Sed nulla nibh, elementum ut rhoncus in, tempor nec ipsum.
                    Etiam efficitur ex non ipsum tempus sollicitudin. Donec enim ex, mattis convallis mattis ac, sodales venenatis arcu. Donec semper
                </p>
            </Row>
        </Container>
    )
}
