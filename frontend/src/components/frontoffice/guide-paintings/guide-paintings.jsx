import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../reusable/frontoffice navbar/Navbar'
import Header from './Elements/header'
import PaintingsList from './Elements/paintings-list'
import axios from 'axios'

export default function GuidePaintingList() {

  const { id } = useParams()
  const URL = `http://localhost:3030/guide/${id}`

  const [guideInfo, setGuideInfo] = useState({})
  const [paintings, setPaintings] = useState([{
    _id: '',
    title: '',
    artist: '',
    date: '',
    paintingImg: '',
    description: ''
  }])

  console.log(paintings);

  useEffect(() => {
    const getGuide = async () => {
      try {
        const response = await axios.get(URL)
        setGuideInfo(response.data)
        setPaintings(response.data.paintings)
      } catch (error) {
        console.error(error)
      }
    };
    getGuide()
  }, [])

  console.log(paintings);

  return (
    <>
      <Navbar />
      <Header title={guideInfo.title} description={guideInfo.description}/>
      <PaintingsList paintings={paintings}/>
    </>
  )
}
