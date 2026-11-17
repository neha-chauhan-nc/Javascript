function leastInterval(tasks, n) {
    const freq = {};

    for (let task of tasks) {
        freq[task] = (freq[task] || 0) + 1;
    }

    const counts = Object.values(freq);
    const maxFreq = Math.max(...counts);

    let maxCount = 0;

    for (let count of counts) {
        if (count === maxFreq) {
            maxCount++;
        }
    }

    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + maxCount
    );
}

console.log(
    leastInterval(
        ["A","A","A","B","B","B"],
        2
    )
); // 8