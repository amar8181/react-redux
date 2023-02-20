
import "./App.css";
import React from 'react';
import User from "./component/User";

function App() {

  return (
    <div className="App">

      {/* <h1>App component</  h1> */}
      <User data={{ name: "amar", email: "amarmulay23@gmail.com" }} />
    </div>
  );
}
export default App;