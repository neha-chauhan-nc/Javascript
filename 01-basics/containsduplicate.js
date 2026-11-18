function containsDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false