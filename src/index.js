import React, { useState } from "react";
import ReactDOM from "react-dom";
import Comp2 from "./Comp2";
import LanguageContext from "./language-context";
import Comp1 from "./Comp1";

const App = () => {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <div>
        <div style={{ border: "1px solid black", margin: "20px" }}>
          <h2>AppComp - {language}</h2>
          <button onClick={() => setLanguage("App lang")}>
            Click on app component
          </button>
        </div>
        <div>
          {/* Can be nested */}
          <Comp1 />
          <Comp2 />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
