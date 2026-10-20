const getChaseVerdict = (
  target: number,
  scored: number,
  ballsLeft: number
): string => {

  const runsNeeded = target - scored;

  if (runsNeeded <= 0) return "Won";

  if (ballsLeft <= 0) return "Lost";

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  if (requiredRate <= 6) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`; 
  } 
  
  if (requiredRate <= 12) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`; 
  } 
  
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`; 

};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));