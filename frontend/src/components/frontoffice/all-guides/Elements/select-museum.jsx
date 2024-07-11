import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Styles from '../all-guides.module.css'
import axios from 'axios'

export default function SelectMuseum({ onSelectMuseum }) {

    const [museums, setMuseums] = useState([])

    useEffect(() => {
        const getMuseum = async () => {
            try {
                const response = await axios.get('http://localhost:3030/museum')
                setMuseums(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getMuseum()
    }, [])

    const handleChange = (e) => {
        onSelectMuseum(e.target.value)
    }

    return (
        <Col xs={11} md={11} lg={6}>
            <select
                name="museums"
                id="selectMuseum" 
                className={Styles.input}
                placeholder="Seleziona un museo"
                onChange={handleChange}>
                    <option value="">Seleziona un museo</option>
                    {museums.map(museum => (
                        <option value={museum.name}>{museum.name}</option>
                    ))}
            </select>
        </Col>
    )
}
