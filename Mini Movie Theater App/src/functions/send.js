async function send(setReserved, reserves) {
    const reservedSeats = {
        reserves
    }

    const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(reservedSeats)
    }
    const res =  await fetch('http://localhost:4000/reservations/', options)
    const data = await res.json()
setReserved(data)
}


export default send