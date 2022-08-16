function Baller({baller}) {
    return (
        baller ? (
                <ul className="resultDisplay">
                    {
                        baller.map(eachBaller => {
                            return (
                                <li key={eachBaller.id} className="ballerProfile">
                                    <span>{eachBaller.first_name} {eachBaller.last_name}</span>
                                    <span>({eachBaller.team.full_name})</span> 
                                </li>
                            )
                        })
                    }
                </ul>
        ) : <p className="placeholder">Search your baller!</p>
    )
}

export default Baller;

