function minWindow(s, t) {
    const need = {};
    const window = {};

    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    let have = 0;
    const needCount = Object.keys(need).length;

    let left = 0;
    let minLen = Infinity;
    let result = [-1, -1];

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        window[char] = (window[char] || 0) + 1;

        if (need[char] && window[char] === need[char]) {
            have++;
        }

        while (have === needCount) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                result = [left, right];
            }

            window[s[left]]--;

            if (
                need[s[left]] &&
                window[s[left]] < need[s[left]]
            ) {
                have--;
            }

            left++;
        }
    }

    const [start, end] = result;
    return minLen === Infinity
        ? ""
        : s.slice(start, end + 1);
}

console.log(
    minWindow("ADOBECODEBANC", "ABC")
); // BANC