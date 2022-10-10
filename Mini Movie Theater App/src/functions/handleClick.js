const handleClick = (event, setSeatCount, seatCount) => {
    event.currentTarget.style.backgroundColor = 'red';
    event.currentTarget.style.color = 'white';
    setSeatCount(seatCount + 1)
  };

export default handleClick