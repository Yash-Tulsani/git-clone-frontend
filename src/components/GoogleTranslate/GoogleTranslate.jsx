import React, { useEffect,useState,useRef } from "react";
import { languageOptions } from "../../utils/languages";
import Select from "react-select";
import styles from './GoogleTranslate.module.css'

const GoogleTranslate = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    // in some cases, the google translate script adds a style to the opening html tag.
    // this added style disables scrolling.
    // the next 3 lines removes this added style in order to re-enable scrolling.
    if (window.document.scrollingElement.hasAttribute("style")) {
      window.document.scrollingElement.setAttribute("style", "");
    }
    console.log(targetRef.current," Hettttt")
  },[]);
  
  const [language, setLanguage] = React.useState('');

  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

    // Event Handlers
    const handleLanguageChange = (e,m,event) => {
      setLanguage(e);


  };

  return (
    <>
      <div id="google_translate_element"className={styles.googleTranslate}></div>
      {/* <Select
        className={`${styles.languageSelect} notranslate`}
        classNamePrefix="select"
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        name="language"
        options={languageOptions}
        placeholder="Select Language"
        onChange={handleLanguageChange}
        value={language}
      /> */}
    </>
    
  );
};

export default GoogleTranslate;