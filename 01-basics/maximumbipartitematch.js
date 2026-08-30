function bpm(graph, u, seen, matchR) {
  for (let v = 0; v < graph[0].length; v++) {
    if (graph[u][v] && !seen[v]) {
      seen[v] = true;
      if (matchR[v] < 0 || bpm(graph, matchR[v], seen, matchR)) {
        matchR[v] = u;
        return true;
      }
    }
  }
  return false;
}

function maxBipartiteMatching(graph) {
  let matchR = Array(graph[0].length).fill(-1);
  let result = 0;

  for (let u = 0; u < graph.length; u++) {
    let seen = Array(graph[0].length).fill(false);
    if (bpm(graph, u, seen, matchR)) result++;
  }
  return result;
}

// Example usage:
let graph = [
  [1,0,1,0],
  [0,1,0,1],
  [1,0,0,1]
];

console.log(maxBipartiteMatching(graph));
// Output: 3 (maximum matching pairs)
