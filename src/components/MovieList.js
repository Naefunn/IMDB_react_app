import React from "react";
import Movie from "./Movie";


const MovieList = ({movies}) => {
    const MovieNodes = movies.map(movie => {
        return (
            <Movie title={movie.name} key = {movie.id}>{movie.url}</Movie>
        )
    })

    return(
        <>
            <ul>{MovieNodes}</ul>
        </>
    )
}

export default MovieList;