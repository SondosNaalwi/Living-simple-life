import React from 'react'
import SidebarTitle from '../SidebarTitle'
import SidebarPosts from '../SidebarPosts'
import './styles.css'

function BottomSidebar() {
    return (
        <>
             <div className='sidebar-widget'>
            
                <SidebarTitle />
                <SidebarPosts />
                <SidebarPosts />
                <SidebarPosts />
            
             </div>
            
        </>
    )
}

export default BottomSidebar
