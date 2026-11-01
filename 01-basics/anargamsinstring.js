function findAnagrams(s, p) {
    const result = [];

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 97]++;

        if (i >= p.length) {
            sCount[s.charCodeAt(i - p.length) - 97]--;
        }

        if (pCount.join() === sCount.join()) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
// [0, 6]