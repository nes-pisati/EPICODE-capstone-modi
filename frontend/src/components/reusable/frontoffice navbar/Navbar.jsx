import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../assets/MODI-logo-white.png'
import Styles from './navbar.module.css'

export default function Navbar() {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-between align-items-center pt-4'>
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} alt="Logo modì white" className={Styles.logo} />
                    </div>
                    <div> menu</div>
                </Col>
            </Row>
        </Container>
    )
}
