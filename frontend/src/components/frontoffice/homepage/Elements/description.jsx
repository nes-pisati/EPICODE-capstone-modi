import React from 'react'
import { Container } from 'react-bootstrap'
import Styles from '../homepage.module.css'

export default function Description() {
    return (
        <Container className='mt-4'>
            <div>
                <div className='py-5'>
                    <h2 className={Styles.h2}>L'arte raccontata a regola d'arte</h2>
                </div>
                <div className='pb-5'>
                    <p className={`${Styles.p} mb-0`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente unde harum perspiciatis ipsam soluta tempore odit optio? Cupiditate ullam, explicabo voluptatibus rerum dolores, velit numquam obcaecati, dolorem quam excepturi exercitationem.
                    In dolor doloremque blanditiis eveniet unde. Exercitationem neque velit reiciendis voluptatibus asperiores omnis cum a perferendis nisi deleniti repellat inventore corporis quo nobis odio dignissimos, perspiciatis incidunt maxime. Enim, mollitia!
                    </p>
                </div>
            </div>
            <div>
                <div className='py-5'>
                    <h2 className={Styles.h2}>L'arte raccontata a regola d'arte</h2>
                </div>
                <div className='pb-5'>
                    <p className={`${Styles.p} mb-0`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente unde harum perspiciatis ipsam soluta tempore odit optio? Cupiditate ullam, explicabo voluptatibus rerum dolores, velit numquam obcaecati, dolorem quam excepturi exercitationem.
                    In dolor doloremque blanditiis eveniet unde. Exercitationem neque velit reiciendis voluptatibus asperiores omnis cum a perferendis nisi deleniti repellat inventore corporis quo nobis odio dignissimos, perspiciatis incidunt maxime. Enim, mollitia!
                    </p>
                </div>
            </div>
        </Container>
    )
}
