function primMST(graph) {
  let V = graph.length;
  let key = Array(V).fill(Infinity);
  let parent = Array(V).fill(-1);
  let mstSet = Array(V).fill(false);

  key[0] = 0;

  for (let count = 0; count < V - 1; count++) {
    let u = -1;
    for (let i = 0; i < V; i++) {
      if (!mstSet[i] && (u === -1 || key[i] < key[u])) {
        u = i;
      }
    }

    mstSet[u] = true;

    for (let v = 0; v < V; v++) {
      if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }

  let mstWeight = key.reduce((a, b) => a + b, 0);
  return { parent, mstWeight };
}

// Example usage:
let graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];

console.log(primMST(graph));
// Output: { parent: [...], mstWeight: 16 }
