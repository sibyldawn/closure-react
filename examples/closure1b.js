function a(counter) {
  b(() => {
    counter++;
  });
  b(() => {
    console.log('---------- counter', counter);
  });
}

function b(fn) {
  fn();
}

a(7);
