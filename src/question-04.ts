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

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));