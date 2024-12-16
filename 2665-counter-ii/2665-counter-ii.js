/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var curr = init;
        return {
        increment: function() {
            return curr+=1
        },
        decrement: function() {
            return curr-=1
        },
        reset: function() {
            curr = init
            return init
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */