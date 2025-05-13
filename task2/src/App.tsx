import { useState } from 'react';
import { HighlightedTextarea } from './components/HighlightedTextarea';
import styles from './App.module.scss';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <h1>Task 2: Expression highlighter</h1>
      <HighlightedTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoSize={{ minRows: 5 }}
        placeholder="Enter expression..."
      />
      <div className={styles.examples}>
        <h2>Examples</h2>
        <p>Type 1: ("Kaspersky" OR "Avast") AND "antivirus"</p>
        <p>Type 2: (TI="Kaspersky" OR AB="Avast") AND NOT (DP="2021-21-17" OR URL="*.com")</p>
      </div>
    </div>
  );
}

export default App;