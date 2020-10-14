function Cycled(...args) {
    const arr = args[0]
    let index = 0;
    const iterable = {
        [Symbol.iterator]() {
            return this;
        },
        current(){
            if (index < arr.length) {
                return arr[index];
            } else {
                return { done: true };
            }
        },
        previous(){
            if (index < arr.length) {
                index--;
                return arr[index--];
            } else {
                return { done: true };
            }
        },
        next() {
            if (index < arr.length) {
                index++;
                return arr[index++];
            } else {
                return { done: true };
            }
        },
    };
    return iterable;
}

export { Cycled };
