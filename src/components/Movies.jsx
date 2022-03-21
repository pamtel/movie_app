import React from 'react'

const Movies = ({result}) => {
  return (
    <div className="movies">
      <h2>movie header</h2>
      <div className="movie-box">
        <p>{result.Genre}</p>
      </div>
    </div>
  )
}

export default Movies