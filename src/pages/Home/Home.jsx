import React, {useEffect, useState} from 'react'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Image360 from '../../components/Image360/Image360'
import PopularServices from '../../components/PopularServices/PopularServices'

const Home = () => {
  return (
    <>
        <SearchPanel/>
        <Image360/>
        <PopularServices/>
    </>
  )
}

export default Home