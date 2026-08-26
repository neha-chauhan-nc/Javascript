// LRU Cache using Map
class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.limit) {
      // delete least recently used
      let firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

let lru = new LRUCache(2);
lru.put(1, "A");
lru.put(2, "B");
console.log(lru.get(1)); // Output: "A"
lru.put(3, "C"); // removes key 2
console.log(lru.get(2)); // Output: -1
