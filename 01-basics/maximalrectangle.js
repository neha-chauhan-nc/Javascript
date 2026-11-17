function maximalRectangle(matrix) {
    if (!matrix.length) return 0;

    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    function largestRectangle(heights) {
        let stack = [];
        let area = 0;

        heights.push(0);

        for (let i = 0; i < heights.length; i++) {
            while (
                stack.length &&
                heights[i] < heights[stack[stack.length - 1]]
            ) {
                let h =
                    heights[stack.pop()];

                let w =
                    stack.length === 0
                        ? i
                        : i -
                          stack[stack.length - 1] -
                          1;

                area = Math.max(area, h * w);
            }

            stack.push(i);
        }

        heights.pop();

        return area;
    }

    for (let row of matrix) {
        for (let i = 0; i < cols; i++) {
            heights[i] =
                row[i] === "1"
                    ? heights[i] + 1
                    : 0;
        }

        maxArea = Math.max(
            maxArea,
            largestRectangle(heights)
        );
    }

    return maxArea;
}