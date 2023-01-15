import React from "react";

// set the defaults
const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {}
});

export default LanguageContext;
