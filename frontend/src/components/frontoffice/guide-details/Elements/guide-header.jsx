import React from 'react'
import Styles from '../guide-details.module.css'
import {GeoAlt, EmojiSmile} from 'react-bootstrap-icons'
import {Row, Col} from 'react-bootstrap'

export default function GuideHeader({title, subtitle, museum, creatorName, creatorLastName, image}) {
    return (
        <>
            <Row className='mt-5 d-flex flex-xs-column ps-0'>
                <Col xs={2} md={5} className='d-flex align-items-end'>
                    <div className={Styles.zIndex}>
                        <h1 className={Styles.headline}>{title}</h1>
                        <h5>{subtitle}</h5>
                        <div className='d-flex gap-4 align-items-center pt-3 mb-2'>
                            <GeoAlt color='white' size={24}/>
                            <p className='m-0'>{museum}</p>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <EmojiSmile color='white' size={22}/>
                            <p className='m-0' >{creatorName} {creatorLastName}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={10} md={7} >
                    <img src={image} className={`${Styles.coverImg} px-1`} />
                </Col>
            </Row>
        </>
    )
}
