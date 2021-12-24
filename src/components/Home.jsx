import axios from 'axios';
import React from 'react';
import Books from './books';
const Home = () => {
    const [search, setsearch] = React.useState('')
    const [apidata, setapidata] = React.useState()
    const [mockdata, setmockdata] = React.useState()



    const getmovie = async (postdata) => {
        try {
            const api = await axios.get(`https://reactnd-books-api.udacity.com/books`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': localStorage.token
                }
            }

            )
            const data = api.data.books.map(ele => {
                return {
                    id: ele.id,
                    title: ele.title,
                    authors: ele.authors.join(", "),
                    published: ele.publishedDate,
                    previewlink: ele.previewLink,
                    image: ele.imageLinks.smallThumbnail,
                    isreading: false,
                    islike: false,
                }
            })
            postdata(
                {
                    data: data
                }
            )
        } catch (error) {
            console.log(error.message);
        }
    }
    const getalldata = async () => {
        try {
            const api = await axios.get(`https://618dce1ffe09aa00174408ad.mockapi.io/react-probooks`)
            setapidata(api.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    const postdata = async ({ data }) => {
        try {

            const api = await axios.post(`https://618dce1ffe09aa00174408ad.mockapi.io/react-probooks`, { data })
            setmockdata(api.data)

        } catch (error) {
            console.log(error.message);
        }
    }
    React.useEffect(() => {
        getalldata()
    }, [])
    React.useEffect(() => {
        if (apidata) {
            console.log("it has data");
        }
        else {
            console.log("empty mockapi");
            getmovie(postdata)
        }
    }, [apidata])


    console.log(mockdata);


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
            {mockdata ? <Books books={mockdata} /> : null}
            <button className='floatingbutton' onClick={displayinput}>+</button>
        </React.Fragment>
    )
}

export default Home

/**
 * 0:
allowAnonLogging: true
authors: Array(1)
0: "William E. Shotts, Jr."
length: 1
[[Prototype]]: Array(0)
averageRating: 4
canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ"
categories: ['COMPUTERS']
contentVersion: "1.2.2.0.preview.2"
description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\""
id: "nggnmAEACAAJ"
imageLinks:
smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
[[Prototype]]: Object
industryIdentifiers: Array(2)
0: {type: 'ISBN_13', identifier: '9781593273897'}
1: {type: 'ISBN_10', identifier: '1593273894'}
length: 2
[[Prototype]]: Array(0)
infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
language: "en"
maturityRating: "NOT_MATURE"
pageCount: 480
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
printType: "BOOK"
publishedDate: "2012"
publisher: "No Starch Press"
ratingsCount: 2
readingModes: {text: true, image: false}
shelf: "currentlyReading"
subtitle: "A Complete Introduction"
title: "The Linux Command Line"
 */