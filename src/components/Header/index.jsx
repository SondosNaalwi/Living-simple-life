import React from 'react'
import Liftheader from '../LeftHeader'
import RightHeader from '../RightHeader'
import './styles.css'
function Header() {
    return (
        <header>
        <div className='header-wrapper'>
          <Liftheader />  
          <RightHeader />
        </div>
         
       
        </header>
    )
}

export default Header
