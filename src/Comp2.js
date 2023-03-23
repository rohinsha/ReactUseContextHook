import React, { useContext } from "react";
import LanguageContext from "./language-context";
const Comp2 = () => {
  //const { language, setLanguage } = useContext(LanguageContext);
  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => {
        return (
          <div style={{ border: "1px solid black", margin: "20px" }}>
            <h3>Child2 - {language}</h3>

            <button onClick={() => setLanguage("Comp2 lang")}>
              Click on Comp2 ({language})
            </button>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};
export default Comp2;
