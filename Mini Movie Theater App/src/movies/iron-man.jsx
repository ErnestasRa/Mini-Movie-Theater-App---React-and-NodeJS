import React from 'react'
import {
    Container,
    Paper,
    Box,
    Typography,
    Button,
} from '@mui/material'
import boxSX from '../styles/box-sx'
import reservedSX from '../styles/reserved-box-sx'
import send from '../functions/send'
import handleClick from '../functions/handleClick'


const IronMan = () => {
    const [movie, setMovie] = React.useState([])
    const [seatCount, setSeatCount] = React.useState(0)
    const [reserves, setReserves] = React.useState([])
    const [reserved, setReserved] = React.useState([])

   
    React.useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:4000/ironman/")
            const data = await res.json()
            setMovie(data.ironman)
        })()
    }, [])
 

  let seats = (num) => {
    let arr = []
    for(let i = 0; i < num; i++){
      arr.push(<Box key={i} onClick={event => {handleClick(event,setSeatCount,seatCount); setReserves((reserves) => [...reserves, i])}} sx={boxSX}></Box>)
    }
    return arr
 }
  let reservations = (num) => {
    let arr = []
    for(let i = 0; i < num; i++){
      arr.push(<Box key={i} sx={reservedSX}></Box>)
    }
    return arr
 }

  return (
    <Container>
        <Paper>
            <Box>
               <Typography variant={'h5'}>{movie.title}</Typography>
               <Typography variant={'h6'}>{movie.reservations + seatCount}/100</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
                 {reservations(movie.reservations)}
                 {seats(100)}
            </Box>   
            <Box sx={{textAlign:'center'}}>
                <Button onClick={() => send(setReserved, reserves)}>Make a reservation</Button>
            </Box>
        </Paper>
    </Container>
  )
}

export default IronMan