function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  let result = [];

  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return result;
}

// Example usage:
let graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

console.log(bfs(graph, 2)); 
// Output: [2,0,3,1]
