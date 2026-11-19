function isValidSudoku(board) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];

            if (value === ".") continue;

            const rowKey = `${r}-${value}`;
            const colKey = `${c}-${value}`;
            const boxKey =
                `${Math.floor(r / 3)}-${Math.floor(c / 3)}-${value}`;

            if (
                rows.has(rowKey) ||
                cols.has(colKey) ||
                boxes.has(boxKey)
            ) {
                return false;
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }

    return true;
}