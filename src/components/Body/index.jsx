import React from 'react'
import RightBody from '../RightBody'
import LeftBody from '../LeftBody'
import './styles.css'

function Body() {
    return (
        <>
        <div className=' container container-flex'>
            <main role='main'>
                <LeftBody /> 
            </main>
            
            <RightBody />
           
        </div>
            
        </>
    )
}

export default Body
