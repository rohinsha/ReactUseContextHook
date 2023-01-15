import React, { useContext } from "react";

import LanguageContext from "./language-context";

const Comp1 = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div style={{ border: "1px solid black", margin: "20px" }}>
      <h3>Child1 - {language}</h3>
      <button onClick={() => setLanguage("Comp1 lang")}>
        Click on Comp1 ({language})
      </button>
    </div>
  );
};

export default Comp1;
