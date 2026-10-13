function rotate(matrix) {
    const n = matrix.length;

    // transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];
        }
    }

    // reverse each row
    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
}

console.log(
    rotate([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])
);