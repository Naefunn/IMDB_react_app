import React from "react";


const Movie = ({title, children}) => {
    return(
        <>
        <li>
    
        <a href={children}>{title}</a>
        </li>
        </>
    )
}

export default Movie;
