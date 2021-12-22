import axios from 'axios';
import React from 'react';



const Books = () => {
    const [books, setbooks] = React.useState()

    const fetchbooks = async () => {
        try {
            const token = localStorage.token = Math.random().toString(36)
            const api = await axios.get("https://reactnd-books-api.udacity.com/books/", {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
            setbooks(api.data);


        } catch (error) {
            console.log(error.message);
        }
    }
    React.useEffect(() => {
        fetchbooks()
    }, [])


    console.log(books);
    return null
}

export default Books