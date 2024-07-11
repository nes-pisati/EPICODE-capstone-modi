import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'
import Styles from '../single-paint.module.css'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';


export default function MainWrapper() {

    const { id } = useParams()
    const navigate = useNavigate()

    const URL = `http://localhost:3030/painting/${id}`
    const SPEAK_URL = `http://localhost:3030/speak/${id}`

    const [painting, setPainting] = useState({})
    const [isIntroduction, setisIntroduction] = useState(false)

    useEffect(() => {
        const getPainting = async () => {
            try {
                const response = await axios.get(URL)
                setPainting(response.data)
                if (response.data.title === "Introduzione") {
                    setisIntroduction(true)
                }
            } catch (error) {
                console.error(error)
            }
        }; getPainting()
    }, [])

    console.log(painting);

    const handleGoBack = () => {
        navigate(`/guide-paintings/${painting.guide}`)
    }

    if (!painting) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
    }


    return (
        <Container className='mt-5'>
            <Row className='d-flex align-items-center'>
                <Col xs={12} md={6}>
                    <img src={painting.paintingImg} className={Styles.image} />
                </Col>
                <Col xs={12} md={5} className='ms-2 mt-5 d-flex flex-column'>
                    <h4 className={Styles.title}>{painting.title}</h4>
                    {isIntroduction ? null : <p className={Styles.artist}>{painting.artist}</p>}
                    {isIntroduction ? null : <p>{painting.date}</p>}
                    <audio src={SPEAK_URL} controls className={`${Styles.audio} mb-3`} onPlay={console.log('play')}></audio>
                    <FrontofficeBtn text={"fine"} onClick={handleGoBack} />
                </Col>
            </Row>
            <Row className={`${Styles.description} mt-5 pb-5`}>
                <p>{painting.description}</p>
            </Row>
        </Container>
    )
}
