import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../creator-dashboard.module.css'
import { Brush, Trash } from 'react-bootstrap-icons'
import axios from 'axios'
import BackofficeModal from '../../../reusable/modale/modal'
import { Col } from 'react-bootstrap'

export default function GuideCard({ id, img, title, subtitle, creator, museum }) {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("")
    const [isNotToShow, setisNotToShow] = useState(false)

    const handleShow = () => {
        setShowModal(true)
        setModalMessage("Sei sicuro di voler eliminare questa guida?")
        setisNotToShow(false)
    }
    const handleClose = () => setShowModal(false)

    const goEdit = () => {
        navigate(`/edit-guide/${id}`)
    }

    const handleDelete = async () => {
        try {
            const deleteResponse = await axios.delete(`http://localhost:3030/guide/${id}/${creator}/${museum}`)
            if (deleteResponse) {
                console.log("Guida rimossa correttamente!")
                setModalMessage("Guida rimossa correttamente!")
                setisNotToShow(true)
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Col xs={10} md={3} className='p-0'>
            <div className={`${Styles.card} p-0 d-flex flex-column justify-content-center align-items-center`}>
                <img src={img} alt='immagine card' className={Styles.cardImage} />
                <div className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-center text-center`}>
                    <h5 className={Styles.cardTitle}>{title}</h5>
                    <p className={Styles.cardDescription}>{subtitle}</p>
                    <div className='d-flex gap-2 justify-self-end'>
                        <button onClick={goEdit} className={Styles.cardBtn}>
                            <Brush />
                        </button>
                        <button className={Styles.cardBtn} onClick={handleShow}>
                            <Trash />
                        </button>
                    </div>
                </div>
                {showModal && (
                    <BackofficeModal
                        body={modalMessage}
                        closeModal={handleClose}
                        secondButtonText={"Cancella la guida!"}
                        doAction={isNotToShow ? null : handleDelete}
                        isNotToShow={isNotToShow}
                    />
                )}
            </div>
        </Col>
    )
}
