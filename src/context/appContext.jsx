import { createContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [notes, setNotes] = useState([]);

  return (
    <AppContext.Provider value={{ notes, setNotes }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
