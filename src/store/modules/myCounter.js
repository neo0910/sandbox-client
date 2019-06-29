const myCounter = {
    state: {
        counter: 0,
    },
    getters: {
        getCounter: state => state.counter,
    },
    mutations: {
        incrementCounter: state => state.counter++,
        decrementCounter: state => state.counter--,
        resetCounter: state => state.counter = 0,
    },
};

export default myCounter;