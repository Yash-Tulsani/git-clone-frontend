import React from 'react'
import styles from './SearchPanel.module.css' 
import SearchPanelBackground from '../SearchPanelBackground/SearchPanelBackground'
import SearchPanelImagesBackground from '../SearchPanelImagesBackground/SearchPanelImagesBackground'
import SearchPanelContent from '../SearchPanelContent/SearchPanelContent'

const SearchPanel = () => {
  return (
    <section className={styles.container}>
      <SearchPanelBackground/>
      {/* <SearchPanelImagesBackground /> */}
      <SearchPanelContent/>
    </section>
  )
}

export default SearchPanel