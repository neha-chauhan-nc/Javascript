function findBridges(graph, V) {
  let time = 0;
  let visited = Array(V).fill(false);
  let disc = Array(V).fill(0);
  let low = Array(V).fill(0);
  let parent = Array(V).fill(-1);
  let bridges = [];

  function dfs(u) {
    visited[u] = true;
    disc[u] = low[u] = ++time;

    for (let v of graph[u]) {
      if (!visited[v]) {
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);

        if (low[v] > disc[u]) {
          bridges.push([u, v]);
        }
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) dfs(i);
  }

  return bridges;
}

// Example usage:
let graph = {
  0: [1,2],
  1: [0,2],
  2: [0,1,3],
  3: [2,4],
  4: [3]
};
console.log(findBridges(graph, 5));
// Output: [[3,4],[2,3]]
