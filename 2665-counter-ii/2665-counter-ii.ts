type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    var curr = init;
    return {
        increment: () => curr+=1,
        decrement: () => curr-=1,
        reset: () => {
            curr = init;
            return curr;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */