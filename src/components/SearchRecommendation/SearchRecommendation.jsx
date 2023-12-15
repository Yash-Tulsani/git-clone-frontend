import React, {useState,useEffect} from 'react'
import styles from './SearchRecommendation.module.css'
import { useTheme } from '@mui/material'

const SearchRecommendation = ({targetRef,searchResults}) => {
    const [positionStyle,setPositionStyle]=useState({});
    const theme=useTheme();

    // Styles
    const searchResultItemStyle={
        color: theme.palette.primary.dark
    }

    useEffect(()=>{
        if(targetRef.current){
            const targetElement=targetRef.current;
            console.log(targetElement.offsetTop, "Traget Element")
            console.log(targetElement.offsetHeight, "Traget Element")
            const position={
                position: 'absolute',
                top: `${targetElement.offsetTop+targetElement.offsetHeight}px`,
                left: `${targetElement.offsetLeft}px`,
                width: `${targetElement.offsetWidth*(52/100)}px`,
                minHeight: '100px',
                backgroundColor: theme.palette.primary.main,
            }
            setPositionStyle(position);
        }
    },[targetRef])
  return (
    <div style={positionStyle} className={styles.container}>
        {searchResults.map((result,index)=>(
            <div key={index} sx={searchResultItemStyle} className={styles.searchResultItem}>{result}</div>
        ))}
    </div>
  )
}

export default SearchRecommendation;