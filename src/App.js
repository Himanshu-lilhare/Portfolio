import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkills from "./components/MySkills"
import Projects from "./components/Projects"
import { darkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./GlobalStyles"
import "./App.css"
import SoundBar from "./subComponents/SoundBar"
import About from "./components/About"
import { createContext, useState } from "react"

export const CreateContext=createContext()

function App() {

   const [click, setClick] = useState(false);


  return <>
     <GlobalStyle/>
   <CreateContext.Provider value={click}>

 
   
     <ThemeProvider theme={lightTheme}>
     <SoundBar theme={click ? 'dark' : 'light'}/>
    
     <Routes>

  <Route path="/" element={<Main setClick={setClick}/>}></Route>
  <Route path="/projects" element={<Projects setClick={setClick}/>}></Route>
  <Route path="/skills" element={<MySkills/>}></Route>
  <Route path="/blogs" element={<BlogPage/>}></Route>
  <Route path="/about" element={<About/>}></Route>
     </Routes>
     </ThemeProvider>
     </CreateContext.Provider>
  </>
    
}

export default App

