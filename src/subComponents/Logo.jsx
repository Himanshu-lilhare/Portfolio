import React, { useRef } from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logos=styled.h1`
content: "FC";
display: inline-block;
color: ${props=>props.color==="dark"? darkTheme.text:darkTheme.body}; 
position: fixed; top: 2rem; left: 1.5rem; z-index: 3;
@media  only screen and (max-width:791px){
     font-size: 24px;
     font-weight: 600;
     left: 0.5rem;
     top: 2.1rem;
  }
@media  only screen and (max-width:357px){
  font-size: 19px;
   left: 0.5rem;
}

    `

const Logo = (props) => {

  const ref=useRef()

  return (
      <Logos ref={ref} color={props.theme}>
        FIT CODER
      </Logos>
  )
}

export default Logo