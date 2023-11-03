const Entry = ({ name, number, search }) => {
    const lowerCaseName = name.toLowerCase()

    if (search !== "") {
        if (lowerCaseName.includes(search.toLowerCase())) {
            return (
                <p>{name} {number}</p>
            )
        } else {
            return (<></>)
        }
    } else {
        return (
            <p>{name} {number}</p>
        )
    }
}

export default Entry