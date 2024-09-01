import React from "react";
import MapComponent from "./components/Map";
import Valss from "./components/input/index.jsx";
import styles from "./components/input/input.module.css"

function App() {
  return (
    <div className="App">
      <h1>Indian Ocean Map</h1>
      <div className={styles.mainContainer}>
          <MapComponent/>
          <Valss/>
      </div>
    </div>
  );
}

export default App;
