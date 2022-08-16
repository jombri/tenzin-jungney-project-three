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




/* 
function Baller(props) {
    return (
        props.baller ? (
            <div className="results">
                <p className="baller">{props.baller.first_name}</p>
            </div>
        ) : <p className="placeholder">Search your baller!</p>
    )
}

export default Baller; */

/* ---------------- */

/* function Baller({baller}) {
    return (
        baller ? (
            <div className="resultDisplay">
                <span>First Name</span>
                <span>Last Name</span>
                <span>Position</span>
                <span>Team</span>
                <ul>
                    {
                        baller.map(eachBaller => {
                            return (
                                <li key={eachBaller.id} className="baller">{eachBaller.first_name} {eachBaller.last_name} {eachBaller.position} {eachBaller.team.full_name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        ) : <p className="placeholder">Search your baller!</p>
    )
}

export default Baller; */
