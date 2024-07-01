import React from 'react'
import Styles from '../creator-dashboard.module.css'

export default function GuideCard() {
    return (
        <div className={`${Styles.card} col-lg-3 col-md-4 col-6 p-0 d-flex flex-column justify-content-center align-items-center`}>
            <img src='https://picsum.photos/600/600' alt='immagine card' className={Styles.cardImage} />
            <div className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-center text-center`}>
                <h5 className={Styles.cardTitle}>Card title</h5>
                <p className={Styles.cardDescription}>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}
