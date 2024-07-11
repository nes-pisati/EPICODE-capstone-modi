import React, { useState } from 'react'
import Styles from '../all-guides.module.css'
import { Col } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

export default function FindGuide({onSearch}) {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value)
        onSearch(value)
    }

    const handleSearchClick = () => {
        onSearch(searchValue)
    }

    return (
        <Col xs={12} md={12} lg={6} className='d-flex justify-content-center align-items-center'>
            <input type="text" className={Styles.input} placeholder="Cerca" value={searchValue} onChange={handleSearchChange}/>
            <button className={Styles.btn} onClick={handleSearchClick}>
                <Search color='white' size={24} className='ms-1' />
            </button>
        </Col>
    )
}
