function canCompleteCircuit(gas, cost) {
    let total = 0;
    let current = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];

        total += diff;
        current += diff;

        if (current < 0) {
            start = i + 1;
            current = 0;
        }
    }

    return total >= 0 ? start : -1;
}

console.log(
    canCompleteCircuit(
        [1,2,3,4,5],
        [3,4,5,1,2]
    )
); // 3