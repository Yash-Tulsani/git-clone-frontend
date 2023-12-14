import React, {useState} from 'react'
import styles from './SearchPanelContent.module.css'
import { useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const tagline="Empowering FPOs and Farmers for a Sustainable Harvest!"
const searchBarPlaceholder="Search for FPOs, Products, Services, etc."
const descipton="Empowering FPOs and Farmers for Sustainable Growth - Your Resourceful Agricultural Hub."



const SearchPanelContent = () => {
  // States
  const theme = useTheme()

  // Styles
  const taglineStyle = {
    color: theme.palette.text.primary
  }
  const searchButtonStyle = {
    backgroundColor: theme.palette.secondary.main
  }
  const searchButtonTextStyle = {
    color: theme.palette.primary.main
  }
  const searchIconStyle = {
    color: theme.palette.primary.main
  }
  const highlightedTextStyle = {
    color: theme.palette.text.primary,
    fontSize: "22px",
  }
  const desciptonStyle = {
    color: theme.palette.text.secondary
  }

  return (
    <div className={styles.container}>
        <div className={styles.tagline}  style={taglineStyle}>{tagline}</div>
        <div className={styles.searchBar}>
            <input type="text" placeholder={searchBarPlaceholder}  className={styles.searchBarInput} />
            <div className={styles.searchButton} style={searchButtonStyle}>
              <span className={styles.searchButtonText} style={searchButtonTextStyle}>Search</span>
              <SearchIcon sx={searchIconStyle}/>
            </div>
        </div>
        <div className={styles.descipton} style={desciptonStyle}>
        Empowering <span style={highlightedTextStyle}>FPOs</span> and <span style={highlightedTextStyle}>Farmers</span> for <span style={highlightedTextStyle}>Sustainable Growth</span> - Your Resourceful Agricultural Hub.
        </div>
    </div>
  )
}

export default SearchPanelContent