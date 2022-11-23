import React from 'react';
import LinkHref from '../components/LinkHref/LinkHref';
import MainContainer from '../components/MainContainer/MainContainer';

const users = ({ users }) => {
    return (
        <MainContainer keywords={"users, user, users page"}>
            <h1>Users Page</h1>
            <ul>
                {users.map((user: { id: React.Key; name: any }) => {
                    return (
                        <li key={user.id}>
                            <LinkHref text={user.name} href={`/users/${user.id}`} />
                        </li>
                    )
                })}
            </ul>
        </MainContainer>
    )
}

export default users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: { users },
    }
}