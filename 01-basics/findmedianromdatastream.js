class MedianFinder {
    constructor() {
        this.nums = [];
    }

    addNum(num) {
        this.nums.push(num);
        this.nums.sort((a, b) => a - b);
    }

    findMedian() {
        const n = this.nums.length;
        const mid = Math.floor(n / 2);

        if (n % 2 === 0) {
            return (this.nums[mid - 1] + this.nums[mid]) / 2;
        }

        return this.nums[mid];
    }
}