import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContxt';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>Toggle theme</button>
    )
}

export default ThemeToggle

