import React from 'react';

import featureToggles from './feature-toggles';

import logo from './logo.svg';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        {/* <img src={logo} className={styles.appLogo} alt="logo" /> */}
        {featureToggles.tacos ? (
          <span className={styles.appLogo} role="img" aria-label="taco">
            🌮
          </span>
        ) : (
          <img src={logo} className={styles.appLogo} alt="logo" />
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
