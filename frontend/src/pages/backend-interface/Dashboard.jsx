import React from 'react'
import SideBar from '../../components/backoffice/creator-dashboard/side-bar'
import GuideCollection from '../../components/backoffice/creator-dashboard/guide-collection'
import {Container, Row} from 'react-bootstrap'

export default function Dashboard() {
  return (
    <Container className=' m-0 p-0'>
      <Row>
        <SideBar />
        <GuideCollection />
      </Row>
    </Container>
  )
}
