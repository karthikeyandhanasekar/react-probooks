import axios from 'axios';
import React from 'react';
import Like from './Books/like';
import Read from './Books/read';
import Dislike from './Books/dislike';

/**authors: "William E. Shotts, Jr."
id: "nggnmAEACAAJ"
image: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
islike: null
isreading: null
previewlink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
published: "2012"
title: "The Linux Command Line" */


const Books = ({ books }) => {
    const bookdata = books[0]?.data;
    const [dislike, setdislike] = React.useState()
    console.log(bookdata);
    // const dislikelist = bookdata.find(ele => !ele.isisreading && !ele.islike)
    // if (!dislike)
    // setdislike(dislikelist)
//  console.log(dislike);


    return (
        <React.Fragment>
            <Read />
            <Like />
            <Dislike />

        </React.Fragment>
    )
}

export default Books