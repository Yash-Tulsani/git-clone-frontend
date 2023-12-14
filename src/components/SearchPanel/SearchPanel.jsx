import React from 'react'
import styles from './SearchPanel.module.css' 
import SearchPanelBackground from '../SearchPanelBackground/SearchPanelBackground'
import SearchPanelImagesBackground from '../SearchPanelImagesBackground/SearchPanelImagesBackground'

const SearchPanel = () => {
  return (
    <section className={styles.container}>
      <SearchPanelBackground/>
      <SearchPanelImagesBackground />
    </section>
  )
}

export default SearchPanel