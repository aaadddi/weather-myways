
import './App.css';
import data from './weather.json'
import Weather from './Components/Weather';
import { Context, createContext, useState } from 'react';
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);
function App() {

  const [theme,setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light")
    );

  }
  

   return (
    <ThemeContext.Provider value ={{theme,toggleTheme}}>
    <div className="App">
      <header className="App-header" id= {theme}>
        <div className='toggle-switch'>
        
        <ReactSwitch onChange={toggleTheme} checked ={theme === "dark"} onHandleColor="#353535" offHandleColor="#FFFFFF" onColor="#000000" offColor='#353535'/>

        </div>
        <Weather data={data}/>
        
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
