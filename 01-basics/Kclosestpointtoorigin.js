function kClosest(points, k) {
    points.sort((a, b) => {
        const distA = a[0] * a[0] + a[1] * a[1];
        const distB = b[0] * b[0] + b[1] * b[1];

        return distA - distB;
    });

    return points.slice(0, k);
}

console.log(kClosest([[1,3],[-2,2]], 1));
// [[-2,2]]