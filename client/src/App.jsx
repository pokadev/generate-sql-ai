import sqlLogo from "./assets/sql-logo.png";
import styles from "./index.module.css";

import { useState } from "react";
function App() {
  const [queryDescription, setQueryDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited', queryDescription);
  }
  return (
    <>
      <main className={styles.main}>
        <img src={sqlLogo} alt="sqlLogo" className={styles.icon} />
        <h3>Generate SQL with AI</h3>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query-description"
            placeholder="Describe your query"
            onChange={(e) => setQueryDescription(e.target.value)}
          />
          <input type="submit" value="Describe query " />
        </form>
      </main>
    </>
  );
}

export default App;
