function rob(nums) {
    let prev1 = 0;
    let prev2 = 0;

    for (let money of nums) {
        let temp = Math.max(prev1, prev2 + money);
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
}

console.log(rob([2,7,9,3,1])); // 12