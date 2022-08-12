function Baller({baller}) {
    return (
        baller ? (
            <div className="results">
                <p className="baller">{baller[28].first_name}</p>
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