const Links = () => {

    return (
        <>
        <div className="link">
            <a
                href="/protected"
                rel="noreferrer"
            >
                Protected
            </a>
        </div>
        <div className="link">
            <a
                href="/unprotected"
                rel="noreferrer"
            >
                Unprotected
            </a>
        </div>
        </>
    )
}

export default Links;