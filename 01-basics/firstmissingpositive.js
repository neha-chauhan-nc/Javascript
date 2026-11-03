function firstMissingPositive(nums) {
    const set = new Set(nums);

    let i = 1;

    while (set.has(i)) {
        i++;
    }

    return i;
}

console.log(firstMissingPositive([3,4,-1,1])); // 2