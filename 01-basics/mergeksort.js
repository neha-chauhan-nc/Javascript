function mergeKLists(lists) {
    let values = [];

    for (let list of lists) {
        while (list) {
            values.push(list.val);
            list = list.next;
        }
    }

    values.sort((a, b) => a - b);

    let dummy = { val: 0, next: null };
    let current = dummy;

    for (let val of values) {
        current.next = {
            val,
            next: null
        };
        current = current.next;
    }

    return dummy.next;
}