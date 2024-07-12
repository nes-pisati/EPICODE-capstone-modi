import React from 'react'
import Wrapper from './components-wrapper'
import logo from '../../../assets/MODI-logo-black.png'
import Styles from '../create-guide/create-guide.module.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function GuideCreation() {

    const navigate = useNavigate()

    const handleBackDashboard = () => {
        navigate('/dashboard')
    }

    return (
        <>
            <Container className='mt-5'>
                <img src={logo} className={Styles.logo} onClick={handleBackDashboard}/>
                <Wrapper />
            </Container>
        </>
    )
}
