import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'
import Styles from '../guide-details.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GuideHeader from './guide-header'
import GuideDescription from './guide-description';
import Artists from './guide-artists';

export default function GuideMainWrapper() {

    const { id } = useParams()
    const URL = `http://localhost:3030/guide/${id}`

    const navigate = useNavigate()

    const [guide, setGuide] = useState({
        title: '',
        subtitle: '',
        museum: { name: '' },
        creator: { firstName: '', lastName: '' },
        coverImg: '',
        description: '',
    })

    useEffect(() => {
        const getGuide = async () => {
            try {
                const response = await axios.get(URL)
                setGuide(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        getGuide()
    }, [URL])

    const viewDetails = () => {
        navigate(`/guide-paintings/${guide._id}`)
    }

    console.log(guide.paintings);
    return (
        <Container className='pb-5'>
            <GuideHeader 
                title={guide.title}
                subtitle={guide.subtitle}
                museum={guide.museum.name}
                creatorName={guide.creator.firstName}
                creatorLastName={guide.creator.lastName}
                image={guide.coverImg}
            />
            <GuideDescription 
                description={guide.description}
            />
            <Artists 
                paintingsDetails={guide.paintings}
            />
            <FrontofficeBtn text={"inizia"} onClick={viewDetails} />
        </Container>
    )
}
