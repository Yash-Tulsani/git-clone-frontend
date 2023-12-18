import React from 'react'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Image360 from '../../components/Image360/Image360'
import PopularServices from '../../components/PopularServices/PopularServices'
import AboutSection from '../../components/AboutSection/AboutSection'
import AssistanceSection from '../../components/AssistanceSection/AssistanceSection'

const Home = () => {
  return (
    <>
        <SearchPanel/>
        <Image360/>
        <PopularServices/>
        <AboutSection/>
        <AssistanceSection/>
    </>
  )
}

export default Home