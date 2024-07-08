import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Styles from '../../guide-editing.module.css'
import axios from 'axios';
import { Form, Container, Row, Col } from 'react-bootstrap';
import BackofficeInput from '../../../../reusable/backoffice input/backoffice-input'
import BackofficeBtn from '../../../../reusable/backoffice button/backoffice-button'


export default function PaintingsList() {

    const { id } = useParams()
    const URL = `http://localhost:3030/guide/${id}`

    const [paintings, setPaintings] = useState([])
    const [paintingId, setPaintingId] = useState('')
    const [component, setComponent] = useState('PaintingsList')
    const [painting, setPainting] = useState({})
    const [formData, setFormData] = useState({})

    /*GET DELLA LISTA DEI QUADRI PRESENTI NELLA GUIDA*/
    useEffect(() => {
        const getPaintings = async () => {
            try {
                const response = await axios.get(URL)
                setPaintings(response.data.paintings)
            } catch (error) {
                console.error(error)
            }
        };
        getPaintings()
    }, [])

    /*FUNZIONE CHE AL CLICK SETTA L'ID NELLO STATO E CAMBIA COMPONENTE RENDERIZZATO*/
    const handleClick = (id) => {
        setPaintingId(id)
        setComponent('SinglePaintEditForm')
    }

    useEffect(() => {
        const getSinglePainting = async () => {
            if (paintingId) {
                try {
                    const response = await axios.get(`http://localhost:3030/painting/${paintingId}`)
                    setPainting(response.data)
                    setFormData(response.data)
                } catch (error) {
                    console.error(error)
                }
            }
        };
        getSinglePainting()
    }, [paintingId])

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:3030/painting/${paintingId}`, formData)
            setComponent('PaintingsList')
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.log('Server responded with status code:', error.response.status);
                console.log('Response data:', error.response.data);
            } else if (error.request) {
                console.log('No response received:', error.request);
            } else {
                console.log('Error creating request:', error.message);
            }
        }
    }

    const renderComponent = () => {
        if (component === 'PaintingsList') {
            return (
                <div className={`${Styles.wrapper} mb-3`}>
                    <Container>
                        <Row>
                            <h5 className='mt-2 ms-2'>Seleziona un quadro per modificarlo</h5>
                        </Row>
                        <Row className={`${Styles.card} px-2 pt-1 d-flex g-1`}>
                            {paintings.map(painting => (
                                <Col sm={12} md={3} lg={4} key={painting.id}>
                                    <img src={painting.paintingImg} className={Styles.paintingImg} />
                                    <button onClick={() => handleClick(painting._id)}>Edit</button>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            )
        } else if (component === 'SinglePaintEditForm') {
            return (
                <div className={Styles.wrapper}>
                    <Form className='px-5 mt-5' onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={12}>
                                <BackofficeInput
                                    labelText={"Titolo"}
                                    onChange={onChangeInput}
                                    name={"title"}
                                    type={"text"}
                                    placeholder={formData.title || ''}
                                />
                                <BackofficeInput
                                    labelText={"Artista"}
                                    onChange={onChangeInput}
                                    name={"artist"}
                                    type={"text"}
                                    placeholder={formData.artist || ''}
                                />
                                <BackofficeInput
                                    labelText={"Data"}
                                    onChange={onChangeInput}
                                    name={"date"}
                                    type={"text"}
                                    placeholder={formData.date || ''}
                                />
                                <BackofficeInput
                                    labelText={"Descrizione"}
                                    onChange={onChangeInput}
                                    name={"description"}
                                    type={"text"}
                                    placeholder={formData.description || ''}
                                />
                            </Col>
                        </Row>
                        <Row className='mt-5 d-flex justify-content-between'>
                            <BackofficeBtn text={'Salva'} type={'submit'} />
                        </Row>
                    </Form>
                </div>
            )
        }
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}
