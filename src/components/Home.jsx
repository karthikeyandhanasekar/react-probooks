
import React from 'react';


const Home = () => {

    const fetchbooks = async () => {
        try {
            const token = localStorage.token = Math.random().toString(36).substr(-8)
            const api = await fetch("https://reactnd-books-api.udacity.com/", {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
            const data  = await fetch(api.url);
            console.log(await data.json());

        } catch (error) {
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        fetchbooks()
    }, [])



    return null
}

export default Home