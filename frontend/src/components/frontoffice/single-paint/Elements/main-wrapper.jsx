import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'
import Styles from '../single-paint.module.css'
import axios from 'axios'

export default function MainWrapper() {

    const URL = 'http://localhost:3030/painting/6687ddd6a2868de0629a984b'
    const SPEAK_URL = 'http://localhost:3030/speak/6687ddd6a2868de0629a984b'
    const [painting, setPainting] = useState({})

    const audioRef = useRef(null)

    useEffect(() => {
        const getPainting = async () => {
            try {
                const response = await axios.get(URL)
                setPainting(response.data)
            } catch (error) {
                console.error(error)
            }
        }; getPainting()
    }, [])

    const handlePlayClick = () => {
        if (audioRef.current) {
            audioRef.current.src = SPEAK_URL;
            audioRef.current.play()
        }
    }

    return (
        <Container className='mt-5'>
            <Row className='d-flex align-items-center'>
                <Col xs={3} md={8}>
                    <img src={painting.paintingImg} className={Styles.image} />
                </Col>
                <Col xs={4} className='ms-5 ms-sm-0 mt-5 align-items-center'>
                    <h4 className={Styles.title}>{painting.title}</h4>
                    <p className={Styles.artist}>{painting.artist}</p>
                    <p>{painting.date}</p>
                    <i class="bi bi-alarm"></i>
                    <audio src={SPEAK_URL} controls className={`${Styles.audio} mb-3`} onPlay={console.log('play')}></audio>
                    <FrontofficeBtn text={"fine"} />
                </Col>
            </Row>
            <Row className={`${Styles.description} mt-5 pb-5`}>
                <p>{painting.description}</p>
            </Row>
        </Container>
    )
}
