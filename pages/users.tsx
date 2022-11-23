import React from 'react'
import LinkHref from '../components/LinkHref/LinkHref'

const users = () => {
    return (
        <div>
            <div className='navbar'>
                <LinkHref text={'Main page'} href={'/'} />
                <LinkHref text={'Users page'} href={'/users'} />
            </div>
            <h1>Users Page</h1>
        </div>
    )
}

export default users