import React from 'react';
import Books from './books';
const Home = () => {
    const [search, setsearch] = React.useState('')

    const displayinput = () => {
        document.querySelector(".input").classList.toggle("show")
    }
    return (
        <React.Fragment>
            <header>
                <h1>ProBooks</h1>
            </header>
            <div className='input'>
                <form onSubmit={null} >
                    <input type="search" placeholder='search' value={search} onChange={(e) => setsearch(e.target.text)} required />
                </form>
            </div>
            <Books />
            <button className='floatingbutton' onClick={displayinput}>+</button>
        </React.Fragment>
    )
}

export default Home