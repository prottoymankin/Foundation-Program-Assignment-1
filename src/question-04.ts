const getCngFare = (
  distance: number, 
  isNight: boolean = false, 
  waitingMinutes: number = 0
): number => {

  // Extra: Handle negative distance input.
  if (distance < 0) return 0;

  let fare = 50;

  if (distance > 2) {
    fare += ((distance - 2) * 15);
  }

  if (waitingMinutes) {
    fare += (waitingMinutes * 2);
  }

  if (isNight) {
    fare += (fare * (20 / 100));
  }
  
  return fare;

};