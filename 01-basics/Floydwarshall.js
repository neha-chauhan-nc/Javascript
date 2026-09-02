function floydWarshall(graph) {
  let V = graph.length;
  let dist = Array.from({ length: V }, (_, i) => [...graph[i]]);

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}

// Example usage:
let INF = Infinity;
let graph = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0]
];

console.log(floydWarshall(graph));
// Output: shortest path matrix
