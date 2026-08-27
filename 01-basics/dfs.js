function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start); // process node

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Example usage:
let graph = {
  0: [1, 2],
