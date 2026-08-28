function hasCycle(graph) {
  let visited = new Set();
  let recStack = new Set();

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      recStack.add(node);

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor) && dfs(neighbor)) return true;
        else if (recStack.has(neighbor)) return true;
      }
    }
    recStack.delete(node);
    return false;
  }

  for (let node in graph) {
    if (dfs(node)) return true;
  }
  return false;
}

// Example usage:
let graph = {
  A: ["B"],
  B: ["C"],
  C: ["A"] // cycle here
};

console.log(hasCycle(graph)); 
// Output: true
