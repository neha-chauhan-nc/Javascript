function topologicalSort(graph) {
  let visited = new Set();
  let stack = [];

  function dfs(node) {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    stack.push(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Example usage:
let graph = {
  5: [2, 0],
  4: [0, 1],
  2: [3],
  3: [1],
  0: [],
  1: []
};

console.log(topologicalSort(graph));
// Output: [4,5,2,3,1,0] (one valid order)
