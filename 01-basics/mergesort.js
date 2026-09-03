class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeKLists(lists) {
  let heap = [];
  
  for (let node of lists) {
    if (node) heap.push(node);
  }
  heap.sort((a, b) => a.val - b.val);

  let dummy = new ListNode(0);
  let curr = dummy;

  while (heap.length > 0) {
    let node = heap.shift();
    curr.next = node;
    curr = curr.next;
    if (node.next) {
      heap.push(node.next);
      heap.sort((a, b) => a.val - b.val);
    }
  }
  return dummy.next;
}

// Example usage:
let a = new ListNode(1); a.next = new ListNode(4); a.next.next = new ListNode(5);
let b = new ListNode(1); b.next = new ListNode(3); b.next.next = new ListNode(4);
let c = new ListNode(2); c.next = new ListNode(6);

let merged = mergeKLists([a,b,c]);
let arr = [];
while (merged) { arr.push(merged.val); merged = merged.next; }
console.log(arr);
// Output: [1,1,2,3,4,4,5,6]
