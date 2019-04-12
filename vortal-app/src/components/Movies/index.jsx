import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import './index.sass'

import Feedback from '../Feedback'

import { Input, Card, Icon } from 'antd'
const Search = Input.Search

export default withRouter(function (props) {
    const [movies, setMovies] = useState([])
    const [feedback, setFeedback] = useState('')

    async function handleSearch(query) {
        try {
            const results = await logic.searchMovie(query)
            setMovies(results)
            setFeedback('')
        }
        catch (error) {
            setFeedback(error.message)
            setMovies([])
        }
    };
    return (<div>
        <Search
            placeholder="search movie"
            onSearch={query => handleSearch(query)}
            style={{ width: 200 }}
        />
        {!!feedback && <Feedback message={feedback} />}
        {
            !!movies.length &&
            <div className='movies__results'>
               { movies.map((movie, index)=>
                                <Card
                                style={{ width: 300 }}
                                cover={<img alt={movie.Title} src={movie.Poster} />}
                                actions={[<Icon type="plus-circle" onClick={()=>props.history.push(`movie/${movie.imdbID}`)}/>]}
                                title={movie.Title}
                                key={index}
                                className='movies__movie'
                                onClick={()=>props.history.push(`movie/${movie.imdbID}`)}
                            />
                )}
            </div>
        }
    </div>)
})