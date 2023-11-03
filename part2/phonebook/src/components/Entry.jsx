const Entry = ({ name, number, search }) => {
    if (search !== "") {

    } else {
        return (
            <p key={name}>{name} {number}</p>
        )
    }
}

export default Entry