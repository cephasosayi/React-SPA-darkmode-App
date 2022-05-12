import React, {useState} from 'react'
import "./styles.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className='container'>
            <span style={{ color: darkMode ? 'grey': 'yellow'}}>Light</span>
            <div className='switch-checkbox'>
                <label className='switch'>
                <input type='checkbox' onChange={() => setDarkMode(!darkMode)} />
                <span className='round slider'></span>
                </label>
            </div>
            <span style={{ color: darkMode ? '#c69dfd' : 'grey'}}>Dark</span>
        </div>
        <h2>{ darkMode? 'Dark' : 'Light'} Mode</h2>
    </div>
  )
}

export default App;