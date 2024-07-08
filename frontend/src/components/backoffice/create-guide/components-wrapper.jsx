import React, { useState } from 'react'
import GuideInfo from './guide-info'
import Painting from './guide-painting'
import Introduction from './guide-introduction'
import BackofficeBtn from '../../reusable/backoffice button/backoffice-button'
import { Button } from 'react-bootstrap'

export default function Wrapper() {

    const [currentComponent, setCurrentComponent] = useState('guideInfo');

    const handleChangeComponent = () => {
        if (currentComponent === 'guideInfo') {
            setCurrentComponent('intro')
        } else if (currentComponent === 'intro') {
            setCurrentComponent('painting')
        }
    }

    return (
        <div className='mt-5 row'>
            <div>
                {currentComponent === 'guideInfo' && <GuideInfo />}
                {currentComponent === 'intro' && <Introduction />}
                {currentComponent === 'painting' && <Painting />}
            </div>
            {currentComponent !== 'painting' && (
                <div className='row'>
                    <Button onClick={handleChangeComponent} className='align-self-end text-end bg-transparent border-0 text-black'> next step  </Button>
                </div>
            )}
        </div>
    )
}
