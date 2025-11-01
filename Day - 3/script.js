//"use strict";

console.log(Math.floor(Math.random() * 1e9));

let obj2 = {
  a: 20,
  obj: {
    a: 10,
    f: function () {
      return () => {
        console.log(this);
      };
    },
  },
};

obj2.obj.f()();
