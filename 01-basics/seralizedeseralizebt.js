function serialize(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }

        result.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result.join(",");
}

function deserialize(data) {
    const values = data.split(",");

    function dfs() {
        const val = values.shift();

        if (val === "null") {
            return null;
        }

        const node = {
            val: Number(val),
            left: null,
            right: null
        };

        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
}