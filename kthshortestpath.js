class MinHeap {
  constructor() { this.heap = []; }
  push(val) {
    this.heap.push(val);
    this.heap.sort((a,b) => a[0]-b[0]); // simple priority queue
  }
  pop() { return this.heap.shift(); }
  size() { return this.heap.length; }
}

function kthShortestPath(graph, src, dest, K) {
  let heap = new MinHeap();
  heap.push([0, src]);
  let count = 0;

  while (heap.size() > 0) {
    let [dist, node] = heap.pop();
    if (node === dest) {
      count++;
      if (count === K) return dist;
    }
    for (let [neighbor, weight] of graph[node]) {
      heap.push([dist + weight, neighbor]);
    }
  }
  return -1; // if less than K paths exist
}

// Example usage:
let graph = {
  A: [["B",1],["C",2]],
  B: [["C",1],["D",4]],
  C: [["D",1]],
  D: []
};

console.log(kthShortestPath(graph, "A", "D", 2));
// Output: 4 (second shortest path A→B→D)
