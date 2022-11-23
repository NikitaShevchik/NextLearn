import Head from 'next/head'
import React from 'react'
import LinkHref from '../LinkHref/LinkHref'

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="keywords" content={"next js, react, next, nextjs, react, react js, " + keywords} />
            </Head>
            <div className='navbar'>
                <LinkHref text={'Main page'} href={'/'} />
                <LinkHref text={'Users page'} href={'/users'} />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer