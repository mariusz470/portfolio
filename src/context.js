import React, { useContext, useState } from "react";

const LanguageContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(true);

  return (
    <LanguageContext.Provider
      value={{
        english,
        setEnglish,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
