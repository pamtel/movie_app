import React from 'react'

const Movies = ({result}) => {
  return (
    <div className="movies">
      <div className="movie-box">
        <p>{result.Genre}</p>
      </div>
    </div>
  )
}

export default Movies