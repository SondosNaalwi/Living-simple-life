import React from 'react'
import Title from '../Title'
import FirstArticlePara from '../FirstArticlePara'
import SubTitlee from '../SubTitlee'
import SecDate from '../SecDate'
import SectionImage from '../SectionImage'
import './styles.css'

function FirstArticle() {
    return (
        <article>
            <div className='article-recent-main'>
                <Title />
                <FirstArticlePara />
                <SubTitlee />
            </div>
            <div className='article-recent-secondary'>
                <SectionImage />
                <SecDate />

            </div>
            

        </article>
    )
}

export default FirstArticle
