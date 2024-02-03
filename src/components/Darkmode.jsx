import React from 'react'
import "./Dakmode.css"

function Darkmode() {
    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute('data-theme','dark')
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme','light')
        localStorage.setItem("selectedTheme","light")
    }
  const selectedTheme = localStorage.getItem("selectedTheme")

  if(selectedTheme==="dark"){
    setDarkMode();
  }

  const toggleTheme =(e)=>{
    if(e.target.checked) setDarkMode();
    else setLightMode();
  }
  return (
    <div>
        <input type="checkbox" id="darkmode"
        onChange={toggleTheme}
        defaultChecked ={selectedTheme==="dark"} />
        <label for="darkmode">

      
        </label>
   
    </div>
  )
}

export default Darkmode