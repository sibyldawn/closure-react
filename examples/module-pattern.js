function a() {
  let counter = 0;
  let status = 'happy';
  b({
    increment: () => {
      counter++;
    },
    setStatus: newStatus => {
      status = newStatus;
    },
    getCount: () => counter,
    getStatus: () => status,
  });
}

function b(obj) {
  obj.increment();
  obj.setStatus('pumped');
  console.log('-------------- obj.getCount()', obj.getCount());
  console.log('-------------- obj.getStatus()', obj.getStatus());
}

a();
