export const getCounter = () => {
  const timeOfEvent = new Date('May 31 2023 00:00:00')
  const currentTime = new Date();

  const diff = timeOfEvent - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  return {
    daysLeft: daysLeft < 10 ? '0' + daysLeft : daysLeft, 
    hoursLeft: hoursLeft < 10 ? '0' + hoursLeft : hoursLeft, 
    minutesLeft: minutesLeft < 10 ? '0' + minutesLeft : minutesLeft, 
    secondsLeft: secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
  }

}

getCounter()