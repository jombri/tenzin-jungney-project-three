function Form({ handleSubmit, handleChange, ballerInput, formError}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="baller" className="sr-only">enter a player</label>
                <input type="text" id="baller" onChange={handleChange} value={ballerInput} placeholder="enter a player's name..."/>

                <button>Enter</button>
                { formError ? <h2 className="alertBox">please try a different baller</h2> : null }
            </form>
            <p className="apiLink">Powered by 
                <span> <a href="https://www.balldontlie.io" target="_blank" rel="noopener noreferrer">balldontlie API</a>  </span>
            </p>
        </>
    )
}

export default Form;