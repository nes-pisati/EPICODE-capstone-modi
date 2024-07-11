import React from 'react'
import Styles from '../guide-details.module.css'
import { Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';


export default function Artists({paintingsDetails}) {

    const uniqueArtist = new Set();

    if (!paintingsDetails) {
        return (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    }

    return (
        <>
            <Row className='my-5'>
                <Col xs={12} md={6}>
                    <h4 className={Styles.artists}>In questo percorso troverai:</h4>
                </Col>
                <Col xs={12} md={6}>
                    <ul>
                        {paintingsDetails.slice(1).map((painting) => {
                            if (uniqueArtist.has(painting.artist)) {
                                return null
                            }

                            uniqueArtist.add(painting.artist)
                            return <li className={Styles.artistName}>{painting.artist}</li>
                        })}
                    </ul>
                </Col>
            </Row>
        </>
    )
}
