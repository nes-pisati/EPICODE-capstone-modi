import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FrontofficeGuideCard from './guide-card';
import axios from 'axios'
import SelectMuseum from './select-museum';
import FindGuide from './find-guide';

export default function GuidesList() {

  const [guides, setGuides] = useState([])
  const [selectedMuseum, setSelectedMuseum] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getGuides = async () => {
      try {
        const response = await axios.get('http://localhost:3030/guide')
        setGuides(response.data)
      } catch (error) {
        console.error(error)
      }
    }; getGuides()
  }, [])

  const handleSearch = (search) => {
    setSearch(search)
  }

  const filteredGuides = guides.filter(guide => {
    const museumFilter = selectedMuseum ? guide.museum.name === selectedMuseum : true;
    const keywordFilter = search ? guide.title.toLowerCase().includes(search.toLowerCase()) : true;
    return museumFilter && keywordFilter
  })

  return (
    <Container className='mt-3'>
      <Row className='d-flex align-items-center gap-2'>
        <SelectMuseum onSelectMuseum={setSelectedMuseum}/>
        <FindGuide onSearch={handleSearch}/>
      </Row>
      <Row className='mt-5 pb-5'>
        {filteredGuides.map(guide => (
          <FrontofficeGuideCard
            key={guide._id}
            id={guide._id}
            museum={guide.museum.name}
            image={guide.coverImg}
            title={guide.title}
            subtitle={guide.subtitle}
          />
        ))}
      </Row>
    </Container>
  )
}
