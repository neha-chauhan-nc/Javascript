function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let word of wordDict) {
            const len = word.length;

            if (
                i >= len &&
                dp[i - len] &&
                s.slice(i - len, i) === word
            ) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

console.log(
    wordBreak("leetcode", ["leet", "code"])
); // true