import React, {useState, useEffect}from 'react'

function FilmPoster({title}) {
    const [posterUrl, setPosterUrl] = useState('')

    useEffect(() => {
    const fetchPoster = async () => {

        const apiKey = 'c235cd8b'
        const url = `http://www.omdbapi.com/?t=apikey=apikey=${apiKey}&${title}`

        const response = await fetch(url)
        const data = await response
        setPosterUrl(data.Poster)

    }
    },[title]);

    return (
        <div>
          <h3>{title}</h3>
           <img src={posterUrl} alt={`${title} poster`} />
        </div>
      );
}

export default FilmPoster