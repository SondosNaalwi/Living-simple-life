import React from 'react'
import NavItem from '../NavItem'
import './styles.css'

function RightHeader() {
    const array = [1,2,3]
    return (
       <ul >
        { array.map(()=>
        <NavItem/>
        )}
        </ul>
    )
}



export default RightHeader

