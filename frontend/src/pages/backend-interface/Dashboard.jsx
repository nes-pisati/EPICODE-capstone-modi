import React from 'react'
import SideBar from '../../components/backoffice/creator-dashboard/side-bar'
import GuideCollection from '../../components/backoffice/creator-dashboard/guide-collection'

export default function Dashboard() {
  return (
    <div className='container m-0 p-0'>
      <div className='row'>
        <SideBar />
        <GuideCollection />
      </div>
    </div>
  )
}
