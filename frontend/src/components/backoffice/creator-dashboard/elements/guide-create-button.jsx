import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackofficeBtn from '../../../reusable/backoffice button/backoffice-button'

export default function CreateButton() {

    const navigate = useNavigate()

    const goCreate = () => {
        navigate('/create-guide')
    }

    return (
        <BackofficeBtn text={"Crea una nuova guida"} onClick={goCreate} />
    )
}
