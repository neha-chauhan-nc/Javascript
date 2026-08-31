function jobScheduling(jobs) {
  // sort jobs by profit descending
  jobs.sort((a, b) => b.profit - a.profit);

  let maxDeadline = Math.max(...jobs.map(j => j.deadline));
  let slots = Array(maxDeadline).fill(null);
  let totalProfit = 0;

  for (let job of jobs) {
    for (let i = job.deadline - 1; i >= 0; i--) {
      if (slots[i] === null) {
        slots[i] = job.id;
        totalProfit += job.profit;
        break;
      }
    }
  }
  return { schedule: slots, profit: totalProfit };
}

// Example usage:
let jobs = [
  {id: 'a', deadline: 2, profit: 100},
  {id: 'b', deadline: 1, profit: 19},
  {id: 'c', deadline: 2, profit: 27},
  {id: 'd', deadline: 1, profit: 25},
  {id: 'e', deadline: 3, profit: 15}
];

console.log(jobScheduling(jobs));
// Output: { schedule: ['c','a','e'], profit: 142 }
