import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "3Hcuc_2Y5CGXmc-rM56bcA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","fi","mr-IN","ml-IN","pa-IN","or-IN","te-IN","bn","bn-IN","hi-IN","ta-IN","ur-IN","zh","gu-IN","kn-IN","af","bg","nl","fr","gu","de","el","hi","ja","id","kn","it","pa","ml","th","ru","vi","sv","es"],
    
    backend: {
      loadPath: loadPath
    }
  })