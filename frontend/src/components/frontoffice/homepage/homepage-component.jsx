import React from 'react'
import Navbar from '../../reusable/frontoffice navbar/Navbar'
import Hero from './Elements/hero'
import Description from './Elements/description'
import Discover from './Elements/discover'

export default function HomepageComponent() {
  return (
    <>
      <Hero />
      <Description />
      <Discover />
    </>
  )
}
