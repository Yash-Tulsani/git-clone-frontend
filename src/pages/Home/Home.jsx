import React, {useEffect, useState} from 'react'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Image360 from '../../components/Image360/Image360'
import PopularServices from '../../components/PopularServices/PopularServices'
import AboutSection from '../../components/AboutSection/AboutSection'
import AssistanceSection from '../../components/AssistanceSection/AssistanceSection'
import ApplyForWDC from '../../components/ApplyForWDC/ApplyForWDC'

const Home = () => {
  return (
    <>
        <SearchPanel/>
        <Image360/>
        <PopularServices/>
        <AboutSection/>
        <AssistanceSection/>
        <ApplyForWDC/>
    </>
  )
}

export default Home