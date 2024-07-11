import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../assets/MODI-logo-white.png'
import Styles from './navbar.module.css'
import { List } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar menu/sidebar'

export default function Navbar() {

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleBackHomepage = () => {
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-between align-items-center pt-4'>
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} alt="Logo modì white" className={Styles.logo} onClick={handleBackHomepage}/>
                    </div>
                    <List size={48} onClick={toggleSidebar}/>
                </Col>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            </Row>
        </Container>
    )
}
