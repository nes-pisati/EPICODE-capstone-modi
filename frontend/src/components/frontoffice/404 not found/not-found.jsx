import React from 'react'
import Styles from './not-found.module.css'
import backgroundImage from '../../../assets/labsinthe.jpg'
import FrontofficeBtn from '../../reusable/frontoffice button/frontoffice-button'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/MODI-logo-white.png'


export default function NotFound() {

    const navigate = useNavigate()

    const handleBackHomepage = () => {
        navigate('/')
    }

    return (
        <>
            <div className={Styles.relative}>
                <img src={backgroundImage} className={Styles.image} />
                <div className={`${Styles.absolute} ps-5`}>
                    <img src={logo} className={Styles.logo}/>
                    <h4 className='mb-4'>Ooops, qualcosa è andato storto...</h4>
                    <FrontofficeBtn text={"Torna a casa, Lessie"} onClick={handleBackHomepage}/>
                </div>
            </div>
        </>
    )
}
