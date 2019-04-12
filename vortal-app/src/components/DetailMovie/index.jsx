import React, { useEffect, useState } from 'react'
import logic from '../../logic';
import { withRouter } from 'react-router-dom'

import Feedback from '../Feedback'
import './index.sass'

export default withRouter(function (props) {

    const [movie, setMovie] = useState(null)
    const [feedback, setFeedback] = useState('')

    useEffect(() => {
        const id = props.location.pathname.substring(7)
        console.log(id)
        getMovie(id)
    }, [])

    async function getMovie(id) {
        try {
            const result = await logic.retrieveMovie(id)
            console.log(result)
            setMovie(result)
            setFeedback('')
        }
        catch (error) {
            setFeedback(error.message)
            setMovie(null)
        }
    }
    return (<section>
        {!!feedback && <Feedback message={feedback} />}
        {!!movie &&
            <div>
                <h2>{movie.Title}</h2>
                <div className="detail__info">
                    <img src={movie.Poster} alt={movie.title} />
                    <div className="detail__text">
                        <h3 className="detail__text-first">Genre</h3>
                        <div>{movie.Genre}</div>
                        <h3>Director</h3>
                        <div>{movie.Director}</div>
                        <h3>Writer</h3>
                        <div>{movie.Writer}</div>
                        <h3>Actors</h3>
                        <div>{movie.Actors}</div>
                        <h3>Description</h3>
                        <div>{movie.Plot}</div>
                    </div>
                </div>
            </div>
        }

    </section>)
})