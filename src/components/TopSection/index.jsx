import React from 'react'
import Title from '../Title'
import SectionImage from '../SectionImage'
import SecDate from '../SecDate'
import SectionParagraph from '../SecPara'
import SubTitlee from '../SubTitlee'
import './styles.css'


function TopSection() {
    return (
        <>
        <div className='article-featured'>
            <Title />
            <SectionImage />
            <SecDate />
            <SectionParagraph />
            <SubTitlee />
        </div>
            
        </>
    )
}

export default TopSection
