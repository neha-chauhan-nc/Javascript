function kosarajuSCC(graph, V) {
  let visited = Array(V).fill(false);
  let stack = [];

  function dfs(u) {
    visited[u] = true;
    for (let v of graph[u]) {
      if (!visited[v]) dfs(v);
    }
    stack.push(u);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) dfs(i);
  }

  // transpose graph
  let transpose = Array.from({ length: V }, () => []);
  for (let u = 0; u < V; u++) {
    for (let v of graph[u]) {
      transpose[v].push(u);
    }
  }

  visited.fill(false);
  let result = [];

  function dfsTranspose(u, comp) {
    visited[u] = true;
    comp.push(u);
    for (let v of transpose[u]) {
      if (!visited[v]) dfsTranspose(v, comp);
    }
  }

  while (stack.length > 0) {
    let u = stack.pop();
    if (!visited[u]) {
      let comp = [];
      dfsTranspose(u, comp);
      result.push(comp);
    }
  }

  return result;
}

// Example usage:
let graph = {
  0: [1],
  1: [2],
  2: [0,3],
  3: [4],
  4: []
};
console.log(kosarajuSCC(graph, 5));
// Output: [[0,1,2],[3],[4]]
