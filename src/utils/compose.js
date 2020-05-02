export default (...fns) =>
    arg => fns.reduce((composed, f) => f(composed), arg);