function findDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return num;
        }

        set.add(num);
    }

    return -1;
}

console.log(findDuplicate([1,3,4,2,2])); // 2
console.log(findDuplicate([1,2,3,4]));   // -1