// DarkModeContext.js
import { createContext } from 'react';

const DarkModeContext = createContext({
    isDark:false,
    setIsDark:()=>{}
});

export default DarkModeContext;