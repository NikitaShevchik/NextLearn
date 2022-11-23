import LinkHref from "../components/LinkHref/LinkHref";

export default function Error() {
    return (
        <div>
            Page Not Found :(
            <LinkHref text="Return to the main" href="/" />
        </div>
    )
}