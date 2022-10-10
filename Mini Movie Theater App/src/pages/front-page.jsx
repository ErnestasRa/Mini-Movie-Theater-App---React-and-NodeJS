import React from 'react'
import {
    Paper,
    Container,
  } from '@mui/material'
import MovieCard from '../components/movie-card'

const FrontPage = () => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    (async () => {
        const res = await fetch("http://localhost:4000/movies/")
        const data = await res.json()
        setMovies(data.movies)
    })()
}, [])

  console.log(movies)

  return (
 <Container>
    <Paper sx={{display: 'flex', flexDirection:'row', gap:3, mt:'10rem', justifyContent:'space-evenly'}}>
        {movies.map((movie, i) => {
       return <MovieCard 
        description={movie.description}
        href={movie.href}
        logo={movie.image}
        reservations={movie.reservations}
        title={movie.title}
        key={i}
       />
       })} 
    </Paper>
</Container>
  )
}

export default FrontPage