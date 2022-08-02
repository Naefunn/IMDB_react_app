import React, {useState} from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import Calender from "../components/Calender";


const MovieBox = () => {

    const [movies, setMovies] = useState(
        [
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            name: "The Lego Movie 2: The Second Part",
            url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
        ]
    )

    const addMovie = (submittedMovie) => {
        submittedMovie.id = Date.now()
        const updatedMovies = [...movies, submittedMovie]
        setMovies(updatedMovies);
    }

    return (
        <>
            <h1>Upcoming Movie Releases in the UK</h1>
            <hr></hr>
            < MovieList movies = {movies}/>
            <h2>Add A New Movie</h2>
            <MovieForm onMovieSubmit = {(movie) => addMovie(movie)}/>
            <Calender/>
        </>
    )

}

export default MovieBox;