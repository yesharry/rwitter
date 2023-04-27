import React, { useState } from "react";
import Router from "./Router";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Rwitter</footer>
    </>
  );
}

export default App;
