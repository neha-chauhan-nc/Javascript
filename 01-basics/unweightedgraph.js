function shortestPath(graph, start, end) {
  let queue = [[start, 0]];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let [node, dist] = queue.shift();
    if (node === end) return dist;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // no path
}

// Example usage:
let graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: ["F"],
  E: ["F"],
  F: []
};

console.log(shortestPath(graph, "A", "F")); 
// Output: 3 (A → C → E → F)
