function dailyTemperatures(temps) {
    const result = new Array(temps.length).fill(0);
    const stack = [];

    for (let i = 0; i < temps.length; i++) {
        while (
            stack.length &&
            temps[i] > temps[stack[stack.length - 1]]
        ) {
            const index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
}

console.log(
    dailyTemperatures([73,74,75,71,69,72,76,73])
);
// [1,1,4,2,1,1,0,0]
``