function Baller({baller}) {
    return (
        baller ? (
            <div className="results">
                <ul>
                    {
                        baller.map(eachBaller => {
                            return (
                                <li key={eachBaller.id} className="baller">{eachBaller.first_name} {eachBaller.last_name}</li>
                            )
                        })
                    }
                </ul>
            </div>
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