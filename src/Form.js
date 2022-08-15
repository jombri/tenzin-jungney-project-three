function Form({ handleSubmit, handleChange, ballerInput, formError}) {
    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="baller">enter a player</label> */}
            <input type="text" id="baller" onChange={handleChange} value={ballerInput} placeholder="enter a player name..."/>

            <button>Enter</button>
            { formError ? <h2>please try a different baller</h2> : null }
        </form>
    )
}

export default Form;