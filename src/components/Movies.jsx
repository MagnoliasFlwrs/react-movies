import React from 'react'
import Movie from './Movie';

export default function Movies(props) {
    const { movies = [] } = props;

  return (
    <div className='movies'>

        {
          !movies.lenght ?
            movies.map(movie  => (
                <Movie key={movie.imbID} {...movie}/>
            ))
            :
            <h3>Ничего не найдено</h3>
        }
    </div>
  )
}
