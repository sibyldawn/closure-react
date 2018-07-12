function outer() {
  let counter = 0;
  return function() {
    counter++;
    // console.log('-------------- counter', counter);
  };
}

const increment = outer();
increment();