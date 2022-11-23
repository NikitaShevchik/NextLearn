import React, { useState } from "react"
import LinkHref from "../components/LinkHref/LinkHref"

const index = ({ data }) => {
    const [users, setUsers] = useState(data)
    return (
        <div>
            <div className='navbar'>
                <LinkHref text={'Main page'} href={'/'} />
                <LinkHref text={'Users page'} href={'/users'} />
            </div>
            <h1> Main Page</h1>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>
                            <LinkHref text={user.name} href={`/users/${user.id}`} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default index;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: { data },
    }
}