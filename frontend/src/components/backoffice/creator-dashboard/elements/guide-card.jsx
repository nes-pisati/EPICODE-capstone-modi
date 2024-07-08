import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../creator-dashboard.module.css'

export default function GuideCard({ id, img, title, subtitle }) {

    const navigate = useNavigate()

    const goEdit = () => {
        navigate(`/edit-guide/${id}`)
    }

    return (
        <div className={`${Styles.card} col-lg-3 col-md-4 col-6 p-0 d-flex flex-column justify-content-center align-items-center`}>
            <img src={img} alt='immagine card' className={Styles.cardImage} />
            <div className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-center text-center`}>
                <h5 className={Styles.cardTitle}>{title}</h5>
                <p className={Styles.cardDescription}>{subtitle}</p>
                <div className='d-flex'>
                    <button onClick={goEdit}>view</button>
                </div>
            </div>
        </div>
    )
}
