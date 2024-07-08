import React from 'react'
import Navbar from '../../reusable/frontoffice navbar/Navbar'
import MainWrapper from './Elements/main-wrapper'
import GuidesList from './Elements/guides-list'

export default function AllGuides() {
  return (
    <>
        <Navbar />
        <MainWrapper />
        <GuidesList />
    </>
  )
}
