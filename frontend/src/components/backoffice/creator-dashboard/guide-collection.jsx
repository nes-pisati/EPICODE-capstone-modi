import React, { useState, useEffect } from 'react'
import Styles from './creator-dashboard.module.css'
import GuideCard from './elements/guide-card'
import { Container, Row } from 'react-bootstrap'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

export default function GuideCollection() {

    const token = localStorage.getItem('creatorLogin')
    const decoded = jwtDecode(token)

    console.log(decoded);

    const creatorId = decoded.id

    const [guides, setGuides] = useState([])

    const URL = `http://localhost:3030/creators/${creatorId}`;

    useEffect(() => {
        const getGuides = async () => {
            try {
                const response = await axios.get(URL)
                setGuides(response.data.guides)
            } catch (error) {
                console.error(error)
            }
        };
        getGuides()
    }, [])

    console.log(guides);

    return (
        <Container className={`${Styles.guideSection} col-8 col-md-9 ps-5 pt-5 pb-5`}>
            <div>
                <h2 className={Styles.sectionTitle}>Le tue guide</h2>
            </div>
            <Container className="mt-5">
                <Row className= "gap-1 mb-5">
                    {guides.map(guide => (
                        <GuideCard
                            key={guide._id}
                            id = {guide._id}
                            img={guide.coverImg}
                            title={guide.title}
                            subtitle={guide.subtitle}
                        />
                    ))}
                </Row>
            </Container>
        </Container>
    )
}
