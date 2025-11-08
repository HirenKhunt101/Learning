function outer() {
  let count = 0;
  function inner() {
    let count = 1;
    function innest() {
      console.log(++count);
    }
    return innest;
  }
  return inner;
}

let counter = outer()();
counter();
counter();
counter();

// Output:
// 2
// 3
// 4
