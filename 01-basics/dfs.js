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
  1: [2],
  2: [0, 3],
  3: [3]
};

dfs(graph, 2);
// Output traversal: 2,0,1,3
