// Disadvantages of closure

// 1. Memory Usage (Memory Leaks)
// Closures keep variables in memory even after the outer function finishes.
// If you hold references too long, they prevent garbage collection, causing memory leaks — especially in large apps or loops.

function createBigClosure() {
  const bigArray = new Array(1000000).fill("Hiren");
  return function () {
    console.log(bigArray[0]);
  };
}

let ref = createBigClosure(); // bigArray stays in memory
// Even though createBigClosure() is done, bigArray is NOT freed
ref();
// ✅ Fix:
// Release references when no longer needed.

ref = null; // allows garbage collection to reclaim memory

// 2. Overuse → Confusing Code (Hard to Debug)

// Closures can make code harder to reason about because it’s not obvious where a variable comes from or why it persists.

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
const c2 = counter();

c1(); // 1
c1(); // 2
c2(); // 1  ← different closure

// 3. Performance Overhead

// Each closure carries its own lexical environment, which JS must keep in memory and manage.
// If you create thousands of closures (e.g., in event listeners or loops), it can increase:

// Memory consumption

// Garbage collection pressure

// Function call overhead

// Example:
for (let i = 0; i < 100000; i++) {
  document.body.addEventListener("click", () => console.log(i));
}

// Each listener forms a closure → huge overhead.

// ✅ Fix:
// Use delegation or shared handler functions when possible.
