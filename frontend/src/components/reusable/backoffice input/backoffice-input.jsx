import React from 'react'
import Styles from '../backoffice input/backoffice-input.module.css'
import { Form } from 'react-bootstrap'

export default function BackofficeInput({labelText, onChange, name, type, ariaDescribedBy, placeholder}) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className={`${Styles.label} py-2`}>{labelText}</Form.Label>
            <Form.Control
                onChange={onChange}
                name={name}
                type={type}
                className={`${Styles.formControl}`}
                placeholder={placeholder}
            />
        </Form.Group>
    )
}
