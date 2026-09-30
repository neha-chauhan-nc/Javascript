function canFinish(numCourses, prerequisites) {
    const graph = Array.from(
        { length: numCourses },
        () => []
    );

    const indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;

    while (queue.length) {
        const current = queue.shift();
        completed++;

        for (let neighbor of graph[current]) {
            indegree[neighbor]--;

            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return completed === numCourses;
}

console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false