export default function throttle(func, delay) {
  let timeoutId;
  let lastExec = 0;

  return function (...args) {
    const now = Date.now();
    const timeSinceLastExec = now - lastExec;

    if (!timeoutId && timeSinceLastExec >= delay) {
      lastExec = now;
      func.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastExec = Date.now();
        timeoutId = null;
        func.apply(this, args);
      }, delay - timeSinceLastExec);
    }
  };
}