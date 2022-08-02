import React from "react";
import { useState } from "react";

const MovieForm = ({onMovieSubmit}) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();

        if(!titleToSubmit || !urlToSubmit){
            return;
        }

        onMovieSubmit({
            name: titleToSubmit,
            url: urlToSubmit
        });

        setTitle("");
        setUrl("");
    }

    return(
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="text"
                placeholder="IMDB Link"
                value={url}
                onChange={handleUrlChange}
            />
            <input type="submit" value="Post"/>
        </form>
    )
};

export default MovieForm