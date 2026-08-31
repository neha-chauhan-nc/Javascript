function bellmanFord(vertices, edges, source) {
  let dist = Array(vertices).fill(Infinity);
  dist[source] = 0;

  for (let i = 1; i < vertices; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // check for negative cycle
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return "Graph contains negative weight cycle";
    }
  }

  return dist;
}

// Example usage:
let edges = [
  [0,1,4],
  [0,2,5],
  [1,2,-3],
  [2,3,4],
  [3,1,-10]
];

console.log(bellmanFord(4, edges, 0));
// Output: "Graph contains negative weight cycle"
