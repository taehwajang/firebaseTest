import { authService } from "../fbase";

import AppRouter from "./Router";
import React, { useState, useEffect } from "react";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggIn, setIsLoggIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggIn(true);
      } else {
        setIsLoggIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggIn={isLoggIn} /> : "Initializing...."}
      <footer>&copy; {new Date().getFullYear()}Nwitter </footer>
    </>
  );
}

export default App;
