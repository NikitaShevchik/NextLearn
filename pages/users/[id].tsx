import { useRouter } from "next/router"

export default function ({ user }) {
    return (
        <div>
            Name: {user.name}
            <br />
            Email: {user.email}
            <br />
            Phone: {user.phone}
            <br />
            Username: {user.username}
            <br />
            Website: {user.website}
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user },
    }
}