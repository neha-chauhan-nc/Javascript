function restoreIpAddresses(s) {
    const result = [];

    function backtrack(start, parts, path) {
        if (parts === 4 && start === s.length) {
            result.push(path.join("."));
            return;
        }

        if (parts === 4 || start === s.length) {
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let part = s.substring(start, start + len);

            if (
                (part.length > 1 && part[0] === '0') ||
                Number(part) > 255
            ) {
                continue;
            }

            path.push(part);
            backtrack(start + len, parts + 1, path);
            path.pop();
        }
    }

    backtrack(0, 0, []);
    return result;
}

console.log(restoreIpAddresses("25525511135"));