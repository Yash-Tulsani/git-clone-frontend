import React, {useState,useRef} from 'react'
import styles from './SearchPanelContent.module.css'
import { useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SearchRecommendation from '../SearchRecommendation/SearchRecommendation';

const tagline="Empowering FPOs and Farmers for a Sustainable Harvest!"
const searchBarPlaceholder="Search for FPOs, Products, Services, etc."
const descipton="Empowering FPOs and Farmers for Sustainable Growth - Your Resourceful Agricultural Hub."


// Temporary
const dummySearchResults=[
  'FPO 1',
  'FPO 2',
  'FPO 3',
  'FPO 4',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
  'FPO 5',
];


const SearchPanelContent = () => {
  // States
  const theme = useTheme()
  const [search,setSearch]=useState('');
  const ref=useRef(null);

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

  // Event Handlers
  const handleInputChange=(e)=>{
    setSearch(e.target.value);
  }

  return (
    <div className={styles.container}>
        <div className={styles.tagline}  style={taglineStyle}>{tagline}</div>
        <div className={styles.searchBar} ref={ref}>
            <input type="text" placeholder={searchBarPlaceholder} value={search} onChange={handleInputChange}  className={styles.searchBarInput} />
            <div className={styles.searchButton} style={searchButtonStyle}>
              <span className={styles.searchButtonText} style={searchButtonTextStyle}>Search</span>
              <SearchIcon sx={searchIconStyle}/>
            </div>
        </div>
        {
          search.length>0 &&
            <SearchRecommendation targetRef={ref} searchResults={dummySearchResults}/>
        }
        <div className={styles.descipton} style={desciptonStyle}>
        Empowering <span style={highlightedTextStyle}>FPOs</span> and <span style={highlightedTextStyle}>Farmers</span> for <span style={highlightedTextStyle}>Sustainable Growth</span> - Your Resourceful Agricultural Hub.
        </div>
    </div>
  )
}

export default SearchPanelContent