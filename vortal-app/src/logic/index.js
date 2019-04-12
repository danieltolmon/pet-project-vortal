
import movieApi from '../movieApi'

const logic = {
    searchMovie(query) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');
        if (!query.trim().length) throw Error('query cannot be empty');

        return movieApi.searchMovie(query)
            .then(movies => movies.map(movie => {
                if (movie.Poster === 'N/A') movie.Poster = 'https://uae.microless.com/cdn/no_image.jpg'
                return movie
            }))
    },

    retrieveMovie(id) {
        if (typeof id !== 'string') throw TypeError(id + ' is not a string');
        if (!id.trim().length) throw Error('id cannot be empty');

        return movieApi.retrieveMovie(id)
            .then(movie => {
                if (movie.Poster === 'N/A') movie.Poster = 'https://uae.microless.com/cdn/no_image.jpg'
                return movie
            }
            )
    }
}

export default logic