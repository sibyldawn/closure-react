function a() {
  let counter = 0;
  let status = 'happy';
  b(() => {
    counter++;
  });
  b(() => {
    console.log('---------- counter', counter);
  });
  b(() => {
    status = 'pumped';
  });
  b(() => {
    console.log('-------------- status', status);
  });
}

function b(fn) {
  fn();
}

a();
