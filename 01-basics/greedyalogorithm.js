function activitySelection(activities) {
  // sort by end time
  activities.sort((a, b) => a[1] - b[1]);
  let result = [];
  let lastEnd = -1;

  for (let [start, end] of activities) {
    if (start >= lastEnd) {
      result.push([start, end]);
      lastEnd = end;
    }
  }
  return result;
}

// Example usage:
let activities = [[1,2],[3,4],[0,6],[5,7],[8,9],[5,9]];
console.log(activitySelection(activities));
// Output: [[1,2],[3,4],[5,7],[8,9]]
