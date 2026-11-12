function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return 0;
    }

    const queue = [[beginWord, 1]];

    while (queue.length) {
        const [word, steps] = queue.shift();

        if (word === endWord) {
            return steps;
        }

        for (let i = 0; i < word.length; i++) {
            for (let ch = 97; ch <= 122; ch++) {
                const nextWord =
                    word.slice(0, i) +
                    String.fromCharCode(ch) +
                    word.slice(i + 1);

                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, steps + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0;
}

console.log(
    ladderLength(
        "hit",
        "cog",
        ["hot","dot","dog","lot","log","cog"]
    )
); // 5