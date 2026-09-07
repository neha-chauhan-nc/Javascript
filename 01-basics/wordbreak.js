function wordBreak(s, wordDict) {
  let set = new Set(wordDict);
  let memo = {};

  function dfs(start) {
    if (start === s.length) return true;
    if (memo[start] !== undefined) return memo[start];

    for (let end = start + 1; end <= s.length; end++) {
      let word = s.substring(start, end);
      if (set.has(word) && dfs(end)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  }

  return dfs(0);
}

// Example usage:
console.log(wordBreak("leetcode", ["leet","code"])); 
// Output: true
