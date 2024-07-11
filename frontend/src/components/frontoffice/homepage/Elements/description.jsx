import React from 'react'
import { Container } from 'react-bootstrap'
import Styles from '../homepage.module.css'

export default function Description() {
    return (
        <Container className='mt-4'>
            <div>
                <div className='py-5'>
                    <h2 className={Styles.h2}>Modi racconta l'arte a regola d'arte</h2>
                </div>
                <div className='pb-5'>
                    <p className={`${Styles.p} mb-0`}>Una raccolta di guide da poter vivere e ascoltare all'interno dei più bei luoghi di cultura italiani. Ogni guida è stata pensata e creata da esperti d'arte, per poter garantire un racconto unico e speciale anche dei quadri che altrimenti non avresti mai potuto scoprire.
                    </p>
                </div>
            </div>
            <div>
                <div className='py-5'>
                    <h2 className={Styles.h2}>Guide tematiche create da chi dell'arte ne ha fatto un lavoro</h2>
                </div>
                <div className='pb-5'>
                    <p className={`${Styles.p} mb-0`}>Le guide di Modì non sono guide qualunque, sono speciali.
                        Speciali perché create seguendo un Tema. Così facendo potrai scoprire l'Amore alla Pinacoteca di Brera, la Sofferenza a Villa Borghese, fare viaggi nelle più avvincenti storie mitologiche e immergerti nel piacere dell'arte secondo i tuoi desideri e ciò che vuoi esplorare. Grazie a Modì avrai la possibilità di ascoltare la storia e i simbolismi anche dei quadri che, nelle classiche guide, non vengono raccontati.
                    </p>
                </div>
            </div>
        </Container>
    )
}
