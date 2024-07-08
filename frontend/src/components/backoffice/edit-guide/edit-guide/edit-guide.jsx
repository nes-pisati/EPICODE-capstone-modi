import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Styles from '../guide-editing.module.css'
import { Col, Row, Form } from 'react-bootstrap'
import BackofficeInput from '../../../reusable/backoffice input/backoffice-input'
import BackofficeBtn from '../../../reusable/backoffice button/backoffice-button'
import axios from 'axios'

export default function EditGuide() {

    const { id } = useParams()
    const URL = `http://localhost:3030/guide/${id}`

    const [guide, setGuide] = useState({})
    const [formData, setFormData] = useState({})

    useEffect(() => {
        const getGuide = async () => {
            try {
                const response = await axios.get(URL)
                setGuide(response.data)
                setFormData(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        getGuide()
    }, [])

    const onChangeInput = (e) => {
        console.log(formData);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(URL, formData)
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

    return (
        <div className={`${Styles.guideWrapper} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${Styles.cover} mt-2`}>
                <img src={guide.coverImg} className={Styles.coverImg} alt='immagine copertina guida' />
            </div>
            <Form className='px-5' onSubmit={handleSubmit}>
                <Row className='mb-5 mt-4'>
                    <Col sm={12} className='mb-4'>
                        <BackofficeInput
                            labelText={'Modifica il titolo'}
                            onChange={onChangeInput}
                            name={'title'}
                            type={'text'}
                            placeholder={formData.title || ''}
                        />
                        <BackofficeInput
                            labelText={'Modifica il sottotitolo'}
                            onChange={onChangeInput}
                            name={'subtitle'}
                            type={'text'}
                            placeholder={formData.subtitle || ''}
                        />
                        <BackofficeInput
                            labelText={'Modifica la descrizione'}
                            onChange={onChangeInput}
                            name={'description'}
                            type={'text'}
                            placeholder={formData.description || ''}
                        />
                    </Col>
                    <BackofficeBtn text={'Salva'} type={'submit'} />
                </Row>
            </Form>
        </div>
    )
}
