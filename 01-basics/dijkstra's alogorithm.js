function dijkstra(graph, source) {
  let dist = {};
  let visited = new Set();

  for (let node in graph) {
    dist[node] = Infinity;
  }
  dist[source] = 0;

  while (visited.size < Object.keys(graph).length) {
    let u = null;
    for (let node in dist) {
      if (!visited.has(node) && (u === null || dist[node] < dist[u])) {
        u = node;
      }
    }

    if (dist[u] === Infinity) break;
    visited.add(u);

    for (let [v, weight] of graph[u]) {
      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }
  return dist;
}

// Example usage:
let graph = {
  A: [["B", 1], ["C", 4]],
  B: [["C", 2], ["D", 6]],
  C: [["D", 3]],
  D: []
};

console.log(dijkstra(graph, "A"));
// Output: { A:0, B:1, C:3, D:6 }
