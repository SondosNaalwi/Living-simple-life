import React from 'react'
import SectionParagraph from '../SecPara'
import SectionImage from '../SectionImage'
import SidebarTitle from '../SidebarTitle'
import './styles.css'
function TopSidebar() {
    return (
        <>
        <div className='sidebar-widget'> 
            <SidebarTitle />
            <SectionImage />
            <SectionParagraph />
        </div>
            
        </>
    )
}

export default TopSidebar
