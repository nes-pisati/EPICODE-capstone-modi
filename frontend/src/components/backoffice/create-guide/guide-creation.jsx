import React from 'react'
import Wrapper from './components-wrapper'
import logo from '../../../assets/MODI-logo-black.png'
import Styles from '../create-guide/create-guide.module.css'
import { Col, Row, Container } from 'react-bootstrap'

export default function GuideCreation() {

    /*Logo in alto e paginazione*/

    return (
        <>
            <Container className='mt-5'>
                <img src={logo} className={Styles.logo} />
                <Wrapper />
            </Container>
        </>
    )
}
