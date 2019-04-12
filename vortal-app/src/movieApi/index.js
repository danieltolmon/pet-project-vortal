
const movieApi = {

    url: `http://www.omdbapi.com/?apikey=1b0be5c6`,

    searchMovie(query) {
        return fetch(`${this.url}&s=${query}`) 
            .then(response => response.json())
            .then(response => {
                if (!response.Error) return response.Search

                else throw Error(response.Error)
            })
    },

    retrieveMovie(id) {
        return fetch(`${this.url}&i=${id}`) 
        .then(res => res.json())
        .then(response => {
            if (!response.Error) return response

            else throw Error(response.Error)
        })
    }
}

export default movieApi